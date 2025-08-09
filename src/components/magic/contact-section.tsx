// components/magic/contact-section.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { ContactFormSchema } from "@/lib/validators/contactForm";
import { PlexusBackground } from "./plexus-background";
import Link from "next/link";

type ContactFormData = z.infer<typeof ContactFormSchema>;

export function ContactSection() {
    // ... (Your existing useForm, onSubmit, etc. logic remains exactly the same here) ...
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<ContactFormData>({
      resolver: zodResolver(ContactFormSchema),
      defaultValues: { /* ... your defaults ... */ },
    });

    async function onSubmit(data: ContactFormData) {
        setIsSubmitting(true);
        // ... your submission logic ...
        // For demonstration, let's fake a submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
        toast({ title: "Form Submitted", description: "We'll be in touch soon!" });
        form.reset();
        setIsSubmitting(false);
    }

    return (
        <section className="relative py-20 sm:py-28 bg-grid-white/[0.05]">
             <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#000010] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-center mb-4 text-white">
                        Let’s Design Your Automated Business
                    </h2>
                    <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                        Discovery Call → Proposal → Onboarding → Build! It all starts with a conversation.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        className="h-[400px] lg:h-full w-full rounded-2xl border border-white/10 bg-white/5 p-4 overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                       <PlexusBackground />
                    </motion.div>
                    <div className="p-8 rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur-sm">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                {/* Form fields here, styled for the new theme */}
                                {/* Example of a styled field */}
                                <FormField
                                  control={form.control}
                                  name="firstName"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel className="text-gray-400">First Name</FormLabel>
                                      <FormControl>
                                        <Input className="bg-gray-800 border-gray-700 text-white focus:ring-cyan-500" placeholder="John" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                {/* ... Repeat for all other form fields, applying similar classes ... */}
                                <Link href="/contact">
                                    <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50" disabled={isSubmitting}>
                                        {isSubmitting ? 'Submitting...' : 'Start the Conversation'}
                                    </Button>
                                </Link>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}