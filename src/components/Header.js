import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";

import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Header({ currentPage, previousPage }) {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
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
        duration: 0.5,
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
    <div className="fixed top-12 left-8 max-[1024px]:top-8 ">
      <Link href="/">
        <Image
          src="/images/defaultPenguin.png"
          alt="Imagem do logotipo da CodePenguin, um pinguim minimalista com a cor preta no seu corpo e laranja em suas patas e no seu bico."
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "2.5rem", height: "auto" }}
          className="invisible"
          ref={headerRef}
        />
      </Link>
    </div>
  );
}
