import Container from "@/components/layout/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <Container title="Contact">
      <span>Contact</span>
    </Container>
  );
}
