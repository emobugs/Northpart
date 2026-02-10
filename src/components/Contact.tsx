import React from "react";
import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getContactItems } from "../constants";

const SERVICE_ID = "service_hifdqqc";
const TEMPLATE_ID = "template_1yft9yi";
const PUBLIC_KEY = "kdG_3cmBdAuzpN3ke";
emailjs.init(PUBLIC_KEY);

const Contact: React.FC = () => {
	const form = useRef<HTMLFormElement>(null);
	const { t } = useTranslation();

	/* COntact items */
	const contactItems = getContactItems(t);

	/* Контактна форма изпращане*/
	const [isSending, setIsSending] = React.useState(false);

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!form.current) return;

		setIsSending(true); // Започваме пращането

		emailjs
			.sendForm(SERVICE_ID, TEMPLATE_ID, form.current)
			.then(() => {
				alert(t("contact.success_msg"));
				form.current?.reset();
			})
			.catch((error) => {
				console.error("Error:", error);
				alert("Failed to send. Please try again.");
			})
			.finally(() => {
				setIsSending(false); // Спираме зареждането
			});
	};
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
			className="h-screen snap-start flex items-center px-6 border-t border-white/5 relative z-10 bg-white"
		>
			<div className="max-w-7xl mx-auto w-full relative">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={containerVariants}
					className="grid lg:grid-cols-2 gap-0 items-start"
				>
					{/* ЛЯВА КОЛОНА: ИНФОРМАЦИЯ */}
					<div className="space-y-3 m-2">
						<motion.div variants={itemVariants}>
							<h2 className="text-3xl md:text-4xl font-medium heading-primary tracking-tight mb-3">
								{t("contact.title")}
							</h2>
						</motion.div>

						{/* Контактни данни */}
						<div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-2">
							{contactItems.map((item, i) => (
								/* Контактни данни line */
								<motion.div
									key={i}
									variants={itemVariants}
									className="grid grid-cols-[60px_1fr] md:grid-cols-[1fr-auto] lg:grid-cols-[1fr-auto] items-center gap-5 group p-3 rounded-xl hover:bg-slate-50 transition-colors"
								>
									<h4 className="text-slate-400 text-[9px] uppercase tracking-widest font-bold leading-none mb-1">
										{item.label}
									</h4>
									<div className="grid grid-cols-[1fr_1fr] items-center gap-2 justify-center w-full md:w-auto">
										<span className="text-slate-700 font-medium text-sm">
											{item.val}
										</span>
										<div className="flex gap-1">
											{item.type === "email" ? (
												<motion.a
													aria-label={t("labels.email")}
													whileHover={{
														scale: 1.2,
														y: -2,
														filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.1)",
													}}
													whileTap={{
														scale: 1.2,
														y: -2,
														filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.1)",
													}}
													href={item.href}
													className="text-cyan-600 hover:text-cyan-500 transition-colors m-1"
												>
													{item.icon && (
														<FontAwesomeIcon
															icon={item.icon}
															size="lg"
														/>
													)}
												</motion.a>
											) : (
												item.links?.map((link, i) => (
													<motion.a
														aria-label={t(
															`labels.${link.title.toLowerCase()}`,
														)}
														key={i}
														href={link.href}
														whileHover={{
															scale: 1.3,
															y: -2,
															filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.1)",
														}}
														whileTap={{
															scale: 1.3,
															y: -2,
															filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.1)",
														}}
														className={`${link.textColor} transition-colors transition-all m-1`}
														title={link.title}
													>
														<FontAwesomeIcon
															icon={link.icon}
															size="lg"
														/>
													</motion.a>
												))
											)}
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					{/* ДЯСНА КОЛОНА: ФОРМА (По-сбита) */}
					<motion.div
						variants={itemVariants}
						className="bg-slate-50/50 p-6 md:p-8 rounded-3xl border border-slate-100"
					>
						<form className="space-y-2" ref={form} onSubmit={sendEmail}>
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-1">
									<label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold ml-1">
										{t("contact.labels.first_name")}
									</label>
									<input
										required
										name="first_name"
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
										required
										name="last_name"
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
									required
									name="email"
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
									required
									name="message"
									className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:border-cyan-500 min-h-[80px] transition-colors resize-none"
									placeholder={t("contact.placeholders.message")}
								></textarea>
							</div>

							<motion.button
								aria-label={t("contact.send_btn")}
								disabled={isSending}
								type="submit"
								whileHover={{ scale: 1.01 }}
								whileTap={{ scale: 0.99 }}
								className={`w-full font-bold py-4 rounded-xl uppercase tracking-widest text-xs transition-all shadow-lg ${
									isSending
										? "bg-slate-400 cursor-not-allowed"
										: "bg-slate-900 hover:bg-cyan-600 text-white cursor-pointer"
								}`}
							>
								{isSending ? "Sending..." : t("contact.send_btn")}
							</motion.button>
						</form>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
