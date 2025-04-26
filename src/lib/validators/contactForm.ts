
import * as z from "zod";

export const ContactFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  phone: z.string().optional(), // Making phone optional as per original form structure
  email: z.string().email({ message: "Invalid email address." }),
  businessName: z.string().optional(),
  website: z.string().url({ message: "Invalid URL." }).optional().or(z.literal('')), // Allow empty string or valid URL
  services: z.string().min(1, { message: "Please specify interested services." }),
  budget: z.enum(["2k-5k", "5k-10k", "10k-20k", "20k+"]).optional(), // Optional as user might not select
  referral: z.string().optional(),
});
