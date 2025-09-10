import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/vendor/tooltip';
import { cn } from '@/lib/utils';
import { JSX } from 'react';
import { IconProps } from './icons';
import { buttonVariants } from './vendor/button';

interface SocialCardProps {
  href: string;
  icon: (props: IconProps) => JSX.Element;
  content: string;
  caption: string;
  className?: string;
}

export const SocialCard = ({ href, icon, content, caption, className }: SocialCardProps) => {
  const Icon = icon;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          target="_blank"
          className={buttonVariants({
            variant: 'outline',
            size: 'icon',
            className: 'rounded-sm',
          })}
        >
          <Icon className={cn('text-foreground/70 size-5', className)} />
        </a>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="dark:border-border border border-black/5 py-2">
        <div className="flex items-center gap-2">
          <div className="dark:bg-foreground/5 bg-foreground/15 rounded-sm p-2">
            <Icon className="text-foreground/70 size-5" />
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-foreground text-sm">{content}</p>
            <p className="text-muted-foreground text-xs">{caption}</p>
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};
