import Product from "@/components/product";
import { ProductProps } from "@/util/types";
import GallerySection from "../components/gallery-section";

export default function Bestseller({
  bestsellers,
}: {
  bestsellers: ProductProps[];
}) {
  return (
    <GallerySection title="Our Bestseller" className="gap-y-8">
      {bestsellers.map((bestseller) => (
        <Product product={bestseller} key={bestseller.id} />
      ))}
    </GallerySection>
  );
}
