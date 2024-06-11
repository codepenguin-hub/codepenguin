import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Indicator = ({ pageCount, currentPage }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const indicators = containerRef.current.querySelectorAll(".page-indicator");
    gsap.to(indicators, {
      duration: 0.5,
      backgroundColor: (i) => (i === currentPage ? "#F18701" : "#E5E5E5"),
    });
  }, [currentPage]);

  const indicators = Array.from({ length: pageCount }, (_, i) => (
    <div
      key={i}
      className={`w-2 rounded-full mx-1 page-indicator ${
        currentPage === i ? "bg-[#F18701] h-5" : "bg-[#E5E5E5] h-2"
      } max-[800px]:hidden`}
    />
  ));

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-2 max-[800px]:flex-row"
    >
      {indicators}
    </div>
  );
};

export default Indicator;
