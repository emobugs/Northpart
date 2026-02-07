import React from "react";
import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion";

const Contact: React.FC = () => {
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
			className="min-h-screen flex items-center py-16 px-6 border-t border-white/5 relative z-10 bg-white"
		>
			<div className="max-w-7xl mx-auto w-full relative">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={containerVariants}
					className="grid lg:grid-cols-2 gap-5 items-start"
				>
					{/* ЛЯВА КОЛОНА: ИНФОРМАЦИЯ */}
					<div className="space-y-8">
						<motion.div variants={itemVariants}>
							<h2 className="text-3xl md:text-4xl font-medium heading-primary tracking-tight mb-3">
								Contact Us
							</h2>
							<p className="text-slate-500 text-sm md:text-base max-w-md leading-relaxed">
								Direct wholesale pricing and technical support available upon
								inquiry.
							</p>
						</motion.div>

						{/* Компактни контакти - на мобилен са един до друг/под друг с малки икони */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1">
							{[
								{
									href: "mailto:northpartbg@gmail.com",
									icon: "solar:letter-linear",
									label: "Email",
									val: "northpartbg@gmail.com",
									color: "cyan",
								},
								{
									href: "https://wa.me/359892787845",
									icon: "logos:whatsapp-icon",
									label: "Technical",
									val: "+359892787845",
									color: "green",
								},
								{
									href: "https://wa.me/4745021323",
									icon: "logos:whatsapp-icon",
									label: "Sales",
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
										First Name
									</label>
									<input
										type="text"
										className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:border-cyan-500 transition-colors"
										placeholder="John"
									/>
								</div>
								<div className="space-y-1">
									<label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold ml-1">
										Last Name
									</label>
									<input
										type="text"
										className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:border-cyan-500 transition-colors"
										placeholder="Doe"
									/>
								</div>
							</div>

							<div className="space-y-1">
								<label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold ml-1">
									Email
								</label>
								<input
									type="email"
									className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:border-cyan-500 transition-colors"
									placeholder="john@example.com"
								/>
							</div>

							<div className="space-y-1">
								<label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold ml-1">
									Message
								</label>
								<textarea
									className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:border-cyan-500 min-h-[80px] transition-colors resize-none"
									placeholder="Your inquiry..."
								></textarea>
							</div>

							<motion.button
								whileHover={{ scale: 1.01 }}
								whileTap={{ scale: 0.99 }}
								className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl uppercase tracking-widest text-xs hover:bg-cyan-600 transition-all shadow-lg"
							>
								Send Enquiry
							</motion.button>
						</form>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
