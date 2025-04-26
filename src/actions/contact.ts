
'use server';

import { z } from 'zod';
import { ContactFormSchema } from '@/lib/validators/contactForm'; // Import the schema

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

    // TODO: Implement actual submission logic here.
    // This could involve:
    // - Sending an email
    // - Saving data to a database (e.g., Firestore, Supabase)
    // - Calling a CRM API (e.g., HubSpot, Pipedrive)

    console.log('Form data received on server:', validation.data);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate potential failure (remove this in production)
    // if (Math.random() > 0.8) {
    //   throw new Error("Simulated server error during submission.");
    // }

    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    // Provide a generic error message to the client
    return { success: false, error: 'An unexpected server error occurred.' };
  }
}
