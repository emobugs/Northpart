import "./index.css";
import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./i18n";
import { useTranslation } from "react-i18next";
import React, { useRef, useEffect, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import { ScrollTrigger } from "gsap/ScrollTrigger";

const Logistics = lazy(() => import("./components/Logistics"));
const Gallery = lazy(() => import("./components/Gallery"));
const Contact = lazy(() => import("./components/Contact"));
const Products = lazy(() => import("./components/Products"));

const App: React.FC = () => {
	const { t, i18n } = useTranslation();

	/* Промяна на мета данните според езика */
	useEffect(() => {
		document.title = t("seo.title");

		let metaDesc = document.querySelector('meta[name="description"]');
		if (!metaDesc) {
			metaDesc = document.createElement("meta");
			metaDesc.setAttribute("name", "description");
			document.head.appendChild(metaDesc);
		}
		metaDesc.setAttribute("content", t("seo.description"));

		document.documentElement.lang = i18n.language;
	}, [i18n.language, t]);

	/* gsap*/
	const container = useRef(null);
	useGSAP(
		() => {
			gsap.registerPlugin(ScrollTrigger);
			const sections = gsap.utils.toArray(".snap-section");

			ScrollTrigger.create({
				trigger: container.current,
				start: "top top",
				end: "bottom bottom",
				snap: {
					snapTo: 1 / (sections.length - 1), // Автоматично изчислява точките на спиране
					duration: { min: 0.2, max: 0.6 }, // Колко бързо да „залепва“
					delay: 0.1, // Малко изчакване преди снапа
					ease: "power2.inOut", // Плавна крива на движение
				},
				fastScrollEnd: true,
			});
			const timer = setTimeout(() => {
				ScrollTrigger.refresh();
			}, 100);
			return () => clearTimeout(timer);
		},
		{ scope: container },
	);
	return (
		<>
			<div className="relative min-h-screen scroll-container">
				{/* Котва в самото начало */}
				<div id="pt-nav" className="absolute top-0 left-0 w-0 h-0"></div>

				<Navbar />
				<div className="relative z-10 flex flex-col min-h-screen snap-y">
					<main ref={container}>
						<div className="snap-section">
							<Hero />
						</div>
						<Suspense fallback={<div>Loading...</div>}>
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
						</Suspense>
					</main>
				</div>
			</div>
		</>
	);
};

export default App;
