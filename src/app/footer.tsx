"use client";

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; {new Date().getFullYear()} Tehcfusion Alchemy. All rights reserved.</p>
          <p>
            Contact Us: Phone: +44 1234 567890 | Email: info@tehcfusionalchemy.com
          </p>
          <p>Address: 123 Alchemy Street, London, UK</p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
            <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
