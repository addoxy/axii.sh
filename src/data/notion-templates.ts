export interface NotionTemplateProps {
  title: string;
  description: string;
  link: string;
  images: string[];
}

export const NOTION_TEMPLATES: NotionTemplateProps[] = [
  {
    title: 'Semester Manager',
    description:
      'The Notion Semester Management Template is an all-in-one solution to streamline your academic organization. It lets you track deadlines by courses, showing due dates, days remaining, and completion status. You can upload your academic calendar for quick reference and create multiple courses to manage your workload efficiently. The template includes a grade calculator where you can input scores, maximum marks, and weightages for different components, giving you real-time weighted scores and a final grade.',
    link: 'https://addoxy.notion.site/Semester-Planner-1730f61733b08087835fc0c8a8ec1832?pvs=4',
    images: [
      '/notion-templates/semester-manager/1.png',
      '/notion-templates/semester-manager/2.png',
      '/notion-templates/semester-manager/3.png',
      '/notion-templates/semester-manager/4.png',
      '/notion-templates/semester-manager/5.png',
    ],
  },
];
