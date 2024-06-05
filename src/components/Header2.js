import Image from "next/image";
import originalPenguin from "../../public/images/originalPenguin.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Header2({ currentPage, previousPage }) {
  const header2Ref = useRef(null);

  useEffect(() => {
    const header = header2Ref.current;
    if (!header) return;

    const animation = gsap.timeline();
    if (currentPage === 1 && previousPage.current === 0) {
      animation.fromTo(
        header,
        { x: "50%", autoAlpha: 0, display: "none" },
        {
          x: "0%",
          autoAlpha: 1,
          duration: 0.5,
          ease: "power3.inOut",
          display: "flex",
        }
      );
    } else if (currentPage === 0 && previousPage.current === 1) {
      animation.to(header, {
        x: "50%",
        autoAlpha: 0,
        duration: 0.1,
        ease: "power3.inOut",
        onComplete: () => gsap.set(header, { display: "none" }),
      });
    } else if (currentPage > 1) {
      gsap.set(header, { x: "0%", autoAlpha: 1, display: "flex" });
    } else if (currentPage === 0) {
      gsap.set(header, { x: "50%", autoAlpha: 0, display: "none" });
    }

    previousPage.current = currentPage;

    return () => {
      animation.kill();
    };
  }, [currentPage, previousPage]);

  return (
    <div className="fixed top-12 left-8">
      <Image src={originalPenguin} className="w-10 " ref={header2Ref} />
    </div>
  );
}
