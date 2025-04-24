"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Name
              </label>
              <Input type="text" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Email
              </label>
              <Input type="email" placeholder="Your Email" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Message
              </label>
              <Textarea placeholder="Your Message" />
            </div>
            <Button variant="primary">Submit</Button>
          </form>
        </div>
        <div>
          <p className="text-md text-foreground">
            Additional Contact Details:
          </p>
          <p className="text-md text-foreground">
            Phone: +44 1234 567890
          </p>
          <p className="text-md text-foreground">
            Email: info@tehcfusionalchemy.com
          </p>
          <p className="text-md text-foreground">
            Address: 123 Alchemy Street, London, UK
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
