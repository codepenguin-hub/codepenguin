import React, { useEffect, useRef, useState } from "react";
import CustomImage from "./CustomImage";

const imageArray = [
	{
		path: "./images/site1.png",
		alt: "Exemplo de um site para Clínicas, minimalista, com cores claras para o fundo e os elementos e cores escuras (como o azul) para destacar textos e elementos que podem ser interagidos.",
	},
	{
		path: "./images/site2.png",
		alt: "Exemplo de um site de aluguel de Carros, minimalista, com tons de cinza para o fundo e o objeto abstrato, e branco para os textos, além de detacar partes com o vermelho que também se predomina no carro em destaque.",
	},
	{
		path: "./images/site3.png",
		alt: "Exemplo de um site portfolio com um fundo preto cheio de estrelas (como no espaço) e um texto ao centro 'O UNIVERSO DO DESENVOLVIMENTO WEB' e abaixo 'UMA JORNADA DE CONHECIMENTO E CRIATIVIDADE'",
	},
	{
		path: "./images/site4.png",
		alt: "Exemplo de um site de revendedora de carros onde, o mesmo contém predominantemente as cores azul escuro e branco que se alternam para formar os componentes, em certos pontos o branco é destaque e o azul é fundo e vice versa, na imagem tabém é possível visualizar um carro em destaque.",
	},
	{
		path: "./images/site5.png",
		alt: "Exemplo de um site de um advogado com uma foto do mesmo em destaque e ao lado as principais informações. O site contém tons de cinza predominantemente, alternando-se entre branco para fundo e cinza para destaque e vice versa.",
	},
	{
		path: "./images/site6.png",
		alt: "Exemplo de um site para supermercados, ao centro há um carrossel com alguns destaques. O site contém a cor roxa para destacar certos pontos e preto para o texto em geral, seu fundo é branco e existe outro fundo abstrato para destacar o carrossel.",
	},
	{
		path: "./images/site7.png",
		alt: "Exemplo de um site para orçamento de computadores, no fundo há um tom de roxo que varia em certos pontos, e formas abstratas que diminuem a monotonia da cor, ao centro há um computador branco e ao lado deste um texto com uma call to action para o orçamento. ",
	},
];

function generatePercentages(maxImagesShown = 2) {
	// maxImagesShow is th max amount of images shown on the sides of the central image (used with opacity to hide outrange images)
	const percentages = [];
	for (let i = 0; i <= maxImagesShown + 1; i++) {
		percentages.push((i / (maxImagesShown + 1)).toFixed(2));
	}
	percentages.reverse(); // change the array order

	return percentages;
}

export default () => {
	const percentages = useRef(generatePercentages(2));
	const distanceFactor = useRef(1.75); // how LESS the images are moved from the center (used with translateX)
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
			if (percentageIndex < percentages.current.length) {
				percentage = percentages.current[percentageIndex];
			}

			let transform = "translateX(0%) scale(1)";

			const direction = index - roundedCenterIndex; // almost a vector (has module and directions)
			const translatePercentage =
				(100 - percentage * 100) / distanceFactor.current;
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
	const [canClick, setCanClick] = useState(true);

	const handleMouseDown = (event) => {
		setIsDragging(true);
		setDragOffset(event.clientX || event.touches[0].clientX);
	};

	const handleMouseMove = (event) => {
		if (isDragging) {
			setCanClick(false);
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
		setTimeout(() => {
			setCanClick(true);
		}, 200);
	};

	useEffect(() => {
		const handleResize = () => {
			const innerWidth = window?.innerWidth;
			if (innerWidth > 1280) {
				distanceFactor.current = 1.75;
			} else if (innerWidth > 824) {
				distanceFactor.current = 2.2;
			} else if (innerWidth > 600) {
				distanceFactor.current = 3;
			} else if (innerWidth > 500) {
				distanceFactor.current = 4;
				percentages.current = generatePercentages(1);
			}
			setImages(handleSetImages(initialCenterIndex));
		};

		window.addEventListener("resize", handleResize);

		handleResize(); // call it on initial render

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div
			className="p-[20px] overflow-hidden flex justify-center items-center  h-[50vh] w-[100vw] relative max-[750px]:h-[22vh]"
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
							if (canClick) {
								handleSelectImage(index);
							}
						}}
						style={image.style}
					>
						<CustomImage
							sizes="100%"
							fill
							path={image.path}
							quality={100}
							className="rounded-xl border-solid border-slate-50 border-4 object-cover"
							draggable={false}
							alt={image.alt}
						/>
					</div>
				);
			})}
		</div>
	);
};
