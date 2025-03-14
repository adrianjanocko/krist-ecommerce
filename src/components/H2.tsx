import { WrapperProps } from "@/util/types";
import { twMerge } from "tailwind-merge";

export default function H2({ children, className }: WrapperProps) {
  return <h2 className={twMerge("text-4xl", className)}>{children}</h2>;
}
