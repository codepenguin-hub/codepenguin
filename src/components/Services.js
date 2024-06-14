import Image from "next/image";
import { Icon } from "@iconify/react";
import CustomImage from "./CustomImage";

export default function Services({
	color1,
	color2,
	upperTitle,
	img,
	title,
	txt1,
	txt2,
	txt3,
}) {
	return (
		<section className="h-[100vh] width-[100%] bg-[#fafafa]  flex justify-center items-center flex-col border-dashed border-2 border-b-[#eeeeee4d]">
			{upperTitle == true ? (
				<div className="flex items-center justify-center flex-col mt-8 max-[650px]:mt-12">
					<h1 className="text-3xl font-regular bg-clip-text  text-[#262625] text-center leading-normal">
						O que
						<b className="font-semibold text-[#7678ED]">
							{" "}
							desenvolvemos?
						</b>
					</h1>
				</div>
			) : null}
			<div className="flex justify-center m-12 gap-[5rem] items-center w-[65%] max-[650px]:w-[85%] bg">
				<div
					className={`bg-gradient-to-br from-[#8333b53b] to-[#7678ed7c] flex flex-row rounded-3xl gap-[3rem] px-10 border-2 border-slate-50 overflow-hidden shadow-lg shadow-slate-300 backdrop-blur-md max-[1024px]:flex-col max-[1024px]:w-[75%] max-[1024px]:gap-10 max-[650px]:w-full`}
				>
					<div className="w-[40%] max-[1024px]:hidden relative">
						<CustomImage
							src={img}
							sizes="100%"
							width={0}
							height={0}
							style={{ objectFit: "contain", width: "100%" }}
							alt="image"
						/>
					</div>
					<div className="flex flex-col items-start justify-center gap-7 py-[4rem] w-[60%] max-[1024px]:w-full ">
						<div className="flex flex-row items-center justify-center gap-5 ">
							<Icon
								icon="solar:map-arrow-right-bold-duotone"
								className="text-white text-4xl"
							/>

							{title}
						</div>
						<div className="flex flex-row items-center justify-center gap-3">
							<div className="p-[6px] h-[6px] rounded-full bg-gradient-to-b from-[white] to-[#7678ED] self-start"></div>
							{txt1}
						</div>
						<div className="flex flex-row items-center justify-center gap-3">
							<div className="p-[6px] h-[6px] rounded-full bg-gradient-to-b from-[white] to-[#7678ED] self-start"></div>
							{txt2}
						</div>
						<div className="flex flex-row items-center justify-center gap-3">
							<div className="p-[6px] h-[6px] rounded-full bg-gradient-to-b from-[white] to-[#7678ED] self-start"></div>
							{txt3}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
