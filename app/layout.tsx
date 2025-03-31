import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import ResponsiveNav from '@/components/Home/Navbar/ResponsiveNav';

const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Product Landing Page ',
  description: 'Product Landing Page using Next js and tailwind',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
