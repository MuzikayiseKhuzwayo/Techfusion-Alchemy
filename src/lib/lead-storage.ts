import { google } from 'googleapis';

export interface LeadRecord {
  name?: string;
  companyName?: string;
  primaryGoal?: string;
  biggestChallenge?: string;
  estimatedLosses?: string;
  estimatedBudget?: string;
  contactEmail?: string;
  source?: string;
}

const DEFAULT_SHEET_ID = '1mXATVxrU4lLpgpcwxZE9neePsolmvxd_pelYI9vf1tI';
const DEFAULT_SHEET_TAB = 'Techfusion-Alchemy-Leads';

export async function appendLeadToSheet(lead: LeadRecord): Promise<{ success: boolean; error?: string }> {
  try {
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const sheetId = process.env.GOOGLE_SHEET_ID || DEFAULT_SHEET_ID;
    const sheetTab = process.env.GOOGLE_SHEET_TAB || DEFAULT_SHEET_TAB;

    if (!clientEmail || !privateKey || !sheetId) {
      console.error('Missing Google API credentials in environment variables.');
      return { success: false, error: 'Server configuration error: missing Google credentials' };
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

    // Columns: Name, Company, Goal, Challenge, Losses, Budget, Email, Date
    const rowData = [
      lead.name || 'N/A',
      lead.companyName || 'N/A',
      lead.primaryGoal || (lead.source ? `[${lead.source}]` : 'N/A'),
      lead.biggestChallenge || 'N/A',
      lead.estimatedLosses || 'N/A',
      lead.estimatedBudget || 'N/A',
      lead.contactEmail || 'N/A',
      new Date().toISOString(),
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `${sheetTab}!A:H`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Error appending lead to Google Sheet:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error appending to sheet',
    };
  }
}
