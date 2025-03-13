import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import H1 from "../H1";

interface ContainerProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export default function Container({
  children,
  title,
  className,
}: ContainerProps) {
  return (
    <div className={twMerge("max-w-5xl mx-auto px-4", className)}>
      {title && <H1>{title}</H1>}

      {children}
    </div>
  );
}
