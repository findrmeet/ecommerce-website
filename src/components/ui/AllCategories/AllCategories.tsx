import React from "react";
import SmallCard from "../Cards/SmallCard";
import LargeCard from "../Cards/LargeCard";
import SmallestCard from "../Cards/SmallestCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const AllCategories = () => {
  return (
    <>
      <SectionTitle title={"Our All Categories"} />
      <div className="lg:py-5 py-2 grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-5 px-2 lg:px-0">
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
      <div className="lg:py-5 py-2 grid grid-cols-1 lg:grid-cols-5 gap-2 lg:gap-5 px-2 lg:px-0">
        <LargeCard />
        <LargeCard />
        <LargeCard />
        <LargeCard />
        <LargeCard />
        <LargeCard />
      </div>
      <div className="lg:py-5 py-2 grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-5 px-2 lg:px-0">
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
