import React from "react";
import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion";

const Contact: React.FC = () => {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3, // По-голямо разстояние между заглавието и бутоните
				delayChildren: 0.4,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1.4,
				ease: [0.16, 1, 0.3, 1], // Супер плавно спиране
			},
		},
	};
	return (
		<section id="contact" className="py-24 px-6 border-t border-white/5 relative z-10 bg-black">
			<div className="max-w-7xl mx-auto relative">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={containerVariants} // Използваме твоя диригент за stagger
					className="grid lg:grid-cols-2 gap-16 items-start"
				>
					{/* ЛЯВА КОЛОНА: ИНФОРМАЦИЯ */}
					<div className="space-y-12">
						<motion.div variants={itemVariants}>
							<h2 className="text-4xl font-medium text-white tracking-tight mb-4">
								Contact Us
							</h2>
							<p className="text-slate-400 text-lg max-w-md">
								Our technical team usually responds within 2 business hours. Direct
								wholesale pricing available upon inquiry.
							</p>
						</motion.div>

						<div className="space-y-8">
							{/* Email Direct */}
							<motion.a
								variants={itemVariants}
								href="mailto:northpartbg@gmail.com"
								className="flex items-center gap-5 group"
							>
								<div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
									<Icon icon="solar:letter-linear" width="24" />
								</div>
								<div>
									<h4 className="text-slate-500 text-xs uppercase tracking-[0.2em] font-bold">
										Email Direct
									</h4>
									<p className="text-white text-lg font-medium group-hover:text-cyan-400 transition-colors">
										northpartbg@gmail.com
									</p>
								</div>
							</motion.a>

							{/* WhatsApp 1 - Technical */}
							<motion.a
								variants={itemVariants}
								href="https://wa.me/359892787845"
								target="_blank"
								className="flex items-center gap-5 group"
							>
								<div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
									<Icon icon="logos:whatsapp-icon" width="24" />
								</div>
								<div>
									<h4 className="text-slate-500 text-xs uppercase tracking-[0.2em] font-bold">
										Technical Support
									</h4>
									<p className="text-white text-lg font-medium group-hover:text-green-400 transition-colors">
										+359892787845
									</p>
								</div>
							</motion.a>

							{/* WhatsApp 2 - Sales */}
							<motion.a
								variants={itemVariants}
								href="https://wa.me/4745021323"
								target="_blank"
								className="flex items-center gap-5 group"
							>
								<div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
									<Icon icon="logos:whatsapp-icon" width="24" />
								</div>
								<div>
									<h4 className="text-slate-500 text-xs uppercase tracking-[0.2em] font-bold">
										Sales & Logistics
									</h4>
									<p className="text-white text-lg font-medium group-hover:text-green-400 transition-colors">
										+4745021323
									</p>
								</div>
							</motion.a>
						</div>
					</div>

					{/* ДЯСНА КОЛОНА: ФОРМА */}
					<motion.div
						variants={itemVariants}
						className="glass-panel p-8 md:p-12 relative border border-white/5 bg-white/[0.02]"
					>
						<form className="space-y-8">
							<div className="grid grid-cols-2 gap-8">
								<div className="space-y-2">
									<label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
										First Name
									</label>
									<input
										type="text"
										className="w-full bg-transparent border-b border-white/10 py-2 outline-none text-white focus:border-cyan-500 transition-colors"
									/>
								</div>
								<div className="space-y-2">
									<label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
										Last Name
									</label>
									<input
										type="text"
										className="w-full bg-transparent border-b border-white/10 py-2 outline-none text-white focus:border-cyan-500 transition-colors"
									/>
								</div>
							</div>

							<div className="space-y-2">
								<label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
									Email Address
								</label>
								<input
									type="email"
									className="w-full bg-transparent border-b border-white/10 py-2 outline-none text-white focus:border-cyan-500 transition-colors"
								/>
							</div>

							<div className="space-y-2">
								<label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
									Your Message
								</label>
								<textarea className="w-full bg-transparent border-b border-white/10 py-2 outline-none text-white focus:border-cyan-500 min-h-[120px] transition-colors resize-none"></textarea>
							</div>

							<motion.button
								whileHover={{ scale: 1.01 }}
								whileTap={{ scale: 0.99 }}
								className="w-full bg-cyan-500 text-white font-bold py-5 uppercase tracking-[0.2em] text-sm hover:bg-cyan-400 transition-all shadow-[0_20px_40px_-15px_rgba(6,182,212,0.3)]"
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
