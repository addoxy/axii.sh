import Image from 'next/image';
import Link from 'next/link';

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem = ({ label, href }: NavItemProps) => {
  return (
    <Link
      href={href}
      className="rounded-full px-5 py-2 text-sm font-medium transition-colors duration-500 hover:bg-white"
    >
      {label}
    </Link>
  );
};

export const Navbar = () => {
  const items: NavItemProps[] = [
    {
      label: 'Projects',
      href: '#projects',
    },
    {
      label: 'Articles',
      href: '#articles',
    },
    {
      label: 'Contact',
      href: '#contact',
    },
  ];

  return (
    <nav className="bg-background sticky top-0 z-20 border-b border-dashed py-3">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" width={32} height={32} alt="logo" className="rounded-full" />
        </Link>
        <div className="flex items-center gap-1 rounded-full bg-zinc-200/50 p-1.5">
          {items.map((item) => (
            <NavItem key={item.label} label={item.label} href={item.href} />
          ))}
        </div>
      </div>
    </nav>
  );
};
