"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`
      sticky top-0 z-50
      bg-secondary text-secondary-foreground
      p-4 flex justify-between items-center
      ${isSticky ? 'bg-secondary/75 backdrop-blur-sm' : ''}
      transition-all duration-300
    `}>
      <Link href="/" className="text-xl font-bold text-foreground">TechFusion Alchemy</Link>
      <nav>
        <ul className="flex space-x-4 items-center">
          <li><Link href="/about" className="hover:underline text-foreground px-4 py-2 hover:text-[#F2C72C]">About</Link></li>
          <li><Link href="/detailed-offerings" className="hover:underline text-foreground px-4 py-2 hover:text-[#F2C72C]">Offerings</Link></li>
          <li><Link href="/contact" className="hover:underline text-foreground px-4 py-2 hover:text-[#F2C72C]">Contact</Link></li>
          <li>
            <Button variant="accent" size="sm" className="border-2 border-accent text-foreground bg-accent hover:bg-accent/0 transition-colors duration-300">
              <Link href="/book-consultation">Book Consultation</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


