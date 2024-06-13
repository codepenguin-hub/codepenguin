import Image from "next/image";
import { Icon } from "@iconify/react";
import DifferencesVideo from "./DifferencesVideo";

export default function Differences2() {
	return (
		<section className="h-[100vh] width-[100%]  flex justify-center items-center  flex-col bg-[#F3F4F6]">
			<div className="flex justify-center items-center w-[75%] m-12 max-[1024px]:flex-col-reverse max-[1024px]:w-full max-[1024px]:gap-10">
				<DifferencesVideo src="/videos/project-example-car.mp4" />
				<div className="flex justify-center w-[50%] max-[1024px]:w-[80%] ">
					<div className="flex gap-3 flex-col ml-8">
						<Image
							src="/images/decoration2.png"
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: "15rem", height: "auto" }}
							alt="image"
						/>
						<h1 className="font-medium text-[#262625] text-2xl">
							Desenvolvimento no código
						</h1>
						<p className="font-light text-[#262625] text-base mt-2 mb-2 w-full">
							Utilizamos apenas tecnologias que visam a melhor
							performance e flexibilidade, permitindo que o
							projeto fique o mais próximo possível do que você
							deseja.
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
			</div>
		</section>
	);
}
