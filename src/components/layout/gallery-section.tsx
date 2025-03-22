import H2 from "@/components/H2";
import { WrapperProps } from "@/util/types";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface GallerySectionProps extends WrapperProps {
  title: string;
  children: ReactNode;
}

export default function GallerySection({
  title,
  children,
  className,
}: GallerySectionProps) {
  return (
    <div className="grid gap-8">
      <H2 className="text-center">{title}</H2>

      <div
        className={twMerge(
          "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
