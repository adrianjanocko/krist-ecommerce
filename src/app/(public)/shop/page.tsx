import Container from "@/components/layout/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
};

export default function ShopPage() {
  return (
    <Container title="Shop">
      <span>Shop</span>
    </Container>
  );
}
