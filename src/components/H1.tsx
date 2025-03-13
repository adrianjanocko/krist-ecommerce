import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function H1({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1 className={twMerge("font-bold text-6xl", className)}>{children}</h1>
  );
}
