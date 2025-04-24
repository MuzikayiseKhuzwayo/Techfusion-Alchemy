import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Tehcfusion Alchemy. All rights reserved.</p>
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
