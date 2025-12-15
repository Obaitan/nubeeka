"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { designs } from "@/lib/resources";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % designs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-80 md:h-[400px] lg:h-[560px] xl:h-[480px] overflow-hidden">
      {designs.map((design, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={design.url}
            alt={design.label}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
