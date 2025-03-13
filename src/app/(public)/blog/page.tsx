import Container from "@/components/layout/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <Container title="Blog">
      <span>Blog</span>
    </Container>
  );
}
