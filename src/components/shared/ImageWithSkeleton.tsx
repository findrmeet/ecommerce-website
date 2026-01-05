"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "onLoadingComplete"> & {
  className?: string;
};

const ImageWithSkeleton: React.FC<Props> = (props) => {
  const [loaded, setLoaded] = useState(false);

  // extract className to avoid type conflicts with ImageProps overloads
  const { className, ...imageProps } = props as any;

  const imageClass = `${className ?? ""} ${
    loaded ? "opacity-100" : "opacity-0"
  } transition-opacity duration-300`;

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      <Image
        {...imageProps}
        onLoadingComplete={() => setLoaded(true)}
        className={imageClass}
      />
    </div>
  );
};

export default ImageWithSkeleton;
