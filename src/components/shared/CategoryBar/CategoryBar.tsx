"use client";

import CategoryBtn from "./CategoryBtn";

const categories = [
  "Electronics",
  "Grocery",
  "Smartphone",
  "Furniture",
  "Beauty",
  "Baby Care",
  "Women",
  "Smart Watch",
  "Attar",
];

export default function CategoryBar() {
  return (
    <div className="w-full py-2.5 border-t border-gray-300 flex flex-col md:flex-row justify-between gap-2 px-2">
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            className="pt-2 pb-4 lg:py-2 px-4 whitespace-nowrap  hover:text-primary-500 cursor-pointer font-normal text-sm transition"
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="flex gap-2 justify-center">
        <CategoryBtn btnTitle="Clearance Sale" btnColor="bg-[#F79009]" />
        <CategoryBtn btnTitle="Men" btnColor="bg-[#2E88E2]" />
        <CategoryBtn btnTitle="Combo" btnColor="bg-[#3CBEB9]" />
        <CategoryBtn btnTitle="Footwear" btnColor="bg-[#6366F1]" />
      </div>
    </div>
  );
}
