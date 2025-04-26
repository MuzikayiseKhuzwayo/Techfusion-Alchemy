
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from 'next/image';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { submitContactForm } from "@/actions/contact"; // Assuming the action is reusable
import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react"; // Import useState
import { ContactFormSchema } from "@/lib/validators/contactForm"; // Import the schema

type ContactFormData = z.infer<typeof ContactFormSchema>;

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      businessName: "",
      website: "",
      services: "",
      budget: undefined, // Set default to undefined or a placeholder value if needed
      referral: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);
    try {
      const result = await submitContactForm(data);
      if (result.success) {
        toast({
          title: "Form Submitted",
          description: "Thank you for contacting us! We'll be in touch soon.",
        });
        form.reset(); // Reset form fields after successful submission
      } else {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-[#F2C72C]">Contact Us</h1>
      <div className="section-title-divider"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 border rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <FormField
                   control={form.control}
                   name="firstName"
                   render={({ field }) => (
                     <FormItem>
                       <FormLabel>First Name</FormLabel>
                       <FormControl>
                         <Input placeholder="First Name" {...field} />
                       </FormControl>
                       <FormMessage />
                     </FormItem>
                   )}
                 />
                 <FormField
                   control={form.control}
                   name="lastName"
                   render={({ field }) => (
                     <FormItem>
                       <FormLabel>Last Name</FormLabel>
                       <FormControl>
                         <Input placeholder="Last Name" {...field} />
                       </FormControl>
                       <FormMessage />
                     </FormItem>
                   )}
                 />
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                   control={form.control}
                   name="phone"
                   render={({ field }) => (
                     <FormItem>
                       <FormLabel>Phone</FormLabel>
                       <FormControl>
                         <Input type="tel" placeholder="Phone Number" {...field} />
                       </FormControl>
                       <FormMessage />
                     </FormItem>
                   )}
                 />
                 <FormField
                   control={form.control}
                   name="email"
                   render={({ field }) => (
                     <FormItem>
                       <FormLabel>Email</FormLabel>
                       <FormControl>
                         <Input type="email" placeholder="Your Email" {...field} />
                       </FormControl>
                       <FormMessage />
                     </FormItem>
                   )}
                 />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                   control={form.control}
                   name="businessName"
                   render={({ field }) => (
                     <FormItem>
                       <FormLabel>Business Name</FormLabel>
                       <FormControl>
                         <Input placeholder="Your Business Name" {...field} />
                       </FormControl>
                       <FormMessage />
                     </FormItem>
                   )}
                 />
                 <FormField
                   control={form.control}
                   name="website"
                   render={({ field }) => (
                     <FormItem>
                       <FormLabel>Website</FormLabel>
                       <FormControl>
                         <Input type="url" placeholder="https://yourwebsite.com" {...field} />
                       </FormControl>
                       <FormMessage />
                     </FormItem>
                   )}
                 />
               </div>
              <FormField
                 control={form.control}
                 name="services"
                 render={({ field }) => (
                   <FormItem>
                     <FormLabel>What Services Are You Interested In?</FormLabel>
                     <FormControl>
                       <Textarea placeholder="e.g., Lead Generation, Sales Automation" {...field} />
                     </FormControl>
                     <FormMessage />
                   </FormItem>
                 )}
               />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Budget</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger id="budget">
                              <SelectValue placeholder="Select Budget Range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="2k-5k">$2k - $5k</SelectItem>
                            <SelectItem value="5k-10k">$5k - $10k</SelectItem>
                            <SelectItem value="10k-20k">$10k - $20k</SelectItem>
                            <SelectItem value="20k+">$20k+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                <FormField
                   control={form.control}
                   name="referral"
                   render={({ field }) => (
                     <FormItem>
                       <FormLabel>How did you hear about us?</FormLabel>
                       <FormControl>
                         <Input placeholder="e.g., LinkedIn, Referral" {...field} />
                       </FormControl>
                       <FormMessage />
                     </FormItem>
                   )}
                 />
               </div>
              <Button type="submit" variant="primary" className="bg-accent text-foreground border-2 border-accent hover:bg-opacity-0 transition-colors duration-300" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </Form>
        </div>
        <div>
          <Image
            src="https://picsum.photos/500/300?random=6" // Kept the random image for now
            alt="Happy Business Person"
            width={500}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
