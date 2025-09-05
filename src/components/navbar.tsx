'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn, scrollToId } from '../lib/utils';
import { Logo } from './logo';
import { ThemeToggler } from './theme-toggler';
import { Button } from './vendor/button';

interface NavItemProps {
  label: string;
  href: string;
}

interface NavItemsProps {
  items: NavItemProps[];
  variant?: 'desktop' | 'mobile';
  onClick?: () => void;
}

const NavItems = ({ items, variant = 'desktop', onClick }: NavItemsProps) => {
  const desktopItemClass = 'dark:hover:bg-background rounded-full px-5 py-2 text-sm hover:bg-white';
  const mobileItemClass = 'hover:text-muted-foreground text-2xl ';

  const handleClick = (href: string) => {
    if (onClick) {
      onClick();
    }
    if (href.startsWith('#')) {
      const id = href.substring(1);
      scrollToId({ id, offset: -100 });
    }
  };

  return (
    <>
      {items.map((item) => (
        <button
          key={item.href}
          className={cn(
            'cursor-pointer font-medium transition-colors duration-500',
            variant === 'desktop' ? desktopItemClass : mobileItemClass
          )}
          onClick={() => handleClick(item.href)}
        >
          {item.label}
        </button>
      ))}
    </>
  );
};

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const items: NavItemProps[] = [
    {
      label: 'Projects',
      href: '#projects',
    },
    {
      label: 'Blog',
      href: '#blog',
    },
    {
      label: 'Contact',
      href: '#contact',
    },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-background sticky top-0 z-20 border-b border-dashed px-4 py-3">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-2 sm:flex">
          <div className="bg-muted flex items-center gap-1 rounded-full p-1.5">
            <NavItems items={items} variant="desktop" />
          </div>
          <ThemeToggler />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggler className="bg-transparent" />
          <Button size="icon" variant="ghost" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="size-4" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="bg-background/95 fixed inset-0 z-50 backdrop-blur-md sm:hidden">
          <div className="flex h-full flex-col">
            {/* Mobile Menu Header */}
            <div className="border-b border-dashed px-4 py-3">
              <div className="flex items-center justify-between">
                <Logo onClick={closeMobileMenu} />
                <div className="flex items-center gap-2">
                  <ThemeToggler className="bg-transparent" />
                  <Button size="icon" variant="ghost" onClick={closeMobileMenu}>
                    <X className="size-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex flex-1 flex-col items-center justify-center gap-8 px-4">
              <div className="flex flex-col items-center gap-6">
                <NavItems
                  items={items}
                  variant="mobile"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
