import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!clientEmail || !privateKey || !sheetId) {
      console.error('Missing Google API credentials in environment variables.');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Map the formData into an array representing a row.
    // Order: Name, Company, Goal, Challenge, Losses, Budget, Email, Date
    const rowData = [
      data.name || 'N/A',
      data.companyName || 'N/A',
      data.primaryGoal || 'N/A',
      data.biggestChallenge || 'N/A',
      data.estimatedLosses || 'N/A',
      data.estimatedBudget || 'N/A',
      data.contactEmail || 'N/A',
      new Date().toISOString()
    ];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A:H', // Make sure the sheet is named "Sheet1" and columns A to H are used
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    });

    return NextResponse.json([
      {
        status: 'success',
        data: {
          response: 'Data successfully appended to Google Sheet',
        },
      },
    ]);

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json([
      {
        status: 'error',
        data: {
          response: 'Failed to process request',
        },
      },
    ], { status: 500 });
  }
}
