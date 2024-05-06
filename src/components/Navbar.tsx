import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex items-center justify-between border-b border-border bg-background py-5 text-xl font-bold text-primary">
      <MaxWidthWrapper className="flex justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-4">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            addoxy
          </Link>
        </div>
        <div className="hidden items-center gap-8 lg:flex">
          <NavItem text="Projects" href="#projects" />
          <NavItem text="Blog" href="/blog" />
          <NavItem text="Notion Templates" href="#notion-templates" />
          <Button
            asChild
            className="h-12 rounded-md bg-primary px-4 text-xl font-bold text-background"
          >
            <Link href="#contact-me">Contact me</Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger className="flex size-8 items-center justify-center rounded-sm transition-all hover:bg-border lg:hidden">
            <svg
              className="size-6 fill-current text-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m7-7a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"
              />
            </svg>
          </SheetTrigger>
          <SheetContent className="border-border">
            <SheetHeader className="text-left">
              <SheetTitle className="text-2xl font-bold text-primary">
                addoxy
              </SheetTitle>
            </SheetHeader>
            <div className="mt-10 flex flex-col gap-4 text-xl font-bold text-primary/90">
              <NavItem text="Projects" href="#projects" />
              <NavItem text="Blog" href="/blog" />
              <NavItem text="Notion Templates" href="#notion-templates" />
              <Button
                asChild
                className="mt-4 h-12 w-fit rounded-md bg-primary px-4 text-xl font-bold text-background"
              >
                <Link href="#contact-me">Contact me</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </MaxWidthWrapper>
    </nav>
  );
};

type NavItemProps = {
  text: string;
  href: string;
};

const NavItem = (props: NavItemProps) => {
  const { text, href } = props;

  return (
    <Link href={href} className="transition-all hover:text-primary-hover">
      {text}
    </Link>
  );
};

export default Navbar;
