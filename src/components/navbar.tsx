'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/vendor/navigation-menu';
import { cn } from '@/utils/utils';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedUnderline } from './animated-underline';
import { MaxWidthWrapper } from './max-width-wrapper';
import { MobileNavbar } from './mobile-navbar';
import { Tooltip } from './tooltip';
import { buttonVariants } from './vendor/button';

export const links = [
  {
    name: 'About',
    href: '/#about',
  },
  {
    name: 'Work',
    href: '/#work',
  },
  {
    name: 'Projects',
    href: '/#projects',
  },
  {
    name: 'Skills',
    href: '/#technical-skills',
  },
];

export const Navbar = () => {
  return (
    <nav className="z-10 w-full py-5 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 text-lg">
              <Image src="/logo.jpg" width={32} height={32} alt="" className="rounded-sm" />
              Aditya Kumar
            </div>
          </Link>
          <MobileNavbar />
          <div className="flex items-center gap-6 max-lg:hidden">
            {links.map((link, i) => (
              <NavLink key={i} href={link.href}>
                {link.name}
              </NavLink>
            ))}

            <a href="/files/Aditya_Kumar_Resume.pdf" download="Aditya_Kumar_Resume.pdf">
              <AnimatedUnderline>Resume</AnimatedUnderline>
            </a>
            <ExtrasMenu />
            <Tooltip content="aditya132003@gmail.com">
              <a href="mailto:aditya132003@gmail.com" className={cn(buttonVariants())}>
                Contact me
              </a>
            </Tooltip>
          </div>
        </div>
        <div className="mt-5 h-px w-full bg-border/50" />
      </MaxWidthWrapper>
    </nav>
  );
};

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const NavLink = ({ children, href, onClick }: NavLinkProps) => {
  return (
    <Link href={href} onClick={onClick}>
      <AnimatedUnderline>{children}</AnimatedUnderline>
    </Link>
  );
};

const ExtrasMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger hideChevron className="!bg-transparent px-0 text-base font-normal">
            <AnimatedUnderline>Extras</AnimatedUnderline>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex border bg-muted p-3">
            <ExtrasCard
              href="/notion-templates"
              title="Notion Templates"
              description="Beautiful, user-friendly Notion templates designed to simplify organization and boost productivity."
            />
            <ExtrasCard
              href="https://blog.byteferno.tech/"
              title="ByteFerno Blog"
              description="Comprehensive, easy-to-follow tutorials and articles on programming, technology, and life."
            />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

interface ExtrasCardProps {
  href: string;
  title: string;
  description: string;
}

const ExtrasCard = ({ href, title, description }: ExtrasCardProps) => {
  return (
    <Link
      href={href}
      className="group flex h-full w-64 flex-col rounded-md px-4 pb-3 pt-2 transition-colors hover:bg-background"
      target="_blank"
    >
      <span className="mb-2 flex gap-1 text-lg font-medium">
        {title}{' '}
        <ArrowUpRight className="mt-1 size-4 text-sm transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
      </span>
      <p className="text-muted-foreground">{description}</p>
    </Link>
  );
};
