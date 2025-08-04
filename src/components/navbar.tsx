'use client';

import { Menu, Moon, Sun, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from './vendor/button';

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

const LogoComponent = ({ onClick }: { onClick?: () => void }) => (
  <Link href="/" className="flex items-center gap-2" onClick={onClick}>
    <Image
      src="/logo.png"
      width={32}
      height={32}
      alt="logo"
      className="rounded-full"
      priority
      unoptimized
    />
    axii.sh
  </Link>
);

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

  const { resolvedTheme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-background sticky top-0 z-20 border-b border-dashed px-4 py-3">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <LogoComponent />
        <div className="hidden items-center gap-2 sm:flex">
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
              <motion.div
                key={resolvedTheme}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {resolvedTheme === 'light' ? (
                  <Sun className="size-4" />
                ) : (
                  <Moon className="size-4" />
                )}
              </motion.div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 sm:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleThemeToggle}
            className="cursor-pointer p-1.5"
          >
            <motion.div
              key={resolvedTheme}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {resolvedTheme === 'light' ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </motion.div>
          </motion.button>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="icon" variant="ghost" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="size-6" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-background/95 fixed inset-0 z-50 backdrop-blur-md sm:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="flex h-full flex-col"
            >
              {/* Mobile Menu Header */}
              <div className="border-b border-dashed px-4 py-3">
                <div className="flex items-center justify-between">
                  <LogoComponent onClick={closeMobileMenu} />
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button size="icon" variant="ghost" onClick={closeMobileMenu}>
                      <X className="size-6" />
                    </Button>
                  </motion.div>
                </div>
              </div>

              {/* Mobile Menu Content */}
              <div className="flex flex-1 flex-col items-center justify-center gap-8 px-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex flex-col items-center gap-6"
                >
                  {items.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={item.href}
                        className="hover:text-muted-foreground text-2xl font-medium transition-colors duration-300"
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
