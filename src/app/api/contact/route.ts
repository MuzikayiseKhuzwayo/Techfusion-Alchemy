import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Forward the request to the n8n webhook
    const n8nResponse = await fetch('https://n8n.techfusion-ventures.xyz/webhook/438e2c6f-c574-4f0f-b108-c0823c41b91a', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await n8nResponse.json();

    // Format the response as required
    return NextResponse.json([
      {
        status: result?.status || 'success',
        data: {
          response: result?.response || 'No response returned',
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
