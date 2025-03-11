import Navbar from "@/app/components/navbar";
import Button from "@/components/button";
import H2 from "@/components/H2";
import Section from "@/components/layout/section";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

import heroImage from "/public/images/home/hero.png";

export default async function HomePage() {
  return (
    <div className="px-4">
      <div className="flex flex-col gap-4 min-h-screen py-4">
        <Navbar />

        <div className="bg-grey-light flex-1 flex items-center justify-center mx-4 gap-10 z-10">
          <div className="grid gap-2">
            <H2>Classic Exclusive</H2>
            <h1 className="font-bold text-6xl mb-2">Women's Collection</h1>
            <p className="text-grey text-xl mb-4 max-w-md">
              Discover the latest trends in women's fashion. Up to 40% OFF and
              other exclusive offers.
            </p>
            <Button
              href="/shop"
              className="max-w-fit"
              icon={<ArrowRightIcon />}
            >
              Shop Now
            </Button>
          </div>

          <Image
            src={heroImage}
            placeholder="blur"
            quality={100}
            alt="Hero Image"
            className="max-w-2xl "
          />
          <span className="absolute text-[14rem] font-bold text-white bottom-2 right-[40rem] -z-10">
            BEST
          </span>
        </div>
      </div>

      <Section>
        <H2>Shop by Categories</H2>
      </Section>
    </div>
  );
}
