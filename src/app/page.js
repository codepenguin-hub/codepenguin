"use client"; //don't remove this, it is here because Spline need it to work

import Image from "next/image";
import styles from "./page.module.css";
import Spline from "@splinetool/react-spline";

export default function Home() {
	return (
		<main className={styles.main} onScroll={(e) => handleScroll(e)}>
			<Spline scene="https://prod.spline.design/On96o4iM6mjO6Sa1/scene.splinecode" />
		</main>
	);
}
