import { WrapperProps } from "@/util/types";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Button from "./button";

interface IconButtonProps extends Omit<WrapperProps, "children"> {
  icon: ReactNode;
}

export default function IconButton({ icon, className }: IconButtonProps) {
  return (
    <Button
      className={twMerge(
        "bg-white text-black size-8 p-1 rounded-full hover:bg-gray-300 flex items-center justify-center",
        className
      )}
    >
      <span className="size-5">{icon}</span>
    </Button>
  );
}
