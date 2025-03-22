import IconButton from "@/components/icon-button";
import GallerySection from "@/components/layout/gallery-section";
import { Product } from "@/util/types";
import { getMainFolderImageUrl } from "@/util/utils";
import { EyeIcon, StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import CardButton from "../../card-button";

export default function Bestseller({
  bestsellers,
}: {
  bestsellers: Product[];
}) {
  return (
    <GallerySection title="Our Bestseller">
      {bestsellers.map((bestseller) => {
        const imageUrl = getMainFolderImageUrl("products", bestseller.id);

        return (
          <div
            className="bg-gray-light p-4 min-h-72 grid z-10 relative overflow-hidden"
            key={bestseller.id}
          >
            <div className="justify-self-end grid gap-2 self-start">
              <IconButton icon={<StarIcon />} />
              <IconButton
                href={`/product/${bestseller.slug}`}
                icon={<EyeIcon />}
              />
            </div>

            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 size-52 -z-10">
              <Image
                src={imageUrl}
                blurDataURL={imageUrl}
                alt={`${bestseller.name} Image`}
                className="object-cover"
                fill
              />
            </div>

            <CardButton text="Add to Cart" />
          </div>
        );
      })}
    </GallerySection>
  );
}
