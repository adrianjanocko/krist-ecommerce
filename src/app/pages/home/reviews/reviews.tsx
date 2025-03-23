"use client";

import { ReviewProps } from "@/util/types";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Carousel from "../components/carousel";

export default function Reviews({ reviews = [] }: { reviews: ReviewProps[] }) {
  return (
    <Carousel
      title="What our Customer says"
      items={reviews}
      renderContent={(review) => (
        <div className="p-4 border grid gap-3 rounded-lg bg-white">
          <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, i) => (
              <StarIcon
                key={i}
                className={`size-5 ${
                  i < review.stars ? "text-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <p>{review.review}</p>

          <div className="flex items-center gap-2">
            <div className="relative size-9">
              <Image
                src={review.image_url}
                alt={`${review.name}'s profile`}
                className="rounded-full"
                fill
              />
            </div>

            <div className="grid">
              <h3 className="font-bold">{review.name}</h3>
              <span className="text-sm text-gray">{review.role}</span>
            </div>
          </div>
        </div>
      )}
      className="flex-[0_0_50%] lg:flex-[0_0_33.33%]"
    />
  );
}
