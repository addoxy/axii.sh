import { ProjectProps } from '@/components/project-item';

export const PROJECTS: ProjectProps[] = [
  {
    title: 'Adden AI',
    description:
      'An AI-powered platform that helps marketers boost ad performance by reducing waste, expanding reach, and driving engagement to convert ideal customers and scale growth.',
    imageUrl: '/projects/adden.png',
    link: 'https://adden.ai',
  },
  {
    title: 'MailMoss',
    description:
      'A visual email builder for creating accessible, responsive emails with a drag-and-drop editor, and exporting them as clean React components using @react-email/components.',
    imageUrl: '/projects/mailmoss.png',
    link: 'https://mailmoss.axii.xyz',
    inProgress: true,
  },
  {
    title: 'Axii Stack',
    description:
      'A production-ready Next.js starter. Built with modern tools, configured for type-safety, and designed to deploy immediately.',
    imageUrl: '/projects/axii-stack.png',
    link: 'https://stack.axii.xyz',
  },
];
