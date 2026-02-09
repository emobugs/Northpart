import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logistics from "./components/Logistics";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Products from "./components/Products";
import "./index.css";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./i18n";
// Интерфейс за частиците в анимацията
interface Star {
	x: number;
	y: number;
	size: number;
	opacity: number;
}

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
	{
		/* gsap*/
	}
	const container = useRef(null);
	useGSAP(
		() => {
			const sections = gsap.utils.toArray(".snap-section");

			ScrollTrigger.create({
				trigger: container.current,
				start: "top top",
				end: "bottom bottom",
				snap: {
					snapTo: 1 / (sections.length - 1), // Автоматично изчислява точките на спиране
					duration: { min: 0.2, max: 0.8 }, // Колко бързо да „залепва“
					delay: 0.0, // Малко изчакване преди снапа
					ease: "power2.inOut", // Плавна крива на движение
				},
				fastScrollEnd: true,
			});
		},
		{ scope: container },
	);

	return (
		<div className="relative min-h-screen scroll-container">
			{/* Котва в самото начало */}
			<div id="pt-nav" className="absolute top-0 left-0 w-0 h-0"></div>

			{/* <PowerStream /> */}

			<Navbar />
			<div className="relative z-10 flex flex-col min-h-screen snap-y">
				<main ref={container}>
					<div className="snap-section">
						<Hero />
					</div>
					<div className="snap-section">
						<Products />
					</div>
					<div className="snap-section">
						<Logistics />
					</div>
					<div className="snap-section">
						<Gallery />
					</div>
					<div className="snap-section">
						<Contact />
					</div>
				</main>
			</div>
		</div>
	);
};

export default App;
