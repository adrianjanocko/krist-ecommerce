"use client";

import CardButton from "@/app/pages/home/components/card-button";
import { toggleCart } from "@/lib/redux/features/cartSlice";
import { toggleFavorite } from "@/lib/redux/features/favoritesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { ProductProps } from "@/util/types";
import { EyeIcon, StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarSolidIcon } from "@heroicons/react/24/solid";
import IconButton from "./icon-button";

export default function ProductDetails({ product }: { product: ProductProps }) {
  const dispatch = useAppDispatch();

  const isFavorite = useAppSelector((state) =>
    state.favorites.includes(product.id)
  );
  const isInCart = useAppSelector((state) => state.cart.includes(product.id));

  const handleFavoriteToggle = () => {
    dispatch(toggleFavorite(product.id));
  };

  const handleCartToggle = () => {
    dispatch(toggleCart(product.id));
  };

  return (
    <>
      <div className="justify-self-end grid gap-2 self-start">
        <IconButton
          icon={
            isFavorite ? (
              <StarSolidIcon className="text-yellow-500" />
            ) : (
              <StarIcon />
            )
          }
          onClick={handleFavoriteToggle}
        />
        <IconButton href={`/product/${product.slug}`} icon={<EyeIcon />} />
      </div>

      <CardButton
        className={isInCart ? "bg-yellow-400" : ""}
        onClick={handleCartToggle}
      >
        {isInCart ? "Added to Cart" : "Add to Cart"}
      </CardButton>
    </>
  );
}
