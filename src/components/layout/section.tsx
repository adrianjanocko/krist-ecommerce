import { ReactNode } from "react";
import Container from "./container";

export default function Section({ children }: { children: ReactNode }) {
  return <Container className="py-20">{children}</Container>;
}
