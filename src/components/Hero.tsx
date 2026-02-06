import React from "react";
import { Icon } from "@iconify/react";

const Hero: React.FC = () => {
	return (
		<header className="lg:pt-48 lg:pb-32 pt-32 px-6 relative border-b border-white/5">
			<div id="line-start" className="absolute top-1/2 left-4 w-0 h-0"></div>
			<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
				<div className="space-y-8">
					<div className="inline-flex items-center gap-2 border border-cyan-900/30 bg-cyan-950/10 px-3 py-1 text-cyan-400 text-xs font-medium tracking-wide rounded-full">
						<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
						Silistra Warehouse Operational
					</div>

					<h1 className="text-4xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]">
						High-Performance EV <br />
						<span className="tech-gradient-text">& Hybrid Battery Systems</span>
					</h1>

					<p className="text-lg text-slate-400 max-w-xl leading-relaxed">
						Europe's strategic B2B partner for high-voltage EV modules and LiFePO4
						solutions
						<span className="text-white ml-2">
							<br></br>250+ units in stock
						</span>
					</p>

					<div className="flex flex-col sm:flex-row gap-4 pt-4">
						<a
							href="#products"
							className="flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3.5 text-md font-medium transition-all shadow-[0_0_20px_-5px_rgba(8,145,178,0.4)]"
						>
							View Inventory <Icon icon="solar:box-minimalistic-linear" width="18" />
						</a>
						<a
							href="#contact"
							className="flex items-center justify-center gap-3 border border-white/10 hover:border-white/30 text-white px-8 py-3.5 text-sm font-medium transition-all backdrop-blur-sm bg-white/5"
						>
							Wholesale Inquiry{" "}
							<Icon icon="solar:users-group-rounded-linear" width="18" />
						</a>
					</div>

					<div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5">
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
					</div>
				</div>

				{/* Battery Module Visual */}
				<div className="relative h-full min-h-[400px] w-full flex items-center justify-center">
					<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
					<div className="relative w-full max-w-md aspect-square grid grid-cols-2 gap-4 p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm">
						<div className="flex flex-col bg-white/5 border border-white/10 p-6 justify-between hover:border-cyan-500/30 transition-colors">
							<Icon icon="solar:bolt-linear" className="text-cyan-400" width="32" />
							<div className="text-[10px] font-mono text-slate-500">MOD-HV-01</div>
						</div>
						<div className="bg-white/5 border border-white/10 p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-colors">
							<Icon
								icon="solar:battery-charge-linear"
								className="text-cyan-400"
								width="32"
							/>
							<div className="text-[10px] font-mono text-slate-500">LFP-SYS-4</div>
						</div>
						<div className="col-span-2 bg-white/5 border border-white/10 p-6 flex flex-col justify-between">
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
								<div className="bg-cyan-500 w-3/4 h-full"></div>
							</div>
							<div className="mt-2 text-xs font-mono text-slate-400">
								System Capacity: 84%
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Hero;
