import React from "react";

const ProductShowcase = () => {
  return (
    <div className="grid lg:grid-cols-2  lg:gap-4 px-2">
      <div className="">
        <div className="grid grid-cols-2 gap-2 lg:gap-4">
          <div className="col-span-2 bg-[url(/one.png)] row-span-2 h-[400px] bg-cover"></div>

          <img src="three.png" className="" />
          <img src="four.png" className="" />
        </div>
      </div>
      <div className="">
        <img src="two.png" alt="" />
      </div>
    </div>
  );
};

export default ProductShowcase;
