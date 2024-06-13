import Image from "next/image";
import { Icon } from "@iconify/react";
import DifferencesVideo from "./DifferencesVideo";

export default function Differences3() {
	return (
		<section className="h-[100vh] width-[100%]  flex justify-center items-center  flex-col bg-[#F3F4F6] border-dashed border-2 border-b-[#eeeeee4d]">
			<div className="flex justify-center items-center w-[75%] m-12 max-[1024px]:flex-col max-[1024px]:w-full max-[1024px]:gap-10 ">
				<div className="flex justify-center w-[50%] max-[1024px]:w-[70%]  ">
					<div className="flex gap-3 flex-col ">
						<Image
							src="/images/decoration3.png"
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: "15rem", height: "auto" }}
							alt="image"
						/>
						<h1 className="font-medium text-[#262625] text-2xl">
							Validações constantes
						</h1>
						<p className="font-light text-[#262625] text-base mt-2 mb-2 w-[95%] max-[1024px]:w-full">
							Durante todo o processo de design da página,
							entramos em contato com você constantemente para
							verificar se tudo está de acordo com o que foi
							pedido. Não iniciamos o desenvolvimento sem a
							validação das telas sem a sua validação.
						</p>
						<div className="flex flex-col gap-1">
							<p className="flex flex-row items-center font-light text-[#262625] gap-3">
								<Icon
									icon="lets-icons:check-fill"
									className="text-[#7678ED] text-3xl "
								/>
								Validações semanais
							</p>
							<p className="flex flex-row items-center font-light text-[#262625] gap-3">
								<Icon
									icon="lets-icons:check-fill"
									className="text-[#7678ED] text-3xl "
								/>
								Grupo de validação por whatsapp
							</p>
							<p className="flex flex-row items-center font-light text-[#262625] gap-3">
								<Icon
									icon="lets-icons:check-fill"
									className="text-[#7678ED] text-3xl "
								/>
								Prototipagem gratuita
							</p>
						</div>
					</div>
				</div>
				<DifferencesVideo src="/videos/project-example-clinic.mp4" />
			</div>
		</section>
	);
}
