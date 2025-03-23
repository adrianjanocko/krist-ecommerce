import { ButtonProps } from "@/util/types";
import { twMerge } from "tailwind-merge";
import Button from "./button";

export default function IconButton({
  icon,
  className,
  href,
  ...props
}: Omit<ButtonProps, "children">) {
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
