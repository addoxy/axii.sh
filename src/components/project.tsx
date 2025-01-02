import { cn } from '@/utils/utils';
import Image from 'next/image';
import { AnimatedUnderline } from './animated-underline';
import { Badge } from './vendor/badge';
import { buttonVariants } from './vendor/button';

export interface ProjectProps {
  title: string;
  description: string;
  href: string;
  image: string;
  labels: string[];
  orientation: 'ltr' | 'rtl';
}

export const Project = ({ title, description, href, image, labels, orientation }: ProjectProps) => {
  return (
    <div className="flex items-center gap-16">
      <div className={cn('flex h-full flex-col', orientation === 'ltr' ? 'order-1' : 'order-2')}>
        <a href={href} target="_blank" className="text-3xl font-semibold">
          <AnimatedUnderline underlineSize="md">{title}</AnimatedUnderline>
        </a>
        <p className="mt-4 text-pretty text-lg text-foreground/70">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {labels.map((label, i) => (
            <Badge key={i} variant="secondary">
              {label}
            </Badge>
          ))}
        </div>
        <a
          href={href}
          target="_blank"
          className={cn(
            buttonVariants({
              className: 'mt-auto w-fit',
            })
          )}
        >
          Visit project
        </a>
      </div>
      <Image
        src={image}
        width={2848}
        height={1726}
        alt=""
        className={cn(
          'w-full max-w-[560px] rounded-xl transition-transform duration-500 group-hover:scale-[1.03]',
          orientation === 'ltr' ? 'order-2' : 'order-1'
        )}
      />
    </div>
  );
};
