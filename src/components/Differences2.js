import Image from "next/image";
import { Icon } from "@iconify/react";

import decoration1 from "../../public/images/decoration1.png";
import decoration2 from "../../public/images/decoration2.png";

export default function Differences2() {
  return (
    <section className="h-[100vh] width-[100%] bg-[#fafafa] flex justify-center items-center  flex-col">
      <div className="flex justify-center w-full m-12 gap-[5rem]">
        <Image src={decoration2} className="w-[30rem] h-auto" />
        <div className="flex gap-3 flex-col ">
          <Image src={decoration1} className="w-[15rem]" />
          <h1 className="font-medium text-[#262625] text-2xl">
            Desenvolvimento no código
          </h1>
          <p className="font-light text-[#262625] text-base mt-2 mb-2">
            Utilizamos apenas tecnologias que visam a <br />
            melhor performance e flexibilidade, permitindo <br /> que o projeto
            fique o mais próximo possível do <br />
            que você deseja.
          </p>
          <div className="flex flex-col gap-1">
            <p className="flex flex-row items-center font-light text-[#262625] gap-3">
              <Icon
                icon="lets-icons:check-fill"
                className="text-[#7678ED] text-3xl "
              />
              Grande flexibilidade no design
            </p>
            <p className="flex flex-row items-center font-light text-[#262625] gap-3">
              <Icon
                icon="lets-icons:check-fill"
                className="text-[#7678ED] text-3xl "
              />
              Performance muito maior
            </p>
            <p className="flex flex-row items-center font-light text-[#262625] gap-3">
              <Icon
                icon="lets-icons:check-fill"
                className="text-[#7678ED] text-3xl "
              />
              Desenvolvimento do zero
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
