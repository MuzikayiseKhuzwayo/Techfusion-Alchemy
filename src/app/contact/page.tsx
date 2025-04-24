"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
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

