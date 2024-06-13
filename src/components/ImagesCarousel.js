import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const imageArray = [
  { src: "/images/site1.png", alt: "1" },
  { src: "/images/site2.png", alt: "2" },
  { src: "/images/site3.png", alt: "3" },
  { src: "/images/site4.png", alt: "4" },
  { src: "/images/site5.png", alt: "5" },
  { src: "/images/site6.png", alt: "6" },
  { src: "/images/site7.png", alt: "7" },
];

function generatePercentages(maxImagesShown = 2) {
  // maxImagesShow is th max amount of images shown on the sides of the central image (used with opacity to hide outrange images)
  const percentages = [];
  for (let i = 0; i <= maxImagesShown + 1; i++) {
    percentages.push((i / (maxImagesShown + 1)).toFixed(2));
  }
  percentages.reverse(); // change the array order

  return percentages;
}

export default () => {
  const percentages = useRef(generatePercentages(2));
  const distanceFactor = useRef(1.75); // how LESS the images are moved from the center (used with translateX)
  const currentCenterIndex = useRef(Math.floor(imageArray.length / 2)); // can be float
  const prevCenterIndex = useRef(Math.floor(imageArray.length / 2)); // always integer

  const handleSelectImage = (imageIndex) => {
    currentCenterIndex.current = imageIndex; // save the current value to keep dragging momentum

    if (prevCenterIndex.current !== Math.round(imageIndex)) {
      setImages(handleSetImages(imageIndex));
      prevCenterIndex.current = Math.round(imageIndex);
    }
  };

  const handleSetImages = (centerIndex) => {
    return imageArray.map((image, index) => {
      const roundedCenterIndex = Math.round(centerIndex);
      const percentageIndex = Math.abs(index - roundedCenterIndex); // it can be a float number

      let percentage = 0;
      if (percentageIndex < percentages.current.length) {
        percentage = percentages.current[percentageIndex];
      }

      let transform = "translateX(0%) scale(1)";

      const direction = index - roundedCenterIndex; // almost a vector (has module and directions)
      const translatePercentage =
        (100 - percentage * 100) / distanceFactor.current;
      const scale = 1 - Math.abs(direction) * 0.1;

      if (direction > 0) {
        transform = `translateX(${translatePercentage}%) scale(${scale})`;
      } else if (direction < 0) {
        transform = `translateX(-${translatePercentage}%) scale(${scale})`;
      }

      return {
        ...image,
        style: {
          zIndex: imageArray.length - Math.abs(roundedCenterIndex - index),
          transform,
          opacity: percentage,
          transition: "all 0.5s ease",
        },
      };
    });
  };

  const initialCenterIndex = Math.floor(imageArray.length / 2);
  const [images, setImages] = useState(handleSetImages(initialCenterIndex));
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setDragOffset(event.clientX || event.touches[0].clientX);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const deltaX = event.clientX
        ? event.clientX - dragOffset
        : event.touches[0].clientX - dragOffset;
      const newCenterIndex = currentCenterIndex.current - deltaX / 200;
      const clampedNewCenterIndex = Math.max(
        0,
        Math.min(newCenterIndex, imageArray.length - 1)
      );
      handleSelectImage(clampedNewCenterIndex);
      setDragOffset(event.clientX || event.touches[0].clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window?.innerWidth;
      if (innerWidth > 1280) {
        distanceFactor.current = 1.75;
      } else if (innerWidth > 824) {
        distanceFactor.current = 2.2;
      } else if (innerWidth > 600) {
        distanceFactor.current = 3;
      } else if (innerWidth > 500) {
        distanceFactor.current = 4;
        percentages.current = generatePercentages(1);
      }
      setImages(handleSetImages(initialCenterIndex));
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // call it on initial render

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="p-[20px] overflow-hidden flex justify-center items-center  h-[50vh] w-[100vw] relative max-[750px]:h-[22vh]"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchEnd={handleMouseUp}
    >
      {images.map((image, index) => {
        return (
          <div
            key={index}
            className="aspect-video h-[100%] flex justify-center items-center cursor-pointer absolute select-none"
            onClick={() => {
              if (!isDragging) {
                handleSelectImage(index);
              }
            }}
            style={image.style}
          >
            <Image
              fill
              src={image.src}
              quality={100}
              className="rounded-xl border-solid border-slate-50 border-4"
              draggable={false}
              alt={image.alt}
            />
          </div>
        );
      })}
    </div>
  );
};
