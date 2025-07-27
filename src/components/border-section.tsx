import { cn } from '@/lib/utils';

type BorderSide = 'all' | 'x' | 'y' | 'top' | 'bottom' | 'left' | 'right' | 'none';

interface BorderSectionProps {
  children: React.ReactNode;
  side: BorderSide;
  className?: string;
}

export const BorderSection = ({ children, side, className }: BorderSectionProps) => {
  const sideClasses: Record<BorderSide, string> = {
    all: 'border',
    x: 'border-x',
    y: 'border-y',
    top: 'border-t',
    bottom: 'border-b',
    left: 'border-l',
    right: 'border-r',
    none: '',
  };
  return (
    <section
      className={cn('flex items-center justify-center border-dashed', sideClasses[side], className)}
    >
      {children}
    </section>
  );
};
