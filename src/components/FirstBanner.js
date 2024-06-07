import Image from "next/image";
import whitePenguin from "../../public/images/whitePenguin.png";
import carouselTestSize from "../../public/images/carouselTestSize.png";

export default function FirstBanner() {
	return (
		<section className="h-[100vh] width-[100%] flex items-center justify-center flex-col">
			<nav>
				<Image src={whitePenguin} className="w-10" />
			</nav>
			<div className="flex items-center justify-center flex-col mt-10">
				<h1 className="text-4xl text-white font-light ">
					Desenvolva seu site e
				</h1>
				<div className="bg-white  px-7">
					<h1 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#A1A2F3] to-[#AFB0F4]">
						AUMENTE SEU ALCANCE!
					</h1>
				</div>
				<Image src={carouselTestSize} className="w-[50rem] mt-5" />
			</div>
		</section>
	);
}
