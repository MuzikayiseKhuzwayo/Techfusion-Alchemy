import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inquiry Logged',
  description: 'Your automation pipeline specifications have been logged for review by Muzikayise Khuzwayo.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
