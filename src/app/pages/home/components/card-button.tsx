import Button from "@/components/button";
import { ButtonProps } from "@/util/types";
import { twMerge } from "tailwind-merge";

export default function CardButton({
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  return (
    <Button
      href={href}
      className={twMerge(
        "self-end bg-white text-black text-center font-medium hover:bg-gray-300",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
