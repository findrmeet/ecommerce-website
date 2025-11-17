import React from "react";

const ProductShowcase = () => {
  return (
    <div className="grid grid-cols-2 border">
      <div className="border">
        <div className="grid grid-cols-2">
          <img src="one.png" className="col-span-2" />
          <img src="three.png" className="" />
          <img src="four.png" className="" />
        </div>
      </div>
      <div className="border">
        <img src="two.png" alt="" />
      </div>
    </div>
  );
};

export default ProductShowcase;
