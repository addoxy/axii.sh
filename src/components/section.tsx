import { InView } from '@/components/vendor/in-view';
import { cn } from '@/utils/utils';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className }: SectionProps) {
  return (
    <InView
      as="div"
      variants={{
        hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      }}
      viewOptions={{ margin: '0px 0px -200px 0px', once: true }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <section id={id} className={cn(className)}>
        {children}
      </section>
    </InView>
  );
}
