import React from "react";

const SmallCards = () => {
  return (
    <div className="h-[225px]  bg-linear-to-b from-[#D7D7D7]  via-[#DADADA] to-[#F5F5F5] relative flex justify-center items-center">
      <span className="absolute bg-white py-1 px-2 top-2 left-2">
        smartphones
      </span>

      <div className="relative">
        <img src="phone.png" alt="phone" className="w-44" />
        <svg
          className="absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          width="184"
          height="52"
          viewBox="0 0 184 52"
          fill="none"
        >
          <g filter="url(#filter0_f_44_180)">
            <ellipse
              cx="92"
              cy="26"
              rx="72"
              ry="6"
              fill="black"
              fill-opacity="0.5"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_44_180"
              x="0"
              y="0"
              width="184"
              height="52"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="10"
                result="effect1_foregroundBlur_44_180"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default SmallCards;
