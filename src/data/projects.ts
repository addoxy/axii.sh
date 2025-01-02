import { ProjectProps } from '@/components/project';

export const PROJECTS: Omit<ProjectProps, 'orientation'>[] = [
  {
    title: 'KanvaBoard',
    description:
      'A project management app that embraces minimalism to help you streamline your workflow, eliminate distractions, and focus on achieving optimal results with ease and efficiency',
    href: 'https://kanvaboard.addoxy.me/',
    image: '/projects/kanvaboard.png',
    labels: ['Frontend', 'Backend', 'UI/UX'],
  },
  {
    title: 'Lumosent',
    description:
      'A habit tracker that helps you level up your life with ease. Lumosent offers effortless tracking and detailed statistics to identify areas for improvement and take action seamlessly',
    href: 'https://lumosent.addoxy.me/',
    image: '/projects/lumosent.png',
    labels: ['Frontend', 'Backend', 'UI/UX'],
  },
  {
    title: 'CourseInsider',
    description:
      'A platform that makes finding the best courses effortless. Discover and explore your college courses conveniently, all in one place, without the hassle of juggling multiple resources',
    href: 'https://courseinsider.vercel.app/',
    image: '/projects/course-insider.png',
    labels: ['Frontend', 'UI/UX'],
  },
];
