import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <Link href="/">
      <div className={twMerge("relative w-36 h-16", invert && "invert")}>
        <Image src="/images/logo.svg" alt="Logo" fill quality={100} />
      </div>
    </Link>
  );
}
