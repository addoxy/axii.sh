import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  return (
    <nav className="py-8 font-bold text-xl flex justify-between items-center text-primary border-b border-border">
      <MaxWidthWrapper className="flex justify-between">
        <div className="flex gap-6 items-center">
          <Link href="/" className="flex gap-4 items-center">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            addoxy
          </Link>
        </div>
        <div className="flex gap-8 items-center">
          <NavItem text="Projects" href="#projects" />
          <NavItem text="Blog" href="/blog" />
          <NavItem text="Notion Templates" href="#notion-templates" />
          <Button
            asChild
            className="text-background bg-primary text-xl font-bold rounded-md h-12 px-4"
          >
            <Link href="#contact-me">Contact me</Link>
          </Button>
        </div>
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
    <Link href={href} className="hover:text-primary-hover transition-all">
      {text}
    </Link>
  );
};

export default Navbar;
