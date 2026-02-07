import React from "react";
import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion";

interface Category {
	title: string;
	icon: string;
	desc: string;
	features: string[];
	span?: string;
}

const categories: Category[] = [
	{
		title: "EV Battery Modules",
		icon: "solar:electric-refueling-bold-duotone", // Обновен за по-плътен индустриален вид
		desc: "Tier-1 high-voltage modules for major EV platforms. Rigorously tested for SOH (State of Health) and internal resistance to ensure OEM-level performance.",
		features: ["NMC & NCA Chemistry", "400V - 800V Architecture"],
	},
	{
		title: "Hybrid (HEV/PHEV) Systems",
		icon: "solar:Transmission-bold-duotone", // По-техническа икона за хибридни системи
		desc: "Specialized inventory of replacement packs for hybrid vehicles. We provide certified high-drain solutions for Toyota, Lexus, and European PHEV models.",
		features: ["NiMH & Li-ion Packs", "Tested & Certified Grade A"],
	},
	{
		title: "LiFePO4 Industrial Cells",
		icon: "solar:battery-charge-bold-duotone",
		desc: "Safe, ultra-long-life Lithium Iron Phosphate solutions. Designed for high-cycle industrial applications, backup power, and heavy-duty machinery.",
		features: ["6000+ Charge Cycles", "Superior Thermal Stability"],
	},
];

const Products: React.FC = () => {
	const cardVariants: Variants = {
		hidden: {
			opacity: 0,
			y: 20,
			borderColor: "rgba(255, 255, 255, 0.05)",
		},
		visible: {
			opacity: 1,
			y: 0,
			// Анимираме цвета на бордюра: от сиво -> цианово -> обратно
			borderColor: [
				"rgba(255, 255, 255, 0.05)",
				"rgba(6, 182, 212, 0.4)",
				"rgba(255, 255, 255, 0.05)",
			],
			transition: {
				duration: 0.8,
				ease: "easeOut",
				// Светлинният импулс на бордюра се случва малко след появата
				borderColor: { delay: 0.3, duration: 1.2 },
			},
		},
	};
	return (
		<section id="products" className="py-24 px-6 relative z-10">
			<div id="line-products" className="absolute top-1/2 left-80 w-0 h-0"></div>
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
					<div>
						<h2 className="text-3xl font-medium heading-primary tracking-tight">
							Product Categories
						</h2>
						<p className="text-slate-400 mt-2 max-w-md">
							Engineered for reliability. Sourced for performance.
						</p>
					</div>
				</div>

				<div className="flex overflow-x-auto snap-x snap-mandatory md:flex-none md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 px-15 py-20 -m-6 scrollbar-hide">
					{categories.map((item, idx) => (
						<motion.div
							initial={{
								opacity: 0.5,
								y: 0,
							}}
							whileInView={{ opacity: 1, y: -15, borderColor: "rgba(6,182,212,0.4)" }}
							whileHover={{
								y: -15,
								scale: 1.01,
								borderColor: "rgba(6, 182, 212, 0.8)",
								transition: { duration: 0.6, ease: "easeOut" },
							}}
							viewport={{ once: false, amount: 0.5 }}
							transition={{
								type: "spring",
								stiffness: 70,
								damping: 30,
								mass: 1,
								opacity: { duration: 0.4 },
								duration: 1,
								ease: "easeOut",
							}}
							variants={cardVariants}
							key={idx}
							className={`shrink-0 w-[80vw] md:w-full md:shrink md:snap-align-none snap-center group relative card-glass border border-black/5 p-8`}
						>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: [0, 1, 0.3] }} // Светва и изгасва
								viewport={{ once: false, amount: 0.6 }}
								transition={{ ease: "easeInOut" }}
								// transition={{ delay: 0.5 + idx * 0.4, duration: 1.5 }}
								className="absolute inset-0 border border-cyan-500 rounded-[inherit] pointer-events-none z-0"
							/>
							<div className="absolute z-10 top-8 right-8 text-slate-600 group-hover:text-cyan-500 transition-colors">
								<Icon icon={item.icon} width="32" />
							</div>
							<h3 className="text-lg font-medium mt-8 mb-2 heading-primary">
								{item.title}
							</h3>
							<p className="text-sm text-slate-500 mb-6 leading-relaxed">
								{item.desc}
							</p>

							<ul className="space-y-2 mb-8">
								{item.features.map((feat, fIdx) => (
									<li
										key={fIdx}
										className="flex items-center gap-2 text-xs text-slate-400"
									>
										<Icon
											icon="solar:check-circle-linear"
											className="text-cyan-600"
										/>{" "}
										{feat}
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Products;
