import { NextResponse } from 'next/server';
import { appendLeadToSheet } from '@/lib/lead-storage';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const result = await appendLeadToSheet({
      name: data.name,
      companyName: data.companyName,
      primaryGoal: data.primaryGoal,
      biggestChallenge: data.biggestChallenge,
      estimatedLosses: data.estimatedLosses,
      estimatedBudget: data.estimatedBudget,
      contactEmail: data.contactEmail,
      source: 'Contact Form Wizard',
    });

    if (!result.success) {
      console.error('Failed to append lead to Google Sheet:', result.error);
      return NextResponse.json([
        {
          status: 'error',
          data: {
            response: result.error || 'Failed to process request',
          },
        },
      ], { status: 500 });
    }

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

