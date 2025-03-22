import { WrapperProps } from "@/util/types";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Button from "./button";

interface IconButtonProps extends Omit<WrapperProps, "children"> {
  icon: ReactNode;
  href?: string;
}

export default function IconButton({
  icon,
  className,
  href,
  ...props
}: IconButtonProps) {
  return (
    <Button
      href={href}
      className={twMerge(
        "bg-white text-black size-8 p-1 rounded-full hover:bg-gray-300 flex items-center justify-center",
        className
      )}
      icon={icon}
      {...props}
    />
  );
}
