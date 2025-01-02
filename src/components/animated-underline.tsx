import { cn } from '@/utils/utils';

interface AnimatedUnderlinedTextProps {
  children: React.ReactNode;
  underlineSize?: 'sm' | 'md';
}

export const AnimatedUnderline = ({
  children,
  underlineSize = 'sm',
}: AnimatedUnderlinedTextProps) => {
  return (
    <div className="group relative inline-flex flex-col gap-[1px]">
      <div className="flex items-center gap-1 transition-colors">{children}</div>
      <div
        className={cn(
          'w-0 bg-foreground transition-all group-hover:w-full',
          underlineSize === 'sm' && 'h-px',
          underlineSize === 'md' && 'h-[2px]'
        )}
      />
    </div>
  );
};
