"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import FirstBanner from "../components/FirstBanner.js";
import Differences1 from "../components/Differences1.js";
import Differences2 from "../components/Differences2.js";
import Differences3 from "../components/Differences3.js";

gsap.registerPlugin(ScrollTrigger);

const PageIndicator = ({ pageCount, currentPage }) => {
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
      }`}
    />
  ));

  return (
    <div ref={containerRef} className="flex flex-col gap-2">
      {indicators}
    </div>
  );
};

const Home = () => {
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [scrollTrigger, setScrollTrigger] = useState(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(containerRef.current.children);

    const trigger = gsap.to(sections, {
      yPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 0.5,
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: 0.1,
          ease: "power1.inOut",
        },
        onUpdate: (self) => {
          const { scrollY, innerHeight } = window;
          const pageIndex = Math.floor(
            (scrollY + innerHeight / 2) / innerHeight / 3
          );
          setCurrentPage(pageIndex);
        },
        end: () =>
          `+=${containerRef.current.offsetHeight * (sections.length - 1) * 3}`,
      },
    });

    setScrollTrigger(trigger);

    return () => trigger.kill(); // Limpa o ScrollTrigger ao desmontar
  }, []);

  return (
    <div className="relative">
      <div ref={containerRef} className="overflow-hidden relative h-[100vh]">
        <FirstBanner />
        <Differences1 />
        <Differences2 />
        <Differences3 />
        <section className="h-[100vh] width-[100%] bg-[#f9f9f9] flex items-center justify-center">
          <h1>Panel 5</h1>
        </section>
        <section className="h-[100vh] width-[100%] flex items-center justify-center">
          <h1>Panel 6</h1>
        </section>
      </div>
      <div className="fixed bottom-[50%] right-0 transform -translate-x-1/2">
        <PageIndicator pageCount={6} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default Home;
