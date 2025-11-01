'use client';

import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
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
    <button
      onClick={handleThemeChange}
      className={cn(
        'border-border hover:border-foreground hover:text-foreground text-muted-foreground inline-flex cursor-pointer items-center gap-1 border-b pb-0.5 text-sm transition-colors',
        className
      )}
    >
      {theme === 'dark' ? <Sun className="size-3.5" /> : <Moon className="size-3.5" />}
      <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  );
};
