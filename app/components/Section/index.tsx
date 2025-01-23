import { twMerge } from "tailwind-merge";

export default function Section({
  children,
  className,
  bg,
  id
}: {
  children?: React.ReactNode;
  className?: string;
  bg?: string;
  id?: string
}) {
  return (
    <div
      id={id}
      className={twMerge(
        `${
          bg ? bg : ""
        } w-full flex flex-col items-center justify-center gap-3 h-full`
      )}
    >
      <section
        className={twMerge(
          `max-w-screen-lg w-full px-6 lg:px-4 h-full flex flex-col items-center justify-center gap-3`,
          className
        )}
      >
        {children}
      </section>
    </div>
  );
}