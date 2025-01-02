import { Navbar } from '@/components/navbar';
import '@/styles/globals.css';
import { cn } from '@/utils/utils';
import type { Metadata } from 'next';
import { EB_Garamond, Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const eb_garamond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'Addoxy - Full-stack Web Developer',
  description:
    'A full-stack web developer who loves to build and create beautiful user interfaces.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, eb_garamond.variable, 'scroll-smooth')}>
      <body
        className={cn(
          'dark flex min-h-screen flex-col bg-background font-sans text-foreground antialiased',
          process.env.NODE_ENV === 'development' && 'debug-screens'
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
