import { twMerge } from "tailwind-merge";

export default function Button({
  children,
  onClick,
  className,
  type = "button",
  primary = true,
  disabled = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  primary?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        `flex gap-2 py-2 px-5 font-semibold border-2 items-center justify-center
        ${`${
          primary
            ? "text-primary-50 border-primary-light border-t-primary-light border-r-primary-dark border-b-primary-dark bg-primary-900 hover:bg-primary-dark"
            : "text-primary-50 border-bg-primary border-t-bg-light border-r-bg-dark border-b-bg-dark bg-primary-700 hover:bg-bg-dark"
        }`}  rounded-xl w-max transition-all ` + className
      )}
      type={type}
    >
      {children}
    </button>
  );
}
