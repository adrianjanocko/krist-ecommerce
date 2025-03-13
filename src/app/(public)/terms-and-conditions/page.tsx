import Container from "@/components/layout/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsAndConditionsPage() {
  return (
    <Container title="Terms & Conditions">
      <span>Terms & Conditions</span>
    </Container>
  );
}
