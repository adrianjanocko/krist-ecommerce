import { WrapperProps } from "@/util/types";
import { twMerge } from "tailwind-merge";

export default function H1({ children, className }: WrapperProps) {
  return (
    <h1 className={twMerge("font-bold text-6xl", className)}>{children}</h1>
  );
}
