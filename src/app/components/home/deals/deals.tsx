import Image from "next/image";

import Button from "@/components/button";
import Countdown from "@/components/countdown";
import H2 from "@/components/H2";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import dealsImage from "/public/images/home/deals.png";

export default function Deals() {
  const currentDate = new Date();
  const endDate = new Date(currentDate);
  endDate.setDate(currentDate.getDate() + 5);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
      <div className="grid gap-4">
        <H2>Deals of the Month</H2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          accusantium dolores adipisci reprehenderit ipsum distinctio quam saepe
          vel inventore ea cupiditate.
        </p>

        <Countdown endDate={endDate} className="mb-4" />

        <Button className="w-fit" icon={<ArrowRightIcon />} href="/shop">
          View All Products
        </Button>
      </div>

      <Image src={dealsImage} alt="Deals Image" placeholder="blur" />
    </div>
  );
}
