"use client";

import Carousel from "@/components/carousel";
import { Category } from "@/util/types";
import { getImageUrl } from "@/util/utils";
import Image from "next/image";
import CardButton from "../../card-button";

export default function Categories({
  categories = [],
}: {
  categories: Category[];
}) {
  return (
    <Carousel
      title="Shop by Categories"
      items={categories}
      renderContent={(category) => {
        const imageUrl = getImageUrl("categories", category.id);

        return (
          <div className="bg-gray-light p-4 min-h-60 grid z-10 relative overflow-hidden">
            <div className="absolute size-60 lg:size-full -z-10 left-10 top-5">
              <Image
                src={imageUrl}
                blurDataURL={imageUrl}
                alt={`${category.name} Image`}
                className="object-cover object-top"
                fill
              />
            </div>
            <span className="text-nowrap absolute top-3 left-10 text-6xl font-bold text-gray -z-20 opacity-40">
              {category.name} Wear
            </span>

            <CardButton text={`${category.name} Wear`} />
          </div>
        );
      }}
    />
  );
}
