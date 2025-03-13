import Container from "@/components/layout/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
};

export default function OurStoryPage() {
  return (
    <Container title="Our Story">
      <span>Our Story</span>
    </Container>
  );
}
