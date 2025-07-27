import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { buttonVariants } from './vendor/button';

export interface ArticleItemProps {
  title: string;
  description: string;
  link: string;
}

export const ArticleItem = ({ title, description, link }: ArticleItemProps) => {
  return (
    <div className="flex flex-col gap-4 border border-t-0 border-dashed p-6 transition-colors duration-300 even:border-l-0 last-of-type:border-b-0 hover:bg-zinc-50">
      <h3 className="text-lg font-semibold text-zinc-800">{title}</h3>
      <p className="line-clamp-3 text-sm text-zinc-600">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({
            className: 'group w-fit',
          })
        )}
      >
        Read more
        <ArrowUpRight className="transition-transform duration-500 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
      </a>
    </div>
  );
};
