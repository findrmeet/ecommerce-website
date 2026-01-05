import React from "react";
import ImageWithSkeleton from "@/components/shared/ImageWithSkeleton";

const images = Array.from({ length: 8 }).map((_, i) => `/blender.png`);

const ProductGrid = () => {
  return (
    <div className="pt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 px-2 lg:px-0 mb-4 container-custom">
      {images.map((src, idx) => (
        <div
          key={idx}
          className="w-full h-44 bg-white flex items-center justify-center"
        >
          <ImageWithSkeleton
            src={src}
            alt={`product-${idx}`}
            width={300}
            height={300}
            loading="lazy"
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
