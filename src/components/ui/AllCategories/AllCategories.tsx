import React from "react";
import SmallCard from "../Cards/SmallCard";
import LargeCard from "../Cards/LargeCard";
import SmallestCard from "../Cards/SmallestCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const AllCategories = () => {
  return (
    <>
      <SectionTitle title={"Our All Categories"} />
      <div className="lg:py-5 py-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 lg:gap-5 px-2 ">
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
      <div className="lg:py-5 py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 px-2 ">
        <LargeCard />
        <LargeCard />
        <LargeCard />
        <LargeCard />
        <LargeCard />
        <LargeCard />
      </div>
      <div className=" lg:py-5 py-2 grid grid-cols-2 sm:grid-cols-4 gap-2 lg:grid-cols-6 lg:gap-5 px-2 ">
        <div className="col-span-2 row-span-2">
          <LargeCard />
        </div>
        <SmallestCard />
        <SmallestCard />
        <SmallestCard />
        <SmallestCard />
        <SmallestCard />
        <SmallestCard />
        <SmallestCard />
        <SmallestCard />
      </div>
    </>
  );
};

export default AllCategories;
