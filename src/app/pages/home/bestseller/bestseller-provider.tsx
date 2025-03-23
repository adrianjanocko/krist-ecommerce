import { getBestsellers } from "@/lib/actions";
import Bestseller from "./bestseller";

export default async function BestsellerProvider() {
  const bestsellers = await getBestsellers();

  return <Bestseller bestsellers={bestsellers} />;
}
