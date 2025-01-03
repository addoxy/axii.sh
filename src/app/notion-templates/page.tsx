import { MaxWidthWrapper } from '@/components/max-width-wrapper';
import { TextShimmer } from '@/components/vendor/text-shimmer';

const NotionTemplatesPage = () => {
  return (
    <MaxWidthWrapper className="flex items-center justify-center py-52">
      <TextShimmer duration={2} className="text-2xl font-bold">
        COMING SOON...
      </TextShimmer>
    </MaxWidthWrapper>
  );
};

export default NotionTemplatesPage;
