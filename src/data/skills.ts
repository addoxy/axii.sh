import {
  CPPIcon,
  CSSIcon,
  FastAPIIcon,
  FigmaIcon,
  GitHubIcon,
  HonoIcon,
  HTMLIcon,
  IconProps,
  JavascriptIcon,
  NextJsIcon,
  PostgreSQLIcon,
  PrismaIcon,
  PythonIcon,
  ReactJsIcon,
  RestAPIIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
} from '@/components/icons';

export interface Skill {
  name: string;
  icon: ({ className }: IconProps) => React.JSX.Element;
}

export const frontendSkills: Skill[] = [
  {
    name: 'React.js',
    icon: ReactJsIcon,
  },
  {
    name: 'Next.js',
    icon: NextJsIcon,
  },
  {
    name: 'Typescript',
    icon: TypeScriptIcon,
  },
  {
    name: 'Javascript',
    icon: JavascriptIcon,
  },
  {
    name: 'Tailwind CSS',
    icon: TailwindCSSIcon,
  },
  {
    name: 'HTML',
    icon: HTMLIcon,
  },
  {
    name: 'CSS',
    icon: CSSIcon,
  },
];

export const backendSkills: Skill[] = [
  {
    name: 'Hono',
    icon: HonoIcon,
  },
  {
    name: 'Rest API',
    icon: RestAPIIcon,
  },
  {
    name: 'FastAPI',
    icon: FastAPIIcon,
  },
  {
    name: 'PostgreSQL',
    icon: PostgreSQLIcon,
  },
  {
    name: 'Prisma',
    icon: PrismaIcon,
  },
];

export const otherSkills: Skill[] = [
  {
    name: 'C++',
    icon: CPPIcon,
  },
  {
    name: 'Python',
    icon: PythonIcon,
  },
  {
    name: 'Figma',
    icon: FigmaIcon,
  },
  {
    name: 'GitHub',
    icon: GitHubIcon,
  },
];
