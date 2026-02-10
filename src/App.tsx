import React, { useRef } from "react";
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
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const App: React.FC = () => {
	const { t, i18n } = useTranslation();
	{
		/* gsap*/
	}
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
			<Helmet>
				<title>{t("seo.title")}</title>
				<meta name="description" content={t("seo.description")} />

				{/* Важно за Google: Указва текущия език на страницата */}
				<html lang={i18n.language} />

				{/* Open Graph тагове за социални мрежи */}
				<meta property="og:title" content={t("seo.title")} />
				<meta property="og:description" content={t("seo.description")} />
			</Helmet>
			<div className="relative min-h-screen scroll-container">
				{/* Котва в самото начало */}
				<div id="pt-nav" className="absolute top-0 left-0 w-0 h-0"></div>

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
		</>
	);
};

export default App;
