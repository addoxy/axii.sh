import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-border py-8 text-xl font-bold text-primary">
      <MaxWidthWrapper className="flex justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-4">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            addoxy
          </Link>
        </div>
        <div className="flex items-center gap-8">
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
