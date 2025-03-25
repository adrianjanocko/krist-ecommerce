import { getCategories, getSubcategories } from "@/lib/actions";
import { CategoryProps, SubcategoryProps } from "@/util/types";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default async function ShopPopover() {
  const [categories, subcategories]: [CategoryProps[], SubcategoryProps[]] =
    await Promise.all([getCategories(), getSubcategories()]);

  const groupedData = categories.map((category) => ({
    ...category,
    subcategories: subcategories.filter(
      (sub) => sub.category_id === category.id
    ),
  }));

  return (
    <li className="dropdown dropdown-hover">
      <Link
        href="/shop"
        tabIndex={0}
        className="flex items-center gap-1 hover:text-gray"
      >
        <span>Shop</span>
        <ChevronDownIcon className="size-4" />
      </Link>
      <div
        tabIndex={0}
        className="dropdown-content menu bg-white p-8 shadow grid grid-cols-3 gap-8 min-w-[50rem]"
      >
        {groupedData.map((category) => (
          <div key={category.id} className="grid gap-4 self-start">
            <Link href={`/shop/${category.slug}`} className="font-bold">
              {category.name}
            </Link>
            <div className="grid gap-3">
              {category.subcategories.map((sub) => (
                <Link
                  key={sub.id}
                  href={`/shop/${category.slug}/${sub.slug}`}
                  className="p-0 bg-transparent"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </li>
  );
}
