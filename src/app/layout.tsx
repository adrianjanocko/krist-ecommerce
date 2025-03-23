import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import StoreProvider from "./store-provider";

const jost = Jost({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s / Krist",
    default: "Krist",
  },
  description: "Full-stack e-commerce platform built with modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${jost.className} antialiased`}>
        <StoreProvider>
          <main>{children}</main>
        </StoreProvider>

        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
