import { Poppins } from "next/font/google";
import "../styles/globals.css";
import Head from "next/head";

const poppins = Poppins({
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
			<Head>
				<link rel="icon" href="/icon.ico" sizes="any" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/images/icons/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/images/icons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/images/icons/favicon-16x16.png"
				/>
				<link rel="preload" href="/images/background.jpg" as="image" />
			</Head>
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
