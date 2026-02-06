import React from "react";
import { Icon } from "@iconify/react";

const Contact: React.FC = () => {
	return (
		<section
			id="contact"
			className="py-24 px-6 border-t border-white/5 glass-panel relative z-10"
		>
			<div id="line-contact" className="absolute top-[20%] left-[30%] w-0 h-0"></div>
			<div className="max-w-7xl mx-auto relative">
				<div id="pt-contact" className="absolute -left-8 top-12 w-0 h-0"></div>
				<div className="grid lg:grid-cols-2 gap-16">
					<div className="space-y-8">
						<h2 className="text-3xl font-medium text-white tracking-tight">
							Initiate Partnership
						</h2>
						<div className="space-y-6">
							<div className="flex items-start gap-4">
								<Icon
									icon="solar:letter-linear"
									className="text-cyan-500 mt-1"
									width="24"
								/>
								<div>
									<h4 className="text-white text-sm font-medium">Email Direct</h4>
									<p className="text-slate-400 text-sm">northpartbg@gmail.com</p>
								</div>
							</div>
						</div>
					</div>

					<div className="glass-panel p-8 md:p-10 relative">
						<form className="space-y-6">
							<div className="grid grid-cols-2 gap-6">
								<input
									type="text"
									placeholder="First Name"
									className="bg-transparent border-b border-white/20 py-2 outline-none text-white focus:border-cyan-500"
								/>
								<input
									type="text"
									placeholder="Last Name"
									className="bg-transparent border-b border-white/20 py-2 outline-none text-white focus:border-cyan-500"
								/>
							</div>
							<input
								type="email"
								placeholder="Email Address"
								className="w-full bg-transparent border-b border-white/20 py-2 outline-none text-white focus:border-cyan-500"
							/>
							<textarea
								placeholder="Message"
								className="w-full bg-transparent border-b border-white/20 py-2 outline-none text-white focus:border-cyan-500 min-h-[100px]"
							></textarea>
							<button className="w-full bg-white text-black font-bold py-4 uppercase tracking-widest hover:bg-cyan-400 transition-colors">
								Send Request
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
