import React from "react";
import SmallCards from "../Cards/SmallCards";

const AllCategories = () => {
  return (
    <>
      <div className="bg-[url(/bg-cat.jpg)]  h-[88px] text-white flex justify-center items-center">
        <h2 className="text-4xl uppercase font-semibold">Our All Categories</h2>
      </div>
      <div className="py-5 grid grid-cols-5 gap-5">
        <SmallCards />
        <SmallCards />
        <SmallCards />
        <SmallCards />
        <SmallCards />
        <SmallCards />
        <SmallCards />
        <SmallCards />
        <SmallCards />
        <SmallCards />
        <SmallCards />
        <SmallCards />
        <SmallCards />
        <SmallCards />
        <SmallCards />
        <SmallCards />
        <SmallCards />
        <SmallCards />
        <SmallCards />
        <SmallCards />
      </div>
    </>
  );
};

export default AllCategories;
