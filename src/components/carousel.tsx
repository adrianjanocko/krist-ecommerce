"use client";

import Button from "@/components/button";
import H2 from "@/components/H2";
import Grid from "@/components/layout/grid";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import useEmblaCarousel from "embla-carousel-react";
import { JSX, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

interface CarouselProps<T> {
  title: string;
  items: T[];
  renderContent: (item: T) => JSX.Element;
  className?: string;
}

export default function Carousel<T>({
  title,
  items = [],
  renderContent,
  className = "flex-[0_0_50%] lg:flex-[0_0_25%]",
}: CarouselProps<T>) {
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
      <div className="flex justify-between items-center">
        <H2>{title}</H2>

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
          {items.map((item, index) => (
            <div key={index} className={twMerge("p-1", className)}>
              {renderContent(item)}
            </div>
          ))}
        </div>
      </div>
    </Grid>
  );
}
