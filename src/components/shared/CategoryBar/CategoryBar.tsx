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
    <div className="w-full py-2.5 border-t border-gray-300 flex justify-between">
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            className="py-2 px-4 whitespace-nowrap  hover:text-primary-500 cursor-pointer font-medium transition"
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <CategoryBtn btnTitle="Clearance Sale" btnColor="bg-amber-600" />
        <CategoryBtn btnTitle="Men" btnColor="bg-blue-500" />
      </div>
    </div>
  );
}
