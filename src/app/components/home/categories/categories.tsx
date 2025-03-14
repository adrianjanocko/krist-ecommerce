"use client";

import Button from "@/components/button";
import H2 from "@/components/H2";
import Grid from "@/components/layout/grid";
import { Category } from "@/util/types";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Categories({
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
        if (scrollPrevRef.current)
          scrollPrevRef.current.disabled = !emblaApi.canScrollPrev();

        if (scrollNextRef.current)
          scrollNextRef.current.disabled = !emblaApi.canScrollNext();
      }
    };

    if (emblaApi) {
      handleSelect();

      emblaApi.on("select", handleSelect);
      emblaApi.on("scroll", handleSelect);
      emblaApi.on("resize", handleSelect);
    }
  }, [emblaApi]);

  function scrollPrev() {
    if (emblaApi) emblaApi.scrollPrev();
  }

  function scrollNext() {
    if (emblaApi) emblaApi.scrollNext();
  }

  return (
    <Grid>
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
              <div className="bg-grey-light p-4 min-h-60 grid z-10 relative overflow-hidden">
                <div className="absolute size-60 lg:size-full -z-10 left-10 top-5">
                  <Image
                    src={category.image_url}
                    blurDataURL={category.image_url}
                    alt={`${category.name} Image`}
                    className="object-cover object-top"
                    fill
                  />
                </div>
                <span className="text-nowrap absolute top-3 left-10 text-6xl font-bold text-grey -z-20 opacity-40">
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
            </div>
          ))}
        </div>
      </div>
    </Grid>
  );
}
