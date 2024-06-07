"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import FirstBanner from "../components/FirstBanner";
import Differences1 from "../components/Differences1";
import Differences2 from "../components/Differences2";
import Differences3 from "../components/Differences3";
import Header from "../components/Header";
import PageIndicator from "../components/PageIndicator";
import Spline from "@splinetool/react-spline";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
	const containerRef = useRef(null);
	const [currentPage, setCurrentPage] = useState(0);
	const previousPage = useRef(0);

	useEffect(() => {
		const sections = gsap.utils.toArray(containerRef.current.children);
		const trigger = gsap.to(sections, {
			yPercent: -100 * (sections.length - 1),
			ease: "none",
			scrollTrigger: {
				trigger: containerRef.current,
				pin: true,
				scrub: 0.5,
				snap: {
					snapTo: 1 / (sections.length - 1),
					duration: 0.1,
					ease: "power1.inOut",
				},
				onUpdate: (self) => {
					const newPage = Math.floor(
						self.progress * (sections.length - 1)
					);
					if (newPage != previousPage.current) {
						setCurrentPage(newPage);
					}
				},
				end: () =>
					`+=${
						containerRef.current.offsetHeight *
						(sections.length - 1)
					}`,
			},
		});

		return () => {
			trigger.kill();
		};
	}, []);

	useEffect(() => {
		previousPage.current = currentPage;
	}, [currentPage]);

	return (
		<main>
			<Spline
				scene="https://prod.spline.design/rPYOVvbIHObO9DJS/scene.splinecode"
				style={{ position: "absolute" }}
			/>
			<div className="relative">
				<div ref={containerRef} className="relative h-[100vh]">
					<FirstBanner />
					<Differences1 />
					<Differences2 />
					<Differences3 />
					<section className="h-[100vh] width-[100%] bg-[#f9f9f9] flex items-center justify-center">
						<h1>Panel 5</h1>
					</section>
					<section className="h-[100vh] width-[100%] flex items-center justify-center">
						<h1>Panel 6</h1>
					</section>
				</div>

				{currentPage !== 0 && (
					<div className="fixed bottom-[50%] right-0 transform -translate-x-1/2">
						<PageIndicator
							pageCount={6}
							currentPage={currentPage}
						/>
					</div>
				)}
			</div>
			<Header
				currentPage={currentPage}
				previousPage={previousPage}
				setCurrentPage={setCurrentPage}
			/>
		</main>
	);
};

export default Home;
