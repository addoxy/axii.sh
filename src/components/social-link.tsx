import { cn } from '@/utils/utils';
import { Tooltip } from './tooltip';
import { buttonVariants } from './vendor/button';

export interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
}

export const SocialLink = ({ href, children }: SocialLinkProps) => {
  return (
    <Tooltip content={href}>
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
