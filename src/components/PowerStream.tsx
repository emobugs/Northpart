import React, { useLayoutEffect, useRef } from "react";

const PowerStream: React.FC = () => {
	const pathRef = useRef<SVGPathElement>(null);
	const headRef = useRef<SVGCircleElement>(null);
	const svgRef = useRef<SVGSVGElement>(null);

	useLayoutEffect(() => {
		const updatePath = () => {
			// Маркерите, които дефинирахме в компонентите
			const pointIds = [
				"line-start",
				"line-products",
				"line-logistics",
				"pt-gallery",
				"line-contact",
				"line-end",
			];

			const points = pointIds
				.map((id) => document.getElementById(id))
				.filter((el): el is HTMLElement => el !== null)
				.map((el) => {
					const rect = el.getBoundingClientRect();
					return {
						// Добавяме офсет надясно (напр. 15% от ширината на екрана), за да не е в центъра
						x: rect.left + window.scrollX + window.innerWidth * 0.1,
						y: rect.top + window.scrollY,
					};
				});

			if (points.length < 2 || !pathRef.current || !svgRef.current) return;

			// Нагласяме SVG платното
			svgRef.current.style.height = `${document.documentElement.scrollHeight}px`;

			// Генериране на пътя с точни завои под 90 градуса
			let d = `M ${points[0].x} ${points[0].y}`;

			for (let i = 0; i < points.length - 1; i++) {
				const p1 = points[i];
				const p2 = points[i + 1];

				// "Чупката" се случва на 50% от разстоянието между двете секции
				const midY = p1.y + (p2.y - p1.y) * 0.5;

				// Логика за завой: Надолу -> Надясно/Наляво -> Надолу
				// За да е винаги "надясно" спрямо съдържанието, използваме координатите на маркерите
				d += ` L ${p1.x} ${midY} L ${p2.x} ${midY} L ${p2.x} ${p2.y}`;
			}

			pathRef.current.setAttribute("d", d);
			const length = pathRef.current.getTotalLength();
			pathRef.current.style.strokeDasharray = `${length}`;
		};

		const onScroll = () => {
			if (!pathRef.current || !headRef.current) return;
			const length = pathRef.current.getTotalLength();
			const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
			const progress = Math.max(0, Math.min(window.scrollY / scrollHeight, 1));

			// Синхронизираме дължината на линията със скрола
			const drawLength = length * progress;
			pathRef.current.style.strokeDashoffset = `${length - drawLength}`;

			try {
				const point = pathRef.current.getPointAtLength(drawLength);
				headRef.current.setAttribute("cx", `${point.x}`);
				headRef.current.setAttribute("cy", `${point.y}`);
				headRef.current.style.opacity = progress > 0.01 ? "1" : "0";
			} catch (e) {}
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", updatePath);
		const ro = new ResizeObserver(updatePath);
		ro.observe(document.body);

		setTimeout(updatePath, 400);

		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", updatePath);
			ro.disconnect();
		};
	}, []);

	return (
		<div className="absolute top-0 left-0 w-full pointer-events-none z-[5]">
			<svg ref={svgRef} className="w-full overflow-visible">
				<path
					ref={pathRef}
					fill="none"
					stroke="#22d3ee"
					strokeWidth="3" // Върната дебелина
					strokeLinecap="round"
					className="power-glow opacity-50" // opacity-30 я държи дискретна на заден план
					style={{ transition: "stroke-dashoffset 0.1s ease-out" }}
				/>
				<circle ref={headRef} r="4" fill="#fff" className="power-head-glow" />
			</svg>
		</div>
	);
};

export default PowerStream;
