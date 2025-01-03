'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/vendor/dropdown-menu';
import Link from 'next/link';
import { MenuIcon } from './icons';
import { links } from './navbar';

export const MobileNavbar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="lg:hidden">
        <MenuIcon className="size-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-muted" align="end" sideOffset={4}>
        {links.map((link, i) => (
          <DropdownMenuItem key={i} className="h-full w-full">
            <Link href={link.href}>{link.name}</Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem>
          <a
            href="/files/Aditya_Kumar_Resume.pdf"
            download="Aditya_Kumar_Resume.pdf"
            className="h-full w-full"
          >
            Resume
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="mailto:aditya132003@gmail.com">Contact me</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
