"use client";

import Link from 'next/link';
import {Facebook, Instagram, Twitter, Youtube} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-header text-foreground p-8 mt-20"> {/* Changed bg-secondary to bg-header */}
      <div className="container mx-auto">
        {/* Top Section: 1x4 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {/* Logo */}
          <div>
            <Link href="/" className="text-xl font-bold text-foreground">TechFusion Alchemy</Link>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-col space-y-2">
              <li><Link href="/" className="hover:underline text-foreground">Home</Link></li>
              <li><Link href="/about" className="hover:underline text-foreground">About Us</Link></li>
              <li><Link href="/detailed-offerings" className="hover:underline text-foreground">Offerings</Link></li>
              <li><Link href="/contact" className="hover:underline text-foreground">Contact</Link></li>
              <li><Link href="https://calendly.com/khuzwayomuzikayise/automated-growth-systems-consultation-30-minutes" target="_blank" rel="noopener noreferrer" className="hover:underline text-foreground">Book a Demo</Link></li>
            </ul>
          </nav>

          {/* Combined Contact Information and Address */}
          <div>
            <p className="font-bold">Contact</p>
            <p>Phone: +44 1234 567890</p>
            <p>Email: info@techfusionalchemy.com</p>
            <br />
            {/* Removed Address section as per previous request */}
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center">
            <p className="font-bold">Follow Us</p>
            <div className="flex flex-col space-y-4 mt-2"> {/* Added mt-2 for spacing */}
              <Link href="#" className="hover:text-accent text-foreground">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-accent text-foreground">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-accent text-foreground">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-accent text-foreground">
                <Youtube size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright and Links */}
        <div className="flex justify-between items-center border-t border-border pt-4"> {/* Added border-border for consistency */}
          <div>
            <p>&copy; {new Date().getFullYear()} TechFusion Alchemy. All rights reserved.</p>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/terms-of-service" className="hover:underline text-foreground">Terms of Service</Link></li>
              <li><Link href="/privacy-policy" className="hover:underline text-foreground">Privacy Policy</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
