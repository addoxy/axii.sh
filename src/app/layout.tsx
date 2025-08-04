import { Navbar } from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Nunito } from 'next/font/google';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

const nunito = Nunito({
  variable: '--font-heading',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.axii.xyz'),
  title: 'Aditya Kumar | Full Stack Developer - Crafting Delightful Web Experiences',
  description:
    'Full-stack web developer passionate about building visually polished, high-performance websites that captivate and convert. Specializing in modern web technologies, scalable applications, and thoughtful user experiences.',
  category: 'technology',
  keywords: [
    'Full Stack Developer',
    'Web Developer',
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Frontend',
    'Backend',
    'Web Applications',
  ],
  authors: [{ name: 'Aditya Kumar' }],
  creator: 'Aditya Kumar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.axii.xyz',
    title: 'Aditya Kumar | Full Stack Developer',
    description:
      'Full-stack web developer passionate about building visually polished, high-performance websites that captivate and convert.',
    siteName: 'Aditya Kumar Portfolio',
    images: [
      {
        url: 'https://www.axii.xyz/logo.png',
        width: 192,
        height: 192,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Kumar | Full Stack Developer',
    description:
      'Full-stack web developer passionate about building visually polished, high-performance websites that captivate and convert.',
    creator: '@axiidotsh',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          nunito.variable,
          'bg-background mx-auto font-sans antialiased'
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
