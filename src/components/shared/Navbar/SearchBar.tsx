import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search for products, brands..."
        className="w-full pl-10 pr-4 py-2 border border-primary-500 rounded-full focus:outline-none focus:ring-1 focus:ring-primary-500"
      />
    </div>
  );
}
