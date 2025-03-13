import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Container from "./container";

interface SectionProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export default function Section({ children, title, className }: SectionProps) {
  return (
    <Container title={title} className={twMerge("py-14", className)}>
      {children}
    </Container>
  );
}
