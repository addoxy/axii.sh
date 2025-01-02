import { cn } from '@/utils/utils';

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn('mx-auto h-full w-full max-w-screen-xl px-2.5 sm:mb-24 md:px-20', className)}
    >
      {children}
    </div>
  );
};
