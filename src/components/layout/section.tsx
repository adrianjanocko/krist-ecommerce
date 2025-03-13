import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Container from "./container";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return (
    <Container className={twMerge("px-4 py-14", className)}>
      {children}
    </Container>
  );
}
