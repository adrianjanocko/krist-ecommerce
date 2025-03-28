import Input from "@/components/input";
import Section from "@/components/layout/section";
import Logo from "@/components/logo";
import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black text-white text-sm">
      <Section className="grid gap-8 my-0 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="grid gap-4">
            <Logo invert />

            {[
              {
                icon: <PhoneIcon />,
                text: "(704) 555-0127",
                href: "tel:(704) 555-0127",
              },
              {
                icon: <EnvelopeIcon />,
                text: "info@krist.com",
                href: "mailto:info@krist.com",
              },
              {
                icon: <MapIcon />,
                text: "3891 Ranchview Dr. Richardson, California 62639",
                href: "https://www.google.com/maps/search/?api=1&query=3891+Ranchview+Dr.+Richardson,+California+62639",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-start gap-2 hover:text-gray hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="size-5 flex-shrink-0">{item.icon}</span>
                <span>{item.text}</span>
              </Link>
            ))}
          </div>

          {[
            {
              title: "Information",
              links: ["Login", "Cart", "Wishlist", "Checkout"],
            },
            {
              title: "Service",
              links: ["Our Story", "Privacy Policy", "Terms & Conditions"],
            },
          ].map((section, index) => (
            <div key={index} className="grid gap-3 self-start">
              <h3 className="font-bold mb-2">{section.title}</h3>
              {section.links.map((text, linkIndex) => (
                <Link
                  key={linkIndex}
                  className="hover:text-gray hover:underline"
                  href={`/${text
                    .toLowerCase()
                    .replace(/ /g, "-")
                    .replace(/&/g, "and")}`}
                >
                  {text}
                </Link>
              ))}
            </div>
          ))}

          <div className="grid gap-5 self-start">
            <h3 className="font-bold">Subscribe</h3>
            <p>
              Enter your email below to be the first to know about new
              collections and product launches.
            </p>

            <Input
              placeholder="E-Mail"
              type="email"
              className="bg-transparent border-white text-white"
              icon={<EnvelopeIcon />}
            />
          </div>
        </div>

        <div className="bg-gray opacity-20 w-full h-[1px]" />

        <span className="text-gray">
          &copy; {new Date().getFullYear()} &mdash; All rights reserved
        </span>
      </Section>
    </div>
  );
}
