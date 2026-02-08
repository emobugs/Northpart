import React from "react";
import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

const Logistics: React.FC = () => {
	const { t } = useTranslation();
	const logisticsContainerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 1.6,
				staggerChildren: 0.35, // По-голямо разстояние между заглавието и бутоните
				delayChildren: 0.5,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.7,
				ease: "easeOut", // Супер плавно спиране
			},
		},
	};
	return (
		<section
			id="logistics"
			className="py-24 px-6 border-y border-white/5  relative z-10 glass-panel"
		>
			<div id="line-logistics" className="absolute top-90 right-80 w-0 h-0"></div>
			<div className="mx-auto grid lg:grid-cols-2 gap-16 items-center relative">
				<div className="order-2 lg:order-1 relative">
					<div className="aspect-video w-full border border-white/10 bg-[#0c0c0c] relative overflow-hidden flex items-center justify-center">
						<div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
						<div className="relative z-10 flex flex-col items-center">
							<div className="w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_20px_2px_rgba(6,182,212,0.6)] animate-pulse"></div>
							<div className="mt-4 px-4 py-2 bg-slate-900/90 backdrop-blur border border-white/10 text-xs text-white">
								{t("logistics.hub")}
							</div>
						</div>
						<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
							<line
								x1="50%"
								y1="50%"
								x2="20%"
								y2="30%"
								stroke="white"
								strokeWidth="1"
								strokeDasharray="4 4"
							></line>
							<line
								x1="50%"
								y1="50%"
								x2="80%"
								y2="20%"
								stroke="white"
								strokeWidth="1"
								strokeDasharray="4 4"
							></line>
							<line
								x1="50%"
								y1="50%"
								x2="30%"
								y2="80%"
								stroke="white"
								strokeWidth="1"
								strokeDasharray="4 4"
							></line>
						</svg>
					</div>
				</div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.6 }}
					variants={logisticsContainerVariants}
					className="order-1 lg:order-2"
				>
					<div className="flex items-center gap-3 mb-6">
						<div className="h-px w-8 bg-cyan-600"></div>
						<span className="text-xs uppercase tracking-widest text-cyan-500 font-medium">
							{t("logistics.label")}
						</span>
					</div>

					{/* надписа с линията */}
					<motion.h2
						variants={itemVariants}
						className="text-3xl lg:text-4xl font-medium text-black tracking-tight mb-6"
					>
						{t("logistics.title")}
					</motion.h2>
					<motion.p
						variants={itemVariants}
						className="text-slate-400 leading-relaxed mb-8"
					>
						{t("logistics.description")}
					</motion.p>
					<div className="space-y-6">
						<motion.div variants={itemVariants} className="flex gap-4">
							<div className="w-10 h-10 shrink-0 border border-white/10 bg-white/5 flex items-center justify-center text-cyan-400">
								<Icon icon="solar:delivery-linear" width="20" />
							</div>
							<div>
								<h4 className="text-black font-medium text-sm">
									{t("logistics.feature_title")}
								</h4>
								<p className="text-sm text-slate-500 mt-1">
									{t("logistics.feature_desc")}
								</p>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Logistics;
