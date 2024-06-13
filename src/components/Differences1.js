import Image from "next/image";
import { Icon } from "@iconify/react";
import DifferencesVideo from "./DifferencesVideo";

export default function Differences1() {
  return (
    <section className="h-[100vh] width-[100%]  flex justify-center items-center  flex-col bg-[#F3F4F6] border-dashed border-2 border-b-[#c4c4c4cc]">
      <div className="flex justify-center items-center w-[75%] m-12 max-[1024px]:flex-col max-[1024px]:w-full max-[1024px]:gap-10 ">
        <div className="flex justify-center w-[50%] max-[1024px]:w-[70%]  ">
          <div className="flex gap-3 flex-col ">
            <Image
              src="/images/decoration1.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "15rem", height: "auto" }}
              alt="image"
            />
            <h1 className="font-medium text-[#262625] text-2xl">
              Design por quem entende
            </h1>
            <p className="font-light text-[#262625] text-base mt-2 mb-2 w-[95%] max-[1024px]:w-full">
              Multiplique a potência do seu negócio com um website que transmite
              o valor do seu produto, focado em resultados!
            </p>
            <div className="flex flex-col gap-1">
              <p className="flex flex-row items-center font-light text-[#262625] gap-3">
                <Icon
                  icon="lets-icons:check-fill"
                  className="text-[#7678ED] text-3xl "
                />
                Design antes do desenvolvimento
              </p>
              <p className="flex flex-row items-center font-light text-[#262625] gap-3">
                <Icon
                  icon="lets-icons:check-fill"
                  className="text-[#7678ED] text-3xl "
                />
                Técnicas modernas de design
              </p>
              <p className="flex flex-row items-center font-light text-[#262625] gap-3">
                <Icon
                  icon="lets-icons:check-fill"
                  className="text-[#7678ED] text-3xl "
                />
                Layout 100% personalizado
              </p>
            </div>
          </div>
        </div>
        <DifferencesVideo src="/videos/project-example-math.webm" />
      </div>
    </section>
  );
}
