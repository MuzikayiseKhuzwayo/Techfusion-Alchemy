import Link from 'next/link';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-secondary text-secondary-foreground p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">Tehcfusion Alchemy</Link>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/detailed-offerings" className="hover:underline">Offerings</Link></li>
          <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          <li>
            <Button variant="accent" size="sm">
              <Link href="/book-consultation">Book Consultation</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
