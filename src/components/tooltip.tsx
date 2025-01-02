import {
  TooltipContent,
  TooltipProvider,
  Tooltip as TooltipRoot,
  TooltipTrigger,
} from '@/components/vendor/tooltip';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  delayDuration?: number;
}

export const Tooltip = ({ children, content, delayDuration = 300 }: TooltipProps) => {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <TooltipRoot>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  );
};
