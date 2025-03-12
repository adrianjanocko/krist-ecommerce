"use client";

import Button from "@/components/button";
import H2 from "@/components/H2";
import { Category } from "@/util/types";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function CategoriesWrapper({
  categories = [],
}: {
  categories: Category[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  const scrollPrevRef = useRef<HTMLButtonElement | null>(null);
  const scrollNextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleSelect = () => {
      if (emblaApi) {
        if (scrollPrevRef.current) {
          scrollPrevRef.current.disabled = !emblaApi.canScrollPrev();
        }
        if (scrollNextRef.current) {
          scrollNextRef.current.disabled = !emblaApi.canScrollNext();
        }
      }
    };

    if (emblaApi) {
      handleSelect();

      emblaApi.on("select", handleSelect);
      emblaApi.on("scroll", handleSelect);
      emblaApi.on("resize", handleSelect);
    }
  }, [emblaApi]);

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className="grid gap-6">
      <div className="flex justify-between items-center mb-4">
        <H2>Shop by Categories</H2>

        <div className="flex gap-2">
          <Button
            ref={scrollPrevRef}
            onClick={scrollPrev}
            size="icon"
            icon={<ArrowLeftIcon />}
          />
          <Button
            ref={scrollNextRef}
            onClick={scrollNext}
            size="icon"
            icon={<ArrowRightIcon />}
          />
        </div>
      </div>

      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
        ref={emblaRef}
      >
        <div className="flex">
          {categories.map((category, index) => (
            <div key={index} className="flex-[0_0_50%] lg:flex-[0_0_25%] p-1">
              <div className="bg-grey-light p-4 min-h-48 grid">
                <span className="place-self-center text-2xl font-bold text-grey">
                  {category.name}
                </span>
                <Link
                  href={category.name
                    .toLowerCase()
                    .replace(/ /g, "-")
                    .replace(/&/g, "and")}
                  className="self-end bg-white text-center py-3 font-medium rounded-lg"
                >
                  {category.name} Wear
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
