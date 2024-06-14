import Link from "next/link";
import CustomImage from "../../components/CustomImage";

export default function Header() {
	return (
		<div className="flex max-[1024px]:top-8 bg-[#F3F4F6] pt-12 pl-8">
			<Link href="/">
				<CustomImage
					path="./images/defaultPenguin.png"
					alt="Imagem do logotipo da CodePenguin, um pinguim minimalista com a cor preta no seu corpo e laranja em suas patas e no seu bico."
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: "2.5rem", height: "auto" }}
				/>
			</Link>
		</div>
	);
}
