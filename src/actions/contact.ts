
'use server';

import { z } from 'zod';
import { ContactFormSchema } from '@/lib/validators/contactForm'; // Import the schema

const WEBHOOK_URL = 'https://n8n.techfusion-ventures.xyz/webhook/c95c3466-2ad1-4226-83f6-dc8a1848cd98';

export async function submitContactForm(
  data: z.infer<typeof ContactFormSchema>
): Promise<{ success: boolean; error?: string }> {
  try {
    // Validate the data again on the server-side
    const validation = ContactFormSchema.safeParse(data);

    if (!validation.success) {
      console.error('Server-side validation failed:', validation.error.errors);
      return { success: false, error: 'Invalid form data.' };
    }

    console.log('Sending form data to webhook:', validation.data);

    // Send data to the webhook
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validation.data),
    });

    if (!response.ok) {
      // Try to get more specific error info from the webhook response if possible
      let errorBody = 'Webhook submission failed.';
      try {
        const responseBody = await response.json();
        errorBody = responseBody?.message || errorBody; // Adjust based on n8n error format
      } catch (jsonError) {
        // Ignore if response is not JSON or empty
      }
      console.error(`Webhook failed with status ${response.status}: ${errorBody}`);
      return { success: false, error: `Submission failed: ${errorBody}` };
    }

    console.log('Webhook submission successful.');
    return { success: true };

  } catch (error) {
    console.error('Error submitting contact form to webhook:', error);
    // Provide a generic error message to the client
    if (error instanceof Error) {
       return { success: false, error: `An unexpected error occurred: ${error.message}` };
    }
    return { success: false, error: 'An unexpected server error occurred.' };
  }
}
