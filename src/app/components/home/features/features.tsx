import {
  CreditCardIcon,
  CurrencyDollarIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

export default function Features() {
  return (
    <ul className="flex flex-wrap justify-between gap-3">
      {[
        {
          icon: ShoppingBagIcon,
          title: "Free Shipping",
          description: "Free shipping above $150",
        },
        {
          icon: CurrencyDollarIcon,
          title: "Money Guarantee",
          description: "Within 30 days",
        },
        {
          icon: QuestionMarkCircleIcon,
          title: "Online Support",
          description: "24/7",
        },
        {
          icon: CreditCardIcon,
          title: "Flexible Payment",
          description: "Pay with multiple cards",
        },
      ].map((feature, index) => (
        <li key={index} className="grid gap-1">
          <feature.icon className="size-6 mb-2" />
          <h4 className="font-bold text-lg">{feature.title}</h4>
          <p>{feature.description}</p>
        </li>
      ))}
    </ul>
  );
}
