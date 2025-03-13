import Container from "@/components/layout/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <Container title="Privacy Policy">
      <span>Privacy Policy</span>
    </Container>
  );
}
