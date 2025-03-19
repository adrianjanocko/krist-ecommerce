"use client";

import Carousel from "@/components/carousel";
import { Category } from "@/util/types";
import Image from "next/image";
import Link from "next/link";

export default function Categories({
  categories = [],
}: {
  categories: Category[];
}) {
  return (
    <Carousel
      title="Shop by Categories"
      items={categories}
      renderContent={(category) => (
        <div className="bg-gray-light p-4 min-h-60 grid z-10 relative overflow-hidden">
          <div className="absolute size-60 lg:size-full -z-10 left-10 top-5">
            <Image
              src={category.image_url}
              blurDataURL={category.image_url}
              alt={`${category.name} Image`}
              className="object-cover object-top"
              fill
            />
          </div>
          <span className="text-nowrap absolute top-3 left-10 text-6xl font-bold text-gray -z-20 opacity-40">
            {category.name} Wear
          </span>
          <Link
            href={`/shop/${category.name
              .toLowerCase()
              .replace(/ /g, "-")
              .replace(/&/g, "and")}`}
            className="self-end bg-white text-center py-3 font-medium rounded-lg"
          >
            {category.name} Wear
          </Link>
        </div>
      )}
    />
  );
}
