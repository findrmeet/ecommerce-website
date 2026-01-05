import React, { FC, memo } from "react";
import Logo from "../Logo/Logo";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type ListSectionProps = {
  title?: string;
  items: string[];
};

const ListSection: FC<ListSectionProps> = ({ title, items }) => (
  <section aria-label={title ?? "footer section"}>
    {title ? (
      <h3 className="uppercase text-primary-500 font-semibold text-sm">
        {title}
      </h3>
    ) : null}
    <div className="text-white space-y-3 py-4 text-sm">
      {items.map((item) => (
        <div key={item} className="uppercase cursor-pointer">
          {item}
        </div>
      ))}
    </div>
  </section>
);

const socialIcons = [
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
  { icon: FaXTwitter, label: "X / Twitter", href: "#" },
  { icon: FaInstagramSquare, label: "Instagram", href: "#" },
  { icon: FaTiktok, label: "TikTok", href: "#" },
];

const Footer: FC = () => {
  const topCategory = [
    "Fashion",
    "Smart phone",
    "Electronics",
    "Grocery",
    "Beauty",
    "Furniture",
    "Toys",
  ];

  const electronics = [
    "Gadget",
    "Camera",
    "Computer",
    "Electric",
    "Television",
    "Refrigerator",
    "Smart phone",
  ];

  const grocery = [
    "Oil",
    "Dairy",
    "Rice",
    "Baby care",
    "Milk",
    "Ready mix",
    "Flour",
  ];

  const beauty = [
    "Grooming & wellness",
    "Skin care",
    "Body care",
    "Cosmetic",
    "Health care",
    "Hair care",
    "Oral care",
  ];

  const fashion = [
    "Men",
    "Women",
    "Kids",
    "Travel",
    "Jewellery",
    "Girls",
    "Cosmetics",
  ];

  const legalAndInfo = [
    "About us",
    "Terms & condition",
    "Privacy policy",
    "Cancellation & refund policy",
    "Contact us",
    "FAQs",
    "Store location",
  ];

  return (
    <footer className="bg-black py-10">
      <div className="container max-w-[1320px] mx-auto px-2">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 sm:gap-14 gap-4 justify-center items-center sm:items-start text-center sm:text-start">
          <div>
            <Logo />
            <div className="text-white flex flex-col gap-3 pt-4 text-sm">
              {legalAndInfo.map((item) => (
                <div key={item} className="uppercase cursor-pointer">
                  {item}
                </div>
              ))}

              <div className="py-4">
                <h3 className="uppercase text-sm pb-4 md:pb-2 border-b sm:inline lg:block">
                  Share your love
                </h3>
                <div className="pt-4 flex gap-2 justify-center sm:justify-start">
                  {socialIcons.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="border p-1 text-3xl rounded-full hover:bg-white hover:text-black"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <ListSection title="Top Category" items={topCategory} />
          <ListSection title="Electronics" items={electronics} />
          <ListSection title="Grocery" items={grocery} />
          <ListSection title="Beauty" items={beauty} />
          <ListSection title="Fashion" items={fashion} />
        </div>

        <div className="pb-4 px-2 hidden lg:block">
          <img src="pay-with.png" alt="payment methods" />
        </div>

        <div className="py-2 border-t text-[#4B5563] text-center">
          © 2025 Your Choice Company Ltd. Gazipur, postal code - 1289, Dhaka
          Bangladesh.
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
