import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={twMerge("max-w-5xl mx-auto", className)}>{children}</div>
  );
}
