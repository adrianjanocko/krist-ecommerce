import Button from "@/components/button";
import H2 from "@/components/H2";
import Section from "@/components/layout/section";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

import H1 from "@/components/H1";
import FallbackBoundary from "@/components/util/FallbackBoundary";
import Footer from "./components/footer/footer";
import CategoriesProvider from "./components/home/categories/categories-provider";
import Deals from "./components/home/deals/deals";
import Features from "./components/home/features/features";
import Instagram from "./components/home/instagram/instagram";
import ReviewsProvider from "./components/home/reviews/reviews-provider";
import Navbar from "./components/navbar/navbar";
import heroImage from "/public/images/home/hero.png";

export default async function HomePage() {
  return (
    <>
      <Navbar />

      <div className="px-4">
        <div className="bg-gray-light flex-1 flex items-center justify-center xl:mx-4 gap-10 z-10 p-6 relative">
          <div className="grid gap-2 max-w-md">
            <H2>Classic Exclusive</H2>
            <H1 className="mb-2">Women's Collection</H1>
            <p className="text-gray text-xl mb-4">
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
            className="w-1/2"
          />
          <span className="absolute text-[14rem] font-bold text-white bottom-0 left-20 -z-10">
            BEST
          </span>
        </div>
      </div>

      <Section>
        <FallbackBoundary>
          <CategoriesProvider />
        </FallbackBoundary>
      </Section>

      <Section>
        <Deals />
      </Section>

      <div className="bg-gray-light py-2">
        <Section>
          <ReviewsProvider />
        </Section>
      </div>

      <Section>
        <Instagram />
      </Section>

      <Section>
        <Features />
      </Section>

      <Footer />
    </>
  );
}
