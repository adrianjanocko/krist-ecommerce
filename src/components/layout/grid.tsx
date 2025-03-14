import { WrapperProps } from "@/util/types";
import { twMerge } from "tailwind-merge";

export default function Grid({ children, className }: WrapperProps) {
  return <div className={twMerge("grid gap-6", className)}>{children}</div>;
}
