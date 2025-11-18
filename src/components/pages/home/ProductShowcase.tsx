import React from "react";

const ProductShowcase = () => {
  return (
    <div className="grid lg:grid-cols-2  lg:gap-4 px-2">
      <div className="">
        <div className="grid sm:grid-cols-2 gap-2 lg:gap-4">
          <div className="lg:col-span-2  bg-[url(/one.png)] lg:row-span-2 lg:h-[400px] bg-cover"></div>

          <img src="three.png" className="" />
          <img src="four.png" className="" />
          <img className="lg:hidden" src="two.png" alt="" />
        </div>
      </div>
      <div>
        <img className="hidden lg:block" src="two.png" alt="" />
      </div>
    </div>
  );
};

export default ProductShowcase;
