
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Added Select imports
import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-[#F2C72C]">Contact Us</h1>
      <div className="section-title-divider"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div>
          <form className="space-y-4 border rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div>
                 <label className="block text-sm font-medium text-foreground mb-1" htmlFor="firstName">
                   First Name
                 </label>
                 <Input id="firstName" type="text" placeholder="First Name" />
               </div>
               <div>
                 <label className="block text-sm font-medium text-foreground mb-1" htmlFor="lastName">
                   Last Name
                 </label>
                 <Input id="lastName" type="text" placeholder="Last Name" />
               </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1" htmlFor="phone">
                  Phone
                </label>
                <Input id="phone" type="tel" placeholder="Phone Number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1" htmlFor="email">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your Email" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1" htmlFor="businessName">
                  Business Name
                </label>
                <Input id="businessName" type="text" placeholder="Your Business Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1" htmlFor="website">
                  Website
                </label>
                <Input id="website" type="url" placeholder="https://yourwebsite.com" />
              </div>
             </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1" htmlFor="services">
                What Services Are You Interested In?
              </label>
              <Textarea id="services" placeholder="e.g., Lead Generation, Sales Automation" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div>
                 <label className="block text-sm font-medium text-foreground mb-1" htmlFor="budget">
                   Budget
                 </label>
                 <Select>
                   <SelectTrigger id="budget">
                     <SelectValue placeholder="Select Budget Range" />
                   </SelectTrigger>
                   <SelectContent>
                     <SelectItem value="2k-5k">$2k - $5k</SelectItem>
                     <SelectItem value="5k-10k">$5k - $10k</SelectItem>
                     <SelectItem value="10k-20k">$10k - $20k</SelectItem>
                     <SelectItem value="20k+">$20k+</SelectItem>
                   </SelectContent>
                 </Select>
               </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1" htmlFor="referral">
                  How did you hear about us?
                </label>
                <Input id="referral" type="text" placeholder="e.g., LinkedIn, Referral" />
              </div>
             </div>
            <Button variant="primary" className="bg-accent text-foreground border-2 border-accent hover:bg-opacity-0 transition-colors duration-300">Submit</Button>
          </form>
        </div>
        <div>
          <Image
            src="https://picsum.photos/500/300" // Replace with actual image
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

