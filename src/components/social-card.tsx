import { cn } from '@/lib/utils';
import { JSX } from 'react';
import { IconProps } from './icons';
import { buttonVariants } from './vendor/button';

interface SocialCardProps {
  href: string;
  icon: (props: IconProps) => JSX.Element;
  className?: string;
}

export const SocialCard = ({ href, icon, className }: SocialCardProps) => {
  const Icon = icon;

  return (
    <a
      href={href}
      target="_blank"
      className={buttonVariants({
        variant: 'outline',
        size: 'icon',
        className: 'rounded-sm',
      })}
    >
      <Icon className={cn('text-muted-foreground size-5', className)} />
    </a>
  );
};
