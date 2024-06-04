"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import FirstBanner from "../components/FirstBanner";
import Differences1 from "../components/Differences1";
import Differences2 from "../components/Differences2";
import Differences3 from "../components/Differences3";
import Header2 from "../components/Header2";
import PageIndicator from "../components/PageIndicator";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const previousPage = useRef(0);

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
          const newPage = Math.floor(self.progress * (sections.length - 1));
          setCurrentPage(newPage);
        },
        end: () =>
          `+=${containerRef.current.offsetHeight * (sections.length - 1)}`,
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  useEffect(() => {
    previousPage.current = currentPage;
  }, [currentPage]);

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

      {currentPage !== 0 && (
        <div className="fixed bottom-[50%] right-0 transform -translate-x-1/2">
          <PageIndicator pageCount={6} currentPage={currentPage} />
        </div>
      )}

      <Header2
        currentPage={currentPage}
        previousPage={previousPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Home;
