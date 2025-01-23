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
}: {
  image: string;
  alt: string;
  href?: string;
  width?: number;
  height?: number;
  target?: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={twMerge(
        `transition-all duration-150 gap-1 hover:scale-[110%] hover:brightness-125 ` +
          className
      )}
      onClick={onClick}
    >
      {href ? (
        <Link href={href} target={target}>
          <Image
            src={image}
            alt={alt}
            width={width}
            height={height}
            className=""
          />
        </Link>
      ) : (
        <Image src={image} alt={alt} width={width} height={height} />
      )}
    </button>
  );
}
