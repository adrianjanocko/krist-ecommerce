import { Review } from "@/util/types";
import Reviews from "./reviews";

export default function ReviewsProvider() {
  // TODO
  const reviews: Review[] = [
    {
      id: 1,
      stars: 5,
      review:
        "This product exceeded all my expectations! The quality is superb and the service was outstanding.",
      image_url: "https://ui-avatars.com/api/?name=John+Doe",
      name: "Olivia Smith",
      role: "Verified Buyer",
    },
    {
      id: 2,
      stars: 4,
      review:
        "Great value for the price, though delivery was slightly delayed. Overall, very satisfied with the purchase!",
      image_url: "https://ui-avatars.com/api/?name=John+Doe",
      name: "Liam Johnson",
      role: "Pro User",
    },
    {
      id: 3,
      stars: 3,
      review:
        "The product is decent but didn’t quite meet my expectations. Customer support was helpful, though.",
      image_url: "https://ui-avatars.com/api/?name=John+Doe",
      name: "Emma Brown",
      role: "Regular Customer",
    },
    {
      id: 4,
      stars: 2,
      review:
        "Unfortunately, I encountered some issues with this product. It didn’t work as described.",
      image_url: "https://ui-avatars.com/api/?name=John+Doe",
      name: "Noah Miller",
      role: "Reviewer",
    },
    {
      id: 5,
      stars: 5,
      review:
        "Absolutely love it! The design is sleek and the functionality is top-notch. Highly recommended!",
      image_url: "https://ui-avatars.com/api/?name=John+Doe",
      name: "Sophia Davis",
      role: "Happy Customer",
    },
  ];

  return <Reviews reviews={reviews} />;
}
