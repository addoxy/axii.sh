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
    <div className="flex flex-col items-start gap-16 lg:flex-row lg:items-center">
      <div
        className={cn(
          'flex h-full flex-col lg:w-1/2',
          orientation === 'ltr' ? 'lg:order-1' : 'lg:order-2'
        )}
      >
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
              className: 'mt-8 w-fit lg:mt-auto',
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
          'h-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.03] lg:w-1/2',
          orientation === 'ltr' ? 'lg:order-2' : 'lg:order-1'
        )}
      />
    </div>
  );
};
