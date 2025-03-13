import Container from "@/components/layout/container";
import Logo from "@/components/logo";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import User from "./user";

export default async function Navbar() {
  return (
    <nav>
      <Container className="flex justify-between items-center py-4">
        <Logo />

        <ul className="flex gap-7">
          {["Home", "Shop", "Our Story", "Blog", "Contact"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  className="hover:text-grey"
                  href={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "-")}`
                  }
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="flex gap-5 items-center">
          <div className="flex gap-3">
            <MagnifyingGlassIcon className="size-6" />
            <HeartIcon className="size-6" />
            <ShoppingBagIcon className="size-6" />
          </div>

          <User />
        </div>
      </Container>
    </nav>
  );
}
