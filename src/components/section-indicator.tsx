import { cn } from '@/utils/utils';
import { useInView } from 'motion/react';
import { useRef } from 'react';

interface SectionIndicatorProps {
  children: React.ReactNode;
}

export const SectionIndicator = ({ children }: SectionIndicatorProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="mb-6 flex items-center gap-2">
      <div className={cn('h-px w-4 bg-primary transition-all duration-1000', isInView && 'w-16')} />
      <span className="text-sm tracking-wider">{children}</span>
    </div>
  );
};
