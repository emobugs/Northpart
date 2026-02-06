import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PowerStream from "./components/PowerStream";
import Logistics from "./components/Logistics";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Products from "./components/Products";
import ScrollProgress from "./components/ScrollProgress";
import "./index.css";
import "./App.css";

// Интерфейс за частиците в анимацията
interface Star {
	x: number;
	y: number;
	size: number;
	opacity: number;
}

const App: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
		<div className="relative min-h-screen bg-[#050505]">
			{/* Котва в самото начало */}
			<div id="pt-nav" className="absolute top-0 left-0 w-0 h-0"></div>

			<PowerStream />

			<div className="relative z-10 flex flex-col min-h-screen">
				<Navbar />
				<Hero />
				<Products />
				<Logistics />
				<Gallery />
				<div id="line-end" className="absolute bottom-20 left-4 w-0 h-0"></div>
				<Contact />

				{/* Котва в самия край за финалната точка на линията */}
				<footer className="relative">
					<div id="pt-footer" className="absolute bottom-0 left-0 w-0 h-0"></div>
					<div className="py-12 border-t border-white/5 bg-black/40 text-center">
						<p className="text-[10px] text-slate-600 uppercase tracking-widest">
							© 2026 NORTHPART LTD
						</p>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default App;
