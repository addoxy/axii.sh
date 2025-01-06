import { cn } from '@/utils/utils';
import { Tooltip } from './tooltip';
import { buttonVariants } from './vendor/button';

export interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
}

export const SocialLink = ({ href, children }: SocialLinkProps) => {
  const tooltipContent = href.startsWith('mailto:') ? href.replace('mailto:', '') : href;

  return (
    <Tooltip content={tooltipContent}>
      <a
        href={href}
        target="_blank"
        className={cn(buttonVariants({ size: 'icon', variant: 'ghost' }))}
      >
        {children}
      </a>
    </Tooltip>
  );
};
