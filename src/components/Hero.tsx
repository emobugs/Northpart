import React from "react";
import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

// modula control slide in

const heroContainerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.6, // По-голямо разстояние между заглавието и бутоните
			delayChildren: 0.4,
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, x: -20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
			ease: [0.16, 1, 0.3, 1], // Супер плавно спиране
		},
	},
};

const HeroVisual = ({ isMobile = false }) => {
	const { t } = useTranslation();

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: false, amount: 0.4 }}
			className={`relative w-full max-w-md aspect-square flex-col items-center justify-center ${isMobile ? "py-12" : ""}`}
		>
			{/* Glow */}
			<motion.div
				initial={{ opacity: 0, scale: 1 }}
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0, 0.5, 0],
				}}
				transition={{ delay: 1, duration: 5, repeat: Infinity, ease: "easeInOut" }}
				className="absolute inset-0 bg-cyan-500 rounded-full blur-[160px]"
			></motion.div>

			{/* Heading */}
			<div className="text-center mb-10 space-y-2">
				<h3 className="text-cyan-600 font-mono text-xs font-bold tracking-[0.2em] uppercase">
					{t("hero.visual.intel")}
				</h3>
				<h2 className="text-2xl lg:text-3xl font-medium text-slate-900 tracking-tight">
					{t("hero.visual.monitoring")}
					<br className="lg:hidden" /> {t("hero.visual.stock_status")}
				</h2>
			</div>

			{/* Cards container */}
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.4 }}
				animate={{ x: [0, -15, 0] }}
				transition={{ delay: 1, duration: 5, repeat: Infinity, ease: "easeInOut" }}
				className={`relative w-full max-w-md aspect-square grid grid-cols-2 gap-4 lg:gap-6 p-8 border border-white/5 overflow-visible backdrop-blur-sm ${isMobile ? "scale-105" : ""}`}
			>
				{/* Светкавица */}
				<motion.div
					whileHover={{ y: -5 }}
					className="flex flex-col card-glass border border-white/10 p-6 justify-between hover:border-cyan-500/30"
				>
					<Icon icon="solar:bolt-linear" className="text-cyan-400" width="32" />
					<div className="text-[10px] font-mono text-slate-500">MOD-HV-01</div>
				</motion.div>
				{/* Батерия */}
				<motion.div
					whileHover={{ y: -5 }}
					className=" border card-glass border border-white/10 p-6 flex flex-col justify-between hover:border-cyan-500/30"
				>
					<Icon icon="solar:battery-charge-linear" className="text-cyan-400" width="32" />
					<div className="text-[10px] font-mono text-slate-500">LFP-SYS-4</div>
				</motion.div>
				{/* Capacity */}
				<motion.div
					whileHover={{ y: -5 }}
					className="col-span-2 card-glass border border-white/10 hover:border-cyan-500/30 p-6 flex flex-col justify-between "
				>
					<div className="flex items-start justify-between">
						<Icon
							icon="solar:server-square-linear"
							className="text-slate-300"
							width="32"
						/>{" "}
						<span className="text-green-500 text-[10px] uppercase border border-green-900/50 bg-green-900/10 px-2 py-0.5 tracking-widest">
							In Stock
						</span>
					</div>
					<div className="mt-4 h-1 w-full bg-slate-800 overflow-hidden">
						<motion.div
							initial={{ width: 0 }}
							whileInView={{ width: "84%" }}
							transition={{ duration: 1.5, delay: 1 }}
							viewport={{ once: false }}
							className="bg-cyan-500 w-3/4 h-full"
						></motion.div>
					</div>
					<div className="mt-2 text-xs font-mono text-slate-400">
						{t("hero.visual.capacity")}: 84%
					</div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

const Hero: React.FC = () => {
	const { t } = useTranslation();
	return (
		<>
			<motion.section
				id="hero"
				variants={heroContainerVariants}
				initial="hidden"
				animate="visible"
				viewport={{ once: false, amount: 0.3 }}
				className="h-screen w-full flex items-center px-8 relative pt-10"
			>
				<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center wide-full relative z-10">
					<div className="space-y-8">
						<motion.div
							variants={itemVariants}
							className="md:inline-flex items-center hidden gap-2 border border-cyan-900/30 bg-cyan-950/10 px-3 py-1 text-cyan-400 text-xs font-medium tracking-wide rounded-full"
						>
							<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
							{t("hero.badge")}
						</motion.div>

						<motion.h1
							variants={itemVariants}
							className="text-4xl lg:text-6xl font-medium tracking-tight heading-primary leading-[1.1]"
						>
							{t("hero.title_top")} <br />
							<span className="tech-gradient-text">{t("hero.title_bottom")}</span>
						</motion.h1>

						<motion.p
							variants={itemVariants}
							className="text-lg text-slate-500 max-w-xl leading-relaxed"
						>
							{t("hero.subtitle")}
							<span className="var(--text--primary) ml-2">
								<br></br>
								{/* {t("hero.stock")} */}
							</span>
						</motion.p>

						<motion.div
							variants={itemVariants}
							className="flex flex-col sm:flex-row gap-4 pt-4"
						>
							{/* View inventory button */}
							<motion.a
								whileHover={{ scale: 1.02, borderRadius: "5px" }}
								whileTap={{ scale: 0.98 }}
								href="#products"
								className="flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3.5 text-md font-medium transition-all-200 shadow-[0_0_20px_-5px_rgba(8,145,178,0.4)]"
							>
								{t("hero.cta_inv")}{" "}
								<Icon icon="solar:box-minimalistic-linear" width="18" />
							</motion.a>
							{/* Inquiry button */}
							<motion.a
								href="#contact"
								className="flex items-center justify-center gap-3 border border-black/10 hover:border-cyan-400 text-black px-8 py-3.5 text-sm font-medium transition-all-400 backdrop-blur-lg bg-white/5"
							>
								{t("hero.cta_inq")}{" "}
								<Icon icon="solar:users-group-rounded-linear" width="18" />
							</motion.a>
						</motion.div>

						<motion.div
							variants={itemVariants}
							className="grid grid-cols-3 gap-4 pt-8 border-t border-white/5 text-center"
						>
							{[
								{ val: "250+", lab: t("hero.stock") },
								{ val: "24h", lab: t("hero.stats.dispatch") },
								{ val: "EU", lab: t("hero.stats.coverage") },
							].map((stat, i) => (
								<div key={i}>
									<div className="text-2xl font-semibold text-black">
										{stat.val}
									</div>
									<div className="text-xs text-slate-500 uppercase tracking-wider mt-1">
										{stat.lab}
									</div>
								</div>
							))}
						</motion.div>
					</div>

					{/* Battery Module Visual за десктоп*/}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={itemVariants}
						className="hidden lg:flex items-relative h-full w-full flex items-center justify-center"
					>
						<motion.div className="hidden lg:flex">
							<HeroVisual />
						</motion.div>
					</motion.div>
				</div>
			</motion.section>
			{/* За мобилен */}
		</>
	);
};

export default Hero;
