import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <>
      <SectionTitle title="Testimonials" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 px-2 lg:grid-cols-4  gap-4 py-4">
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </>
  );
};

export default Testimonials;
