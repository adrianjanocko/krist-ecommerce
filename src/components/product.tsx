import CardButton from "@/app/components/card-button";
import { ProductProps } from "@/util/types";
import { getMainFolderImageUrl } from "@/util/utils";
import { EyeIcon, StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import IconButton from "./icon-button";

export default function Product({ product }: { product: ProductProps }) {
  const imageUrl = getMainFolderImageUrl("products", product.id);

  return (
    <div className="grid gap-4">
      <div className="bg-gray-light p-4 min-h-72 grid z-10 relative overflow-hidden">
        <div className="justify-self-end grid gap-2 self-start">
          <IconButton icon={<StarIcon />} />
          <IconButton href={`/product/${product.slug}`} icon={<EyeIcon />} />
        </div>

        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 size-52 -z-10">
          <Image
            src={imageUrl}
            blurDataURL={imageUrl}
            alt={`${product.name} Image`}
            className="object-cover"
            fill
          />
        </div>

        <CardButton text="Add to Cart" />
      </div>

      <div className="grid gap-1">
        <h3 className="font-medium">{product.name}</h3>
        <h4>{product.subtitle}</h4>
        <h5 className="text-gray">${product.price}</h5>
      </div>
    </div>
  );
}
