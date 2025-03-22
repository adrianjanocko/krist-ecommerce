import H2 from "@/components/H2";
import { ReactNode } from "react";

type GallerySectionProps = {
  title: string;
  children: ReactNode;
};

export default function GallerySection({
  title,
  children,
}: GallerySectionProps) {
  return (
    <div className="grid gap-8">
      <H2 className="text-center">{title}</H2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {children}
      </div>
    </div>
  );
}
