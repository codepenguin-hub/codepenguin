import Image from "next/image";
import { Icon } from "@iconify/react";
import DifferencesVideo from "./DifferencesVideo";

export default function Differences1() {
	return (
		<section className="h-[100vh] width-[100%] flex justify-center items-center  flex-col">
			<div className="flex items-center justify-center flex-col mt-8">
				<h1 className="text-3xl font-regular bg-clip-text  text-[#262625] text-center leading-normal">
					Dê{" "}
					<b className="font-semibold text-[#7678ED]">
						credibilidade
					</b>{" "}
					à sua empresa <br />
					com um website{" "}
					<b className="font-semibold text-[#7678ED]">profissional</b>
				</h1>
			</div>
			<div className="flex justify-center items-center w-full m-12">
				<div className="flex justify-center w-[40%]">
					<div className="flex gap-3 flex-col ">
						<Image
							src="/images/decoration1.png"
							alt="Imagem decorativa e cartonesca de um quadrado sobre um círculo com um pincelado horizontal ao lado."
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: "15rem", height: "auto" }}
						/>
						<h1 className="font-medium text-[#262625] text-2xl">
							Design por quem entende
						</h1>
						<p className="font-light text-[#262625] text-base mt-2 mb-2">
							Multiplique a potência do seu negócio com <br />
							um website que transmite o valor do seu <br />
							produto, focado em resultados!
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
