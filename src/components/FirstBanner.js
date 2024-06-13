import Image from "next/image";
import whitePenguin from "../../public/images/whitePenguin.png";
import ImagesCarousel from "./ImagesCarousel";

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
      const translatePercentage = (100 - percentage * 100) / distanceFactor;
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
