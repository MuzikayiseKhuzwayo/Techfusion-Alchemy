"use client";

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground p-8 mt-20">
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
            </ul>
          </nav>

          {/* Contact Information */}
          <div>
            <p className="font-bold">Contact</p>
            <p>Phone: +44 1234 567890</p>
            <p>Email: info@techfusionalchemy.com</p>
          </div>

          {/* Address */}
          <div>
            <p className="font-bold">Address</p>
            <p>123 Alchemy Street</p>
            <p>London, UK</p>
          </div>
        </div>

        {/* Bottom Section: Copyright and Links */}
        <div className="flex justify-between items-center border-t pt-4">
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
