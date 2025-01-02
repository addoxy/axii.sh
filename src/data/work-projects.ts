import { ProjectProps } from '@/components/project';

export const WORK_PROJECTS: Omit<ProjectProps, 'orientation'>[] = [
  {
    title: 'Adden AI',
    description:
      'A platform that automates your ads and integrates campaigns effortlessly using powerful AI models, helping you scale your growth quickly and efficiently',
    href: 'https://www.adden.ai/',
    image: '/projects/adden-ai.png',
    labels: ['Frontend', 'Backend'],
  },
  {
    title: 'TavLab IIITD',
    description:
      'TavLab uses AI to innovate healthcare, focusing on critical care, public health, and social medicine, empowering professionals with advanced tools and insights.',
    href: 'https://tavlab.iiitd.edu.in/',
    image: '/projects/tavlab.png',
    labels: ['Frontend', 'Backend', 'UI/UX'],
  },
];
