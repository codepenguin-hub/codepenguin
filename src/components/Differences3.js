import Image from "next/image";
import { Icon } from "@iconify/react";

import DifferencesVideo from "./DifferencesVideo";

export default function Differences3() {
	return (
		<section className="h-[100vh] width-[100%] flex justify-center items-center  flex-col">
			<div className="flex justify-center items-center w-full m-12">
				<div className="flex justify-center w-[40%]">
					<div className="flex gap-3 flex-col ">
						<Image
							src="/images/decoration1.png"
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: "15rem", height: "auto" }}
						/>
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
				</div>
				<DifferencesVideo src="/videos/project-example-math.webm" />
			</div>
		</section>
	);
}
