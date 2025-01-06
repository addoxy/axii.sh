import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/vendor/dialog';
import Image from 'next/image';

interface FullScreenImageProps {
  image: string;
  title: string;
  description: string;
  width?: number;
  height?: number;
}

export const FullScreenImage = ({
  image,
  title,
  description,
  height,
  width,
}: FullScreenImageProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Image
          src={image}
          alt=""
          width={width || 2880}
          height={height || 1800}
          className="rounded-xl"
        />
      </DialogTrigger>
      <DialogContent className="w-full max-w-screen-xl bg-transparent p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <Image
          src={image}
          alt=""
          width={width || 2880}
          height={height || 1800}
          className="size-full rounded-xl"
        />
      </DialogContent>
    </Dialog>
  );
};
