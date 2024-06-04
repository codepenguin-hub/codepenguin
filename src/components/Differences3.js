import Image from "next/image";
import { Icon } from "@iconify/react";

import decoration1 from "../../public/images/decoration1.png";
import decoration2 from "../../public/images/decoration2.png";

export default function Differences3() {
  return (
    <section className="h-[100vh] width-[100%] bg-white flex justify-center items-center  flex-col">
      <div className="flex justify-center w-full m-12 gap-[5rem]">
        <div className="flex gap-3 flex-col ">
          <Image src={decoration1} className="w-[15rem]" />
          <h1 className="font-medium text-[#262625] text-2xl">
            Validações constantes
          </h1>
          <p className="font-light text-[#262625] text-base mt-2 mb-2">
            Durante todo o processo de design da página, <br />
            entramos em contato com você constantemente <br />
            para verificar se tudo está de acordo com o que
            <br />
            foi pedido. Não iniciamos o desenvolvimento <br />
            sem a validação das telas sem a sua validação.
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
        <Image src={decoration2} className="w-[30rem] h-auto" />
      </div>
    </section>
  );
}
