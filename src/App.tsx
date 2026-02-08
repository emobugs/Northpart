import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PowerStream from "./components/PowerStream";
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
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let animationId: number;

		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		window.addEventListener("resize", resize);
		resize();

		const stars: Star[] = Array.from({ length: 120 }, () => ({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			size: Math.random() * 1.5,
			opacity: Math.random(),
		}));

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			stars.forEach((star) => {
				ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
				ctx.beginPath();
				ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
				ctx.fill();
				star.opacity += (Math.random() - 0.5) * 0.05;
				if (star.opacity < 0) star.opacity = 0;
				if (star.opacity > 0.8) star.opacity = 0.8;
			});
			animationId = requestAnimationFrame(animate);
		};

		animate();
		return () => {
			window.removeEventListener("resize", resize);
			cancelAnimationFrame(animationId);
		};
	}, []);

	return (
		<div className="relative min-h-screen scroll-container">
			{/* Котва в самото начало */}
			<div id="pt-nav" className="absolute top-0 left-0 w-0 h-0"></div>

			<PowerStream />

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
				{/* <div id="line-end" className="absolute bottom-20 left-4 w-0 h-0"></div> */}
			</div>
		</div>
	);
};

export default App;
