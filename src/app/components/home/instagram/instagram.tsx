import GallerySection from "@/components/layout/gallery-section";
import Image from "next/image";

export default function Instagram() {
  return (
    <GallerySection title="Our Instagram Stories">
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
    </GallerySection>
  );
}
