import React from "react";
import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion";

const Hero: React.FC = () => {
	const heroContainerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2, // По-голямо разстояние между заглавието и бутоните
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				ease: [0.16, 1, 0.3, 1], // Супер плавно спиране
			},
		},
	};
	return (
		<motion.header
			variants={heroContainerVariants}
			initial="hidden"
			animate="visible"
			viewport={{ once: true, amount: 0.3 }}
			className="lg:pt-48 lg:pb-32 pt-32 px-6 relative border-b border-white/5"
		>
			<div id="line-start" className="absolute top-1/2 left-4 w-0 h-0"></div>
			<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
				<div className="space-y-8">
					<motion.div
						variants={itemVariants}
						className="inline-flex items-center gap-2 border border-cyan-900/30 bg-cyan-950/10 px-3 py-1 text-cyan-400 text-xs font-medium tracking-wide rounded-full"
					>
						<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
						Silistra Warehouse Operational
					</motion.div>

					<motion.h1
						variants={itemVariants}
						className="text-4xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]"
					>
						High-Performance EV <br />
						<span className="tech-gradient-text">& Hybrid Battery Systems</span>
					</motion.h1>

					<motion.p
						variants={itemVariants}
						className="text-lg text-slate-400 max-w-xl leading-relaxed"
					>
						Europe's strategic B2B partner for high-voltage EV modules and LiFePO4
						solutions
						<span className="text-white ml-2">
							<br></br>250+ units in stock
						</span>
					</motion.p>

					<motion.div
						variants={itemVariants}
						className="flex flex-col sm:flex-row gap-4 pt-4"
					>
						<motion.a
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							href="#products"
							className="flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3.5 text-md font-medium transition-all shadow-[0_0_20px_-5px_rgba(8,145,178,0.4)]"
						>
							View Inventory <Icon icon="solar:box-minimalistic-linear" width="18" />
						</motion.a>
						<motion.a
							whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
							href="#contact"
							className="flex items-center justify-center gap-3 border border-white/10 hover:border-white/30 text-white px-8 py-3.5 text-sm font-medium transition-all backdrop-blur-sm bg-white/5"
						>
							Wholesale Inquiry{" "}
							<Icon icon="solar:users-group-rounded-linear" width="18" />
						</motion.a>
					</motion.div>

					<motion.div
						variants={itemVariants}
						className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5"
					>
						{[
							{ val: "250+", lab: "Batteries SOLD" },
							{ val: "24h", lab: "Dispatch" },
							{ val: "EU", lab: "Coverage" },
						].map((stat, i) => (
							<div key={i}>
								<div className="text-2xl font-semibold text-white">{stat.val}</div>
								<div className="text-xs text-slate-500 uppercase tracking-wider mt-1">
									{stat.lab}
								</div>
							</div>
						))}
					</motion.div>
				</div>

				{/* Battery Module Visual */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={itemVariants}
					className="relative h-full min-h-[400px] w-full flex items-center justify-center"
				>
					<motion.div
						animate={{
							scale: [1, 1.2, 1],
							opacity: [0.5, 0.8, 0.5],
						}}
						transition={{ duration: 4, repeat: Infinity }}
						className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl"
					></motion.div>
					<motion.div
						animate={{ y: [0, -15, 0] }}
						transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
						className="relative w-full max-w-md aspect-square grid grid-cols-2 gap-4 p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm"
					>
						{/* Светкавица */}
						<motion.div
							whileHover={{ y: -5 }}
							className="flex flex-col bg-white/5 border border-white/10 p-6 justify-between hover:border-cyan-500/30 transition-colors"
						>
							<Icon icon="solar:bolt-linear" className="text-cyan-400" width="32" />
							<div className="text-[10px] font-mono text-slate-500">MOD-HV-01</div>
						</motion.div>
						{/* Батерия */}
						<motion.div
							whileHover={{ y: -5 }}
							className="bg-white/5 border border-white/10 p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-colors"
						>
							<Icon
								icon="solar:battery-charge-linear"
								className="text-cyan-400"
								width="32"
							/>
							<div className="text-[10px] font-mono text-slate-500">LFP-SYS-4</div>
						</motion.div>
						<motion.div
							whileHover={{ y: 5 }}
							className="col-span-2 bg-white/5 border border-white/10 p-6 flex flex-col justify-between"
						>
							<div className="flex items-start justify-between">
								<Icon
									icon="solar:server-square-linear"
									className="text-slate-300"
									width="32"
								/>
								<span className="text-green-500 text-[10px] uppercase border border-green-900/50 bg-green-900/10 px-2 py-0.5 tracking-widest">
									In Stock
								</span>
							</div>
							<div className="mt-4 h-1 w-full bg-slate-800 overflow-hidden">
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: "84%" }}
									transition={{ duration: 1.5, delay: 1 }}
									className="bg-cyan-500 w-3/4 h-full"
								></motion.div>
							</div>
							<div className="mt-2 text-xs font-mono text-slate-400">
								System Capacity: 84%
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</motion.header>
	);
};

export default Hero;
