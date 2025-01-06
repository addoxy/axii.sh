'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/vendor/dropdown-menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MenuIcon } from './icons';
import { links } from './navbar';

export const MobileNavbar = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenuTrigger className="lg:hidden">
        <MenuIcon className="size-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={4}>
        {links.map((link, i) => (
          <DropdownMenuItem key={i} className="h-full w-full">
            <Link href={link.href} className="size-full">
              {link.name}
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem>
          <a
            href="/files/Aditya_Kumar_Resume.pdf"
            download="Aditya_Kumar_Resume.pdf"
            className="size-full h-full w-full"
          >
            Resume
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="mailto:aditya132003@gmail.com" className="size-full">
            Contact me
          </a>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Extras</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Link href="/notion-templates" className="size-full">
                  Notion Templates
                </Link>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
