import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
	title: "Code Penguin",
	description: "Desenvolvimento WEB é com a gente!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={barlow.className}>{children}</body>
		</html>
	);
}
