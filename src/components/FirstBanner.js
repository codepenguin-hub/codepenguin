import Image from "next/image";
import whitePenguin from "../../public/images/whitePenguin.png";
import ImagesCarousel from "./ImagesCarousel";

export default function FirstBanner() {
	return (
		<section className="h-screen width-screen flex items-center justify-center flex-col bg-[#fafafa]">
			<div className="p-[20px] w-full h-full absolute z-[-1]">
				<Image
					src="/images/background.jpg"
					width={0}
					height={0}
					sizes="100vw"
					priority
					quality={100}
					draggable={false}
					alt="Uma imagem abstrata de ondas com um gradiente do azul para o branco."
					style={{
						width: "100%",
						height: "100%",
						borderRadius: "10px",
					}}
				/>
			</div>

			<nav className="select-none">
				<Image
					src={whitePenguin}
					className="w-10"
					alt="Imagem minimalista de monotonalidade de um pinguim na cor branca, logo da CodePenguin."
					priority
				/>
			</nav>
			<div className="flex items-center justify-center flex-col mt-10 mb-5">
				<h1 className="text-4xl text-white font-light ">
					Desenvolva seu site e
				</h1>
				<div className="bg-white  px-7">
					<h1 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#A1A2F3] to-[#AFB0F4]">
						AUMENTE SEU ALCANCE!
					</h1>
				</div>
			</div>
			<ImagesCarousel />
			<div className="absolute bottom-[55px] right-1/2 translate-x-1/2 animate-bounce w-[40px] h-[40px] pointer-events-none select-none">
				<div className="flex flex-col justify-center items-center">
					<p className="text-[#fafafa] text-2xl w-max">Scroll Down</p>
					<Image
						src="/images/arrow-down.svg"
						width={40}
						height={55}
						sizes={"100vw"}
						draggable={false}
						alt="Uma seta que aponta para baixo, indicando um caminho."
					/>
				</div>
			</div>
		</section>
	);
}
