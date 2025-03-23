import { getCategories } from "@/lib/actions";
import Categories from "./categories";

export default async function CategoriesProvider() {
  const categories = await getCategories();

  return <Categories categories={categories} />;
}
