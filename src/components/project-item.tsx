import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { Badge } from './vendor/badge';
import { buttonVariants } from './vendor/button';

export interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  inProgress?: boolean;
  className?: string;
}

export const ProjectItem = ({
  title,
  description,
  imageUrl,
  link,
  inProgress,
  className,
}: ProjectProps) => {
  return (
    <div
      className={cn(
        'flex w-full max-w-5xl flex-col gap-10 border-x border-b border-dashed px-8 py-14 sm:px-16 md:flex-row',
        className
      )}
    >
      <div className="flex flex-col md:w-1/2">
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-bold">{title}</h3>
          {inProgress && (
            <Badge className="border-yellow-500/50 bg-yellow-500/50 text-yellow-700 dark:text-yellow-300">
              Currently building
            </Badge>
          )}
        </div>
        <p className="text-muted-foreground mt-3">{description}</p>

        <a
          href={link}
          target="_blank"
          className={cn(
            buttonVariants({
              className: 'group mt-8 w-fit',
            })
          )}
        >
          Visit Project
          <ArrowUpRight className="transition-transform duration-500 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
        </a>
      </div>
      <div className="bg-muted group hover:bg-foreground/10 dark:hover:bg-foreground/15 h-72 rounded-2xl border p-2 shadow-lg backdrop-blur-md transition-colors duration-500 md:w-1/2">
        <div className="skeleton h-full w-full overflow-hidden rounded-lg border">
          <Image
            src={imageUrl}
            width={1920}
            height={1080}
            alt={title + ' image'}
            priority
            className="relative z-50 h-full w-full object-cover object-top transition-all duration-500 group-hover:translate-y-1.5 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};
