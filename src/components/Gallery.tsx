import React from "react";
import { motion, type Variants } from "framer-motion";
import evModule from "../assets/batteries/teslay.jpg";
import lifeP04Cell from "../assets/batteries/lifeP04Cells.webp";
import cylinder from "../assets/batteries/lifepoCylinder.jpg";
import moduleBatteries from "../assets/batteries/module.jpg";
import diagram from "../assets/batteries/diagram.webp";

const Gallery: React.FC = () => {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5, // Децата ще се появяват едно след друго
			},
		},
	};
	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};
	return (
		<section id="gallery" className="py-24 px-6 glass-panel relative z-10 bg-black">
			<div className="max-w-7xl mx-auto relative">
				<div className="flex justify-between items-end mb-12">
					<h2 className="text-3xl font-medium text-white tracking-tight">
						Technical Showcase
					</h2>
				</div>

				{/*Gallery container  */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					className="grid grid-cols-2 md:grid-cols-4 gap-4 items-stretch"
				>
					{/* 1. ГЛАВЕН БЛОК (EV Module) */}
					<motion.div
						variants={itemVariants}
						className="col-span-2 row-span-2 relative group overflow-hidden border border-white/10 bg-[#111] min-h-[300px] md:min-h-[400px] rounded-xl"
					>
						<img
							src={evModule}
							className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
							alt="EV Module"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
						<div className="absolute bottom-6 left-6 z-20">
							<p className="text-white text-sm font-medium tracking-wide">
								High-Voltage EV Modules
							</p>
						</div>
					</motion.div>

					{/* 2. ГОРЕ ВЛЯВО (Сините батерии) */}
					<motion.div
						variants={itemVariants}
						className="aspect-square relative group overflow-hidden border border-white/10 bg-white flex items-center justify-center p-6 md:p-8 rounded-xl"
					>
						<img
							src={lifeP04Cell}
							className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
							alt="LifeP04 Cell"
						/>
					</motion.div>

					{/* 3. ГОРЕ ВДЯСНО (Техническа схема) - ЦЕНТРИРАНА */}
					<motion.div
						variants={itemVariants}
						className="aspect-square relative group overflow-hidden border border-white/10 bg-white flex items-center justify-center p-5 rounded-xl"
					>
						<img
							src={diagram}
							className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
							alt="Diagram"
						/>
					</motion.div>

					{/* 4. ДОЛУ ВЛЯВО (Стек модули) - ЦЕНТРИРАН */}
					<motion.div
						variants={itemVariants}
						className="aspect-square relative group overflow-hidden border border-white/10 bg-white flex items-center justify-center p-5 rounded-xl"
					>
						<img
							src={moduleBatteries}
							className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
							alt="Diagram"
						/>
					</motion.div>

					{/* 5. ДОЛУ ВДЯСНО (Цилиндри) */}
					<motion.div
						variants={itemVariants}
						className="aspect-square relative group overflow-hidden border border-white/10 bg-white flex items-center justify-center p-6 md:p-8 rounded-xl"
					>
						<img
							src={cylinder}
							className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
							alt="Cylindrical Cells"
						/>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Gallery;
