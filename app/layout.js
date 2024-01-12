import '@/styles/globals.css';
import { inter } from '@/components/ui/fonts';
import { Metadata } from 'next';

export const metadata = {
  title: {
    template: '%s | Ucayali App',
    default: 'Ucayali Application',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default function RootLayout({  children,}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
