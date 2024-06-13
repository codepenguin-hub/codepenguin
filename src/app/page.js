"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Spline from "@splinetool/react-spline";

import { Icon } from "@iconify/react";
import Image from "next/image"; // Importando o componente Image do Next.js
import FirstBanner from "../components/FirstBanner";
import Differences1 from "../components/Differences1";
import Differences2 from "../components/Differences2";
import Differences3 from "../components/Differences3";
import Services from "../components/Services";
import img1Services from "../../public/images/img1Services.png";
import img2Services from "../../public/images/img2Services.png";
import img3Services from "../../public/images/img3Services.png";
import img4Services from "../../public/images/img4Services.png";
import Header from "../components/Header";
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
        scrub: 0.8,
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: 0.1,
          ease: "power1.inOut",
        },
        onUpdate: (self) => {
          const newPage = Math.floor(self.progress * (sections.length - 1));
          if (newPage !== previousPage.current) {
            setCurrentPage(newPage);
          }
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
    <main>
      <div className="relative">
        <div ref={containerRef} className="relative h-[100vh]">
          <FirstBanner />
          <Differences1 />
          <Differences2 />
          <Differences3 />
          <Services
            key={1}
            color1={`#7678ed51`}
            color2={`#7678ed7c`}
            upperTitle={true}
            img={img1Services}
            title={<h1 className="text-white text-2xl ">Landing Page</h1>}
            txt1={
              <p className="text-white mt-[-6px]">
                <b>Foco único:</b> Foco único: Uma página de destino
                concentra-se em promover um único produto, serviço ou oferta.
              </p>
            }
            txt2={
              <p className="text-white mt-[-6px]">
                <b>Objetivo claro:</b> Objetivo claro: Projetada para converter
                visitantes em leads ou clientes através de uma chamada para ação
                (CTA) clara e direta.
              </p>
            }
            txt3={
              <p className="text-white mt-[-6px]">
                <b>Conteúdo persuasivo:</b> Utiliza texto convincente e
                elementos visuais atraentes para destacar os benefícios e
                incentivar a ação do usuário.
              </p>
            }
          />
          <Services
            key={2}
            upperTitle={false}
            img={img2Services}
            title={<h1 className="text-white text-2xl ">Site Start</h1>}
            txt1={
              <p className="text-white mt-[-6px]">
                <b>Introdução à marca:</b> Apresenta informações básicas sobre a
                empresa, incluindo sua missão, visão e valores.
              </p>
            }
            txt2={
              <p className="text-white mt-[-6px]">
                <b>Portfólio inicial:</b> Mostra alguns dos trabalhos ou
                produtos iniciais da empresa para demonstrar suas habilidades e
                experiência.
              </p>
            }
            txt3={
              <p className="text-white mt-[-6px]">
                <b>Contato fácil:</b> Oferece opções claras de contato, como
                formulários de contato ou informações de e-mail, para facilitar
                a comunicação com os visitantes.
              </p>
            }
          />
          <Services
            key={3}
            upperTitle={false}
            img={img3Services}
            title={<h1 className="text-white text-2xl ">Site Potfólio</h1>}
            txt1={
              <p className="text-white mt-[-6px]">
                <b>Showcase de trabalhos:</b> Destaca uma seleção dos melhores
                projetos, produtos ou serviços oferecidos pela empresa.
              </p>
            }
            txt2={
              <p className="text-white mt-[-6px]">
                <b>Testemunhos e referências:</b> Inclui depoimentos de clientes
                satisfeitos e links para projetos concluídos para aumentar a
                credibilidade.
              </p>
            }
            txt3={
              <p className="text-white mt-[-6px]">
                <b>Portfólio dinâmico:</b> Mantém o portfólio atualizado com
                novos trabalhos e projetos para refletir o crescimento e a
                evolução da empresa.
              </p>
            }
          />
          <Services
            upperTitle={false}
            img={img4Services}
            title={<h1 className="text-white text-2xl ">Site Catálogo</h1>}
            txt1={
              <p className="text-white mt-[-6px]">
                <b>Amplia gama de produtos:</b> Apresenta uma variedade de
                produtos ou serviços oferecidos pela empresa, geralmente
                organizados por categoria.
              </p>
            }
            txt2={
              <p className="text-white mt-[-6px]">
                <b>Dashboard de produtos:</b> gestão administrativa dos itens
                que serão mostrados;
              </p>
            }
            txt3={
              <p className="text-white mt-[-6px]">
                <b>Navegação fácil:</b> Oferece recursos de pesquisa e filtragem
                para facilitar a localização de produtos específicos.
              </p>
            }
          />
        </div>
      </div>

      <Link href="/contato" className="flex flex-row items-center gap-3">
        <div className="fixed bottom-3 right-3 p-4 bg-[#F18701] text-slate-50 rounded-full">
          <div className="w-[1.875rem] h-[1.875rem]">
            <Icon
              icon="line-md:phone-call-twotone-loop"
              className="text-white text-3xl"
            />
          </div>
        </div>
      </Link>

      {currentPage !== 0 && (
        <div className="fixed bottom-[50%] right-0 transform -translate-x-1/2 ">
          <PageIndicator pageCount={7} currentPage={currentPage} />
        </div>
      )}

      <Header
        currentPage={currentPage}
        previousPage={previousPage}
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
};

export default Home;
