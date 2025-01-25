import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function IconButton({
  image,
  alt,
  href,
  width = 60,
  height = 60,
  target,
  className,
  onClick,
  children,
  passHref
}: {
  image?: string | undefined;
  alt?: string | undefined;
  href?: string;
  width?: number;
  height?: number;
  target?: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode
  passHref?: boolean;
}) {
  return (
    <button
      className={twMerge(
        `transition-all duration-150 gap-1 text-4xl hover:text-primary-500 hover:drop-shadow-md ` +
          className
      )}
      onClick={onClick}
    >
      {href ? (
        <Link href={href} target={target} passHref={passHref}>
          {children}
        </Link>
      ) : (
        <Image src={image ?? ''} alt={alt ?? ''} width={width} height={height} />
      )}
    </button>
  );
}
