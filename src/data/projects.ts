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
    title: 'TavLab',
    description:
      'TavLab uses AI to improve critical care, public health, and social medicine, empowering healthcare professionals with smarter tools and insights.',
    imageUrl: '/projects/tavlab.png',
    link: 'https://tavlab.iiitd.edu.in/',
  },
  {
    title: 'axii-stack',
    description:
      'A production-ready Next.js starter. Built with modern tools, configured for type-safety, and designed to deploy immediately.',
    imageUrl: '/projects/axii-stack.png',
    link: 'https://github.com/addoxy/axii-stack',
  },
  {
    title: 'MailYard',
    description:
      'A visual email builder for creating accessible, responsive emails with a drag-and-drop editor, and exporting them as clean React components using @react-email/components.',
    imageUrl: '/projects/mailyard.png',
    link: 'https://mailyard.axii.xyz/',
    inProgress: true,
  },
  {
    title: 'Flow',
    description:
      'Flow is a web app that boosts productivity with a customizable timer, task manager, note-taking, focus audio, and local data backup, all wrapped in a personalized, themeable interface.',
    imageUrl: '/projects/flow.png',
    link: 'https://flow.axii.xyz/',
  },
];
