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
        <link rel="preload" href="/images/background.jpg" as="image" />
      </Head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
