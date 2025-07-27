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
}

export const ProjectItem = ({ title, description, imageUrl, link, inProgress }: ProjectProps) => {
  return (
    <div className="flex w-full max-w-5xl gap-10 border-x border-b border-dashed px-16 py-14 last-of-type:border-b-0">
      <div className="flex w-1/2 flex-col">
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-bold">{title}</h3>
          {inProgress && (
            <Badge className="border-yellow-500/50 bg-yellow-500/50 text-yellow-700 dark:text-yellow-300">
              Currently building
            </Badge>
          )}
        </div>
        <p className="mt-3">{description}</p>

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
      <div className="bg-muted ring-muted-foreground/10 dark:ring-muted-foreground/30 aspect-video w-1/2 rounded-3xl p-2 shadow-lg ring-1 backdrop-blur-md">
        <Image
          src={imageUrl}
          width={1920}
          height={1080}
          alt=""
          className="border-border/50 w-full rounded-2xl border"
        />
      </div>
    </div>
  );
};
