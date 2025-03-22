import GallerySection from "@/components/layout/gallery-section";
import Product from "@/components/product";
import { ProductProps } from "@/util/types";

export default function Bestseller({
  bestsellers,
}: {
  bestsellers: ProductProps[];
}) {
  return (
    <GallerySection title="Our Bestseller" className="gap-y-8">
      {bestsellers.map((bestseller) => (
        <Product product={bestseller} />
      ))}
    </GallerySection>
  );
}
