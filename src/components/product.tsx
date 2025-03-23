import { ProductProps } from "@/util/types";
import { getMainFolderImageUrl } from "@/util/utils";
import Image from "next/image";
import ProductDetails from "./product-details";
import FallbackBoundary from "./util/fallback-boundary";

export default function Product({ product }: { product: ProductProps }) {
  const imageUrl = getMainFolderImageUrl("products", product.id);

  return (
    <div className="grid gap-4">
      <div className="bg-gray-light p-4 min-h-72 grid z-10 relative overflow-hidden">
        <FallbackBoundary>
          <ProductDetails product={product} />
        </FallbackBoundary>

        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 size-52 -z-10">
          <Image
            src={imageUrl}
            blurDataURL={imageUrl}
            alt={`${product.name} Image`}
            className="object-cover"
            fill
          />
        </div>
      </div>

      <div className="grid gap-1">
        <h3 className="font-medium">{product.name}</h3>
        <h4>{product.subtitle}</h4>
        <h5 className="text-gray">${product.price}</h5>
      </div>
    </div>
  );
}
