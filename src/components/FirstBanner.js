import ImagesCarousel from "./ImagesCarousel";
import CustomImage from "./CustomImage";

export default function FirstBanner() {
	return (
		<section className="h-screen width-screen flex items-center justify-center flex-col bg-[#F3F4F6]">
			<div className="p-[25px] w-full h-full absolute z-[-1]">
				<CustomImage
					path="./images/background.jpg"
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
				<div className="absolute w-10 top-12 right-1/2 translate-x-1/2 ">
					<CustomImage
						path="./images/whitePenguin.png"
						sizes="100%"
						width={0}
						height={0}
						className="w-full h-[auto] object-contain"
						alt="Imagem minimalista de monotonalidade de um pinguim na cor branca, logo da CodePenguin."
						priority
					/>
				</div>
			</nav>
			<div className="flex items-center justify-center flex-col mt-5 mb-7">
				<h1 className="text-4xl text-white font-extralight mb-1 max-[750px]:w-text-center max-[750px]:text-3xl">
					Desenvolva seu site e
				</h1>
				<div className="bg-white px-10 py-1">
					<h1 className="text-4xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#A1A2F3] to-[#AFB0F4] tracking-[0.2em] max-[750px]:text-center max-[750px]:text-3xl">
						AUMENTE SEU ALCANCE!
					</h1>
				</div>
			</div>
			<ImagesCarousel />
			<div className="absolute bottom-[25px] animate-bounce w-[40px] h-[40px] pointer-events-none select-none">
				<div className="flex flex-col justify-center items-center">
					<CustomImage
						path="./images/arrow-down.svg"
						width={50}
						height={65}
						sizes={"100vw"}
						draggable={false}
						alt="Uma seta que aponta para baixo, indicando um caminho."
					/>
				</div>
			</div>
		</section>
	);
}
