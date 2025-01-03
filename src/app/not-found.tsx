import { MaxWidthWrapper } from '@/components/max-width-wrapper';
import { buttonVariants } from '@/components/vendor/button';
import { cn } from '@/utils/utils';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <MaxWidthWrapper className="flex h-full w-full flex-col items-center justify-center py-20">
      <span className="text-muted-foreground">Oops...</span>
      <span className="mb-4 text-9xl font-bold">404</span>
      <span className="text-4xl font-bold text-muted-foreground">Not Found</span>
      <Link
        href="/"
        className={cn(
          buttonVariants({
            className: 'mt-10',
          })
        )}
      >
        Back home <ChevronRight />
      </Link>
    </MaxWidthWrapper>
  );
};

export default NotFoundPage;
