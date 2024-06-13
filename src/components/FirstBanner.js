import Image from "next/image";
import whitePenguin from "../../public/images/whitePenguin.png";
import { useState, useRef } from "react";

const imageArray = [
	{ src: "", alt: "1" },
	{ src: "", alt: "2" },
	{ src: "", alt: "3" },
	{ src: "", alt: "4" },
	{ src: "", alt: "5" },
];

const maxImagesShown = 2; // max amount of images shown on the sides of the center image (used with opacity to hide outrange images)
let distanceFactor = 1.75; // how LESS the images are moved from the center (used with translateX)

if (typeof window !== "undefined") {
	const innerWidth = window?.innerWidth;
	if (innerWidth > 1280) {
		distanceFactor = 1.75;
	} else if (innerWidth > 824) {
		distanceFactor = 1.9;
	} else if (innerWidth > 600) {
		distanceFactor = 2.25;
	} else if (innerWidth > 500) {
		distanceFactor = 3;
	}
}

const percentages = [];

for (let i = 0; i <= maxImagesShown + 1; i++) {
	percentages.push((i / (maxImagesShown + 1)).toFixed(2));
}

percentages.reverse(); // change the array order

export default function FirstBanner() {
	const currentCenterIndex = useRef(Math.floor(imageArray.length / 2)); // can be float
	const prevCenterIndex = useRef(Math.floor(imageArray.length / 2)); // always integer

	const handleSelectImage = (imageIndex) => {
		currentCenterIndex.current = imageIndex; // save the current value to keep dragging momentum

		if (prevCenterIndex.current !== Math.round(imageIndex)) {
			setImages(handleSetImages(imageIndex));
			prevCenterIndex.current = Math.round(imageIndex);
		}
	};

	const handleSetImages = (centerIndex) => {
		return imageArray.map((image, index) => {
			const roundedCenterIndex = Math.round(centerIndex);
			const percentageIndex = Math.abs(index - roundedCenterIndex); // it can be a float number

			let percentage = 0;
			if (percentageIndex < percentages.length) {
				percentage = percentages[percentageIndex];
			}

			let transform = "translateX(0%) scale(1)";

			const direction = index - roundedCenterIndex; // almost a vector (has module and directions)
			const translatePercentage =
				(100 - percentage * 100) / distanceFactor;
			const scale = 1 - Math.abs(direction) * 0.1;

			if (direction > 0) {
				transform = `translateX(${translatePercentage}%) scale(${scale})`;
			} else if (direction < 0) {
				transform = `translateX(-${translatePercentage}%) scale(${scale})`;
			}

			return {
				...image,
				style: {
					zIndex:
						imageArray.length -
						Math.abs(roundedCenterIndex - index),
					transform,
					opacity: percentage,
					transition: "all 0.5s ease",
				},
			};
		});
	};

	const initialCenterIndex = Math.floor(imageArray.length / 2);
	const [images, setImages] = useState(handleSetImages(initialCenterIndex));
	const [isDragging, setIsDragging] = useState(false);
	const [dragOffset, setDragOffset] = useState(0);

	const handleMouseDown = (event) => {
		setIsDragging(true);
		setDragOffset(event.clientX || event.touches[0].clientX);
	};

	const handleMouseMove = (event) => {
		if (isDragging) {
			const deltaX = event.clientX
				? event.clientX - dragOffset
				: event.touches[0].clientX - dragOffset;
			const newCenterIndex = currentCenterIndex.current - deltaX / 200;
			const clampedNewCenterIndex = Math.max(
				0,
				Math.min(newCenterIndex, imageArray.length - 1)
			);
			handleSelectImage(clampedNewCenterIndex);
			setDragOffset(event.clientX || event.touches[0].clientX);
		}
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	return (
		<section className="h-[100vh] width-[100%] flex items-center justify-center flex-col bg-[#fafafa]">
			<div className="p-[20px] w-[100vw] h-[100vh] absolute z-[-1]">
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
					alt="image"
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
			<div
				className="p-[20px] overflow-hidden flex justify-center items-center min-[1280px]:h-[450px] min-[1024px]:h-[350px] min-[768px]:h-[300px] min-[640px]:h-[250px] h-[30vh] w-[100vw] relative"
				onMouseDown={handleMouseDown}
				onTouchStart={handleMouseDown}
				onMouseMove={handleMouseMove}
				onTouchMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp}
				onTouchEnd={handleMouseUp}
			>
				{images.map((image, index) => {
					return (
						<div
							key={index}
							className="aspect-video h-[100%] flex justify-center items-center cursor-pointer absolute select-none"
							onClick={() => {
								if (!isDragging) {
									handleSelectImage(index);
								}
							}}
							style={image.style}
						>
							<Image
								fill
								src="/images/teset.png"
								quality={100}
								className="rounded-2xl "
								draggable={false}
								alt={image.alt}
							/>
						</div>
					);
				})}
			</div>
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
