'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem = ({ label, href }: NavItemProps) => {
  return (
    <Link
      href={href}
      className="dark:hover:bg-background rounded-full px-5 py-2 text-sm font-medium transition-colors duration-500 hover:bg-white"
    >
      {label}
    </Link>
  );
};

export const Navbar = () => {
  const items: NavItemProps[] = [
    {
      label: 'Projects',
      href: '#projects',
    },
    {
      label: 'Articles',
      href: '#articles',
    },
    {
      label: 'Contact',
      href: '#contact',
    },
  ];

  const { resolvedTheme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className="bg-background sticky top-0 z-20 border-b border-dashed py-3">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" width={32} height={32} alt="logo" className="rounded-full" />
          axii.sh
        </Link>
        <div className="flex items-center gap-2">
          <div className="bg-muted flex items-center gap-1 rounded-full p-1.5">
            {items.map((item) => (
              <NavItem key={item.label} label={item.label} href={item.href} />
            ))}
          </div>
          <button
            className="bg-muted flex cursor-pointer items-center justify-center rounded-full p-1.5"
            onClick={handleThemeToggle}
          >
            <div className="dark:hover:bg-background rounded-full p-2.5 transition-colors duration-500 hover:bg-white">
              {resolvedTheme === 'light' ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};
