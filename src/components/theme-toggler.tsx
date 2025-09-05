'use client';

import { cn } from '@/lib/utils';
import { Moon, SunDim } from 'lucide-react';
import { useTheme } from 'next-themes';

interface ThemeTogglerProps {
  className?: string;
}

export const ThemeToggler = ({ className }: ThemeTogglerProps) => {
  const { theme, setTheme } = useTheme();

  function handleThemeChange() {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  if (!theme) return null;

  return (
    <div className={cn('bg-muted rounded-full p-1.5', className)}>
      <button
        onClick={handleThemeChange}
        className="dark:hover:bg-background cursor-pointer rounded-full p-2 transition-colors duration-500 hover:bg-white"
      >
        {theme === 'dark' ? <SunDim className="size-4" /> : <Moon className="size-4" />}
      </button>
    </div>
  );
};
