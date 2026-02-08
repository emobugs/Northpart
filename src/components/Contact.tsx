import React from "react";
import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
	const { t } = useTranslation();
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: 0.2 },
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
		},
	};

	return (
		<section
			id="contact"
			className="h-screen snap-start flex items-center py-16 px-6 border-t border-white/5 relative z-10 bg-white"
		>
			{/* <div className="h-20 md:h-28 flex-shrink-0" /> */}
			<div className="max-w-7xl mx-auto w-full relative">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={containerVariants}
					className="grid lg:grid-cols-2 gap-0 items-start"
				>
					{/* ЛЯВА КОЛОНА: ИНФОРМАЦИЯ */}
					<div className="space-y-3">
						<motion.div variants={itemVariants}>
							<h2 className="text-3xl md:text-4xl font-medium heading-primary tracking-tight mb-3">
								{t("contact.title")}
							</h2>
							<p className="text-slate-500 text-sm md:text-base max-w-md leading-relaxed">
								<p>{t("contact.subtitle")}</p>
							</p>
						</motion.div>

						{/* Компактни контакти - на мобилен са един до друг/под друг с малки икони */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-0">
							{[
								{
									href: "mailto:northpartbg@gmail.com",
									icon: "solar:letter-linear",
									label: t("contact.labels.email"),
									val: "northpartbg@gmail.com",
									color: "cyan",
								},
								{
									href: "https://wa.me/359892787845",
									icon: "logos:whatsapp-icon",
									label: t("contact.labels.technical"),
									val: "+359892787845",
									color: "green",
								},
								{
									href: "https://wa.me/4745021323",
									icon: "logos:whatsapp-icon",
									label: t("contact.labels.sales"),
									val: "+4745021323",
									color: "green",
								},
							].map((item, i) => (
								<motion.a
									key={i}
									variants={itemVariants}
									href={item.href}
									className="flex items-center gap-3 group p-3 rounded-xl hover:bg-slate-50 transition-colors"
								>
									<div
										className={`w-10 h-10 rounded-full bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-500 flex-shrink-0`}
									>
										<Icon icon={item.icon} width="20" />
									</div>
									<div className="min-w-0">
										<h4 className="text-slate-400 text-[9px] uppercase tracking-widest font-bold leading-none mb-1">
											{item.label}
										</h4>
										<p
											className={`text-slate-700 text-sm font-medium truncate 
											// ${item.label === "Email" ? "hover:text-cyan-500" : "hover:text-green-500"}`}
										>
											{item.val}
										</p>
									</div>
								</motion.a>
							))}
						</div>
					</div>

					{/* ДЯСНА КОЛОНА: ФОРМА (По-сбита) */}
					<motion.div
						variants={itemVariants}
						className="bg-slate-50/50 p-6 md:p-8 rounded-3xl border border-slate-100"
					>
						<form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-1">
									<label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold ml-1">
										{t("contact.labels.first_name")}
									</label>
									<input
										type="text"
										className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:border-cyan-500 transition-colors"
										placeholder={t("contact.placeholders.first")}
									/>
								</div>
								<div className="space-y-1">
									<label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold ml-1">
										{t("contact.labels.last_name")}
									</label>
									<input
										type="text"
										className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:border-cyan-500 transition-colors"
										placeholder={t("contact.placeholders.last")}
									/>
								</div>
							</div>

							<div className="space-y-1">
								<label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold ml-1">
									{t("contact.labels.email")}
								</label>
								<input
									type="email"
									className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:border-cyan-500 transition-colors"
									placeholder={t("contact.placeholders.email")}
								/>
							</div>

							<div className="space-y-1">
								<label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold ml-1">
									{t("contact.labels.message")}
								</label>
								<textarea
									className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:border-cyan-500 min-h-[80px] transition-colors resize-none"
									placeholder={t("contact.placeholders.message")}
								></textarea>
							</div>

							<motion.button
								whileHover={{ scale: 1.01 }}
								whileTap={{ scale: 0.99 }}
								className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl uppercase tracking-widest text-xs hover:bg-cyan-600 transition-all shadow-lg cursor-pointer"
							>
								{t("contact.send_btn")}
							</motion.button>
						</form>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
