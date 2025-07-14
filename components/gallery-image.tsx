import React from "react";

interface GalleryImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  category: string;
  className?: string;
}

export const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, width = 400, height = 600, category, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`rounded-lg shadow-lg object-cover w-full transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-90 ${className || ""}`}
      loading="lazy"
      data-category={category}
    />
  );
};
