import React from "react";
import LogoAndCategory from "./LogoAndCategory";
import TopCategory from "./TopCategory";
import Electronics from "./Electronics";
import Grocery from "./Grocery";
import Beauty from "./Beauty";
import Fashion from "./Fashion";

const Footer = () => {
  return (
    <div className=" bg-black py-10">
      <div className="grid grid-cols-6 container max-w-[1320px] mx-auto gap-14">
        {/* logo & category */}
        <LogoAndCategory />
        {/* top category */}
        <TopCategory />
        {/* electronics */}
        <Electronics />
        {/* grocery */}
        <Grocery />
        {/* beauty */}
        <Beauty />
        {/* fashion */}
        <Fashion />
      </div>
      <div className="container max-w-[1320px] mx-auto pb-4">
        <img src="pay-with.png" alt="pay-with" />
      </div>
      <div className="py-2 border-t text-[#4B5563] text-center container max-w-[1320px] mx-auto ">
        © 2025 your choice company Ltd. gazipur, postal code - 1289, dhaka
        bangladesh.
      </div>
    </div>
  );
};

export default Footer;
