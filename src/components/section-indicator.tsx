import { cn } from '@/utils/utils';

interface SectionIndicatorProps {
  children: React.ReactNode;
  isActive: boolean;
}

export const SectionIndicator = ({ children, isActive }: SectionIndicatorProps) => {
  return (
    <div className="mb-6 flex items-center gap-2">
      <div className={cn('h-px w-4 bg-primary transition-all', isActive && 'w-16')} />
      <span className="text-sm tracking-wider">{children}</span>
    </div>
  );
};
