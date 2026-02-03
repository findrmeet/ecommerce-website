import React, { useState, useRef, useEffect, MouseEvent } from "react";

type DropdownOption = {
  value: string;
  label: string;
  isHeader?: boolean;
};

const CustomStyledDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>("Order Status");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options: DropdownOption[] = [
    { value: "Pending", label: "Pending" },
    { value: "Processing", label: "Processing" },
    { value: "Shipped", label: "Shipped" },
    { value: "Delivered", label: "Delivered" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const toggleDropdown = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full max-w-xs" ref={dropdownRef}>
      {/* Selected Value Display - Custom styled button */}
      <button
        type="button"
        onClick={toggleDropdown}
        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500 cursor-pointer flex justify-between items-center appearance-none"
        style={{
          backgroundImage: "none", // Removes default chevron
          WebkitAppearance: "none",
          MozAppearance: "none",
        }}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span>{selectedValue}</span>
        {/* Custom chevron icon */}
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <div
          className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg"
          role="listbox"
          aria-label="Order status options"
        >
          <ul className="py-1 text-sm max-h-60 overflow-auto">
            {options.map((option) => (
              <li
                key={option.value}
                role="option"
                aria-selected={selectedValue === option.value}
              >
                <button
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={`w-full px-4 py-2.5 text-left transition-colors duration-150 cursor-pointer
                    ${
                      selectedValue === option.value
                        ? "bg-green-100 text-green-800 font-medium"
                        : "text-gray-700 hover:bg-green-50"
                    }
                    ${option.isHeader ? "font-semibold text-gray-900" : ""}
                    focus:outline-none focus:bg-green-100
                  `}
                  role="menuitem"
                >
                  <span className="flex items-center justify-between">
                    {option.label}
                    {selectedValue === option.value && (
                      <svg
                        className="w-4 h-4 text-green-600 ml-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomStyledDropdown;
