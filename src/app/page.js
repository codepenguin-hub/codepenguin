"use client";
import { useState } from "react";
import "../styles/globals.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const PageIndicator = ({ pageCount, currentPage }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const indicators = container.querySelectorAll(".page-indicator");

    gsap.to(indicators, {
      backgroundColor: (index) =>
        index === currentPage ? "#F18701" : "#E5E5E5",
      duration: 0.5,
    });
  }, [currentPage]);

  const indicators = [];
  for (let i = 0; i < pageCount; i++) {
    indicators.push(
      <div
        key={i}
        className={`w-2 rounded-full mx-1 page-indicator ${
          currentPage === i ? "bg-[#F18701]" : "bg-[#E5E5E5]"
        } ${currentPage === i ? "h-5" : "h-2"}`}
      ></div>
    );
  }
  return (
    <div ref={containerRef} className="flex flex-col  gap-2">
      {indicators}
    </div>
  );
};

export default function Home() {
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    let context = gsap.context(() => {
      const container = containerRef.current;
      const sections = gsap.utils.toArray(container.children);

      gsap.to(sections, {
        yPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 0.5,
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: 0.1,
            ease: "power1.inOut",
          },
          onUpdate: (self) => {
            const scrollPosition = self.scroll();
            const windowHeight = window.innerHeight;
            const pageIndex = Math.floor(
              (scrollPosition + windowHeight / 2) / windowHeight / 3
            );
            console.log(pageIndex);
            setCurrentPage(pageIndex);
          },
          end: () => `+=${container.offsetHeight * (sections.length - 1) * 3}`,
        },
      });
    });
    return () => context.revert();
  }, []);

  return (
    <div className="relative">
      <div ref={containerRef} className="overflow-hidden relative h-[100vh]">
        <section
          id="panel_1"
          className="h-[100vh] width-[100%] bg-[#f9f9f9] flex items-center justify-center"
        >
          <h1>panel 1</h1>
        </section>
        <section
          id="panel_2"
          className="h-[100vh] width-[100%] flex items-center justify-center"
        >
          <h1>panel 2</h1>
        </section>
        <section
          id="panel_3"
          className="h-[100vh] width-[100%] bg-[#f9f9f9] flex items-center justify-center"
        >
          <h1>panel 3</h1>
        </section>
        <section
          id="panel_4"
          className="h-[100vh] width-[100%]  flex items-center justify-center"
        >
          <h1>panel 4</h1>
        </section>
        <section
          id="panel_5"
          className="h-[100vh] width-[100%] bg-[#f9f9f9] flex items-center justify-center"
        >
          <h1>panel 5</h1>
        </section>
        <section
          id="panel_6"
          className="h-[100vh] width-[100%]  flex items-center justify-center"
        >
          <h1>panel 6</h1>
        </section>
      </div>
      <div className="fixed bottom-[50%] right-0 transform -translate-x-1/2">
        <PageIndicator pageCount={6} currentPage={currentPage} />
      </div>
    </div>
  );
}
