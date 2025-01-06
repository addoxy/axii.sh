import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/vendor/carousel';
import { NotionTemplateProps } from '@/data/notion-templates';
import { cn } from '@/utils/utils';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { AnimatedUnderline } from './animated-underline';
import { FullScreenImage } from './full-screen-image';
import { buttonVariants } from './vendor/button';

export const NotionTemplate = ({ title, description, link, images }: NotionTemplateProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <a href={link} target="_blank" className="text-2xl font-semibold sm:text-3xl">
          <AnimatedUnderline underlineSize="md">{title}</AnimatedUnderline>
        </a>
        <a href={link} target="_blank" className={cn(buttonVariants())}>
          <ExternalLink />
          View Template
        </a>
      </div>
      <p className="mt-4 text-base/7 text-foreground/70">{description}</p>
      <div className="mt-8">
        <Carousel>
          <div className="mb-2 flex items-center justify-between md:hidden">
            <ArrowLeft className="size-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Slide</span>
            <ArrowRight className="size-3 text-muted-foreground" />
          </div>
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image}>
                <FullScreenImage
                  image={image}
                  width={2880}
                  height={1800}
                  title={title}
                  description={description}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-muted-foreground max-md:hidden" />
          <CarouselNext className="border-muted-foreground max-md:hidden" />
        </Carousel>
      </div>
    </div>
  );
};
