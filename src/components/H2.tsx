import { ReactNode } from "react";

export default function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-4xl">{children}</h2>;
}
