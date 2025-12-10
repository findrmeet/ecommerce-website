import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MediumCard from "../Cards/MediumCard";

const OurTopSellingProducts = () => {
  return (
    <>
      <SectionTitle title="Our Top Selling Products" />
      <div className="lg:py-5 py-4 grid  sm:grid-cols-5   gap-4 lg:gap-5 px-2 ">
        <MediumCard />
        <MediumCard />
        <MediumCard />
        <MediumCard />
        <MediumCard />
        <MediumCard />
        <MediumCard />
        <MediumCard />
        <MediumCard />
        <MediumCard />
      </div>
    </>
  );
};

export default OurTopSellingProducts;
