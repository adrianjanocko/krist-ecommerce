import H2 from "@/components/H2";
import Grid from "@/components/layout/grid";
import Image from "next/image";

export default function Instagram() {
  return (
    <Grid>
      <H2 className="text-center">Our Instagram Stories</H2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="relative w-full h-60 cursor-pointer">
            <Image
              src={`/images/home/instagram/${index + 1}.jpg`}
              alt={`Instagram story ${index + 1}`}
              className="instagram-image object-cover object-top"
              fill
            />
          </div>
        ))}
      </div>
    </Grid>
  );
}
