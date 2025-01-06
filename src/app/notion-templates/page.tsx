import { MaxWidthWrapper } from '@/components/max-width-wrapper';
import { NotionTemplate } from '@/components/notion-template';
import { NOTION_TEMPLATES } from '@/data/notion-templates';

const NotionTemplatesPage = () => {
  return (
    <MaxWidthWrapper>
      <div className="mt-8 flex flex-col sm:mt-0">
        {NOTION_TEMPLATES.map((notionTemplate, i) => (
          <NotionTemplate key={i} {...notionTemplate} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default NotionTemplatesPage;
