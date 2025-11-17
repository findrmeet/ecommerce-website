import React from "react";
import LogoAndCategory from "./LogoAndCategory";

const Footer = () => {
  return (
    <div className=" bg-black py-10">
      <div className="grid grid-cols-6 container max-w-[1320px] mx-auto">
        {/* logo & category */}
        <LogoAndCategory />
        {/* top category */}
        {/* electronics */}
        {/* grocery */}
        {/* beauty */}
        {/* fashion */}
      </div>
    </div>
  );
};

export default Footer;
