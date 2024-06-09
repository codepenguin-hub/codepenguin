import Image from "next/image";
import whitePenguin from "../../public/images/whitePenguin.png";
import { useState } from "react";

const imageArray = [
	{ src: "", alt: "1" },
	{ src: "", alt: "2" },
	{ src: "", alt: "3" },
	{ src: "", alt: "4" },
	{ src: "", alt: "5" },
];

const maxImagesShown = 2; // max amount of images shown on the sides of the center image (used with opacity to hide outrange images)
const distanceFactor = 1.5; // how LESS the images are moved from the center (used with translateX)
const percentages = [];

for (let i = 0; i <= maxImagesShown + 1; i++) {
	percentages.push((i / (maxImagesShown + 1)).toFixed(2));
}

percentages.reverse(); // change the array order

export default function FirstBanner() {
	const handleSetImages = (centerIndex) => {
		return imageArray.map((image, index) => {
			const percentageIndex = Math.abs(index - centerIndex);

			let percentage = 0;
			if (percentageIndex < percentages.length) {
				percentage = percentages[percentageIndex];
			}

			let transform = "translateX(0%) scale(1)";

			const direction = index - centerIndex; // almost a vector (has module and directions)
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
					zIndex: imageArray.length - Math.abs(centerIndex - index),
					transform,
					opacity: percentage,
					transition: "all 0.5s ease",
				},
			};
		});
	};

	const initialCenterIndex = Math.floor(imageArray.length / 2);
	const [images, setImages] = useState(handleSetImages(initialCenterIndex));

	return (
		<section className="h-[100vh] width-[100%] flex items-center justify-center flex-col">
			<nav>
				<Image src={whitePenguin} className="w-10" />
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
			<div className="flex justify-center items-center h-[450px] w-[50vw] relative ">
				{images.map((image, index) => {
					return (
						<div
							key={index}
							className="w-[70%] h-[100%] bg-slate-500 rounded-2xl absolute flex justify-center items-center cursor-pointer"
							style={image.style}
							onClick={() => {
								setImages(handleSetImages(index));
							}}
						>
							{image.alt}
						</div>
					);
				})}
			</div>
		</section>
	);
}
