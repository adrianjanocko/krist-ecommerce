import { getCategories } from "@/lib/actions";
import CategoriesWrapper from "./categories-wrapper";

export default async function Categories() {
  const categories = await getCategories();

  return <CategoriesWrapper categories={categories} />;
}
