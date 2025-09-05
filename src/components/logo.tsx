import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  onClick?: () => void;
}

export const Logo = ({ onClick }: LogoProps) => (
  <Link href="/" className="flex items-center gap-2" onClick={onClick}>
    <Image src="/logo.png" width={32} height={32} alt="logo" className="rounded-full" priority />
    axii.sh
  </Link>
);
