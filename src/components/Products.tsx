import React from "react";
import { Icon } from "@iconify/react";

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
	return (
		<section id="products" className="py-24 px-6 relative z-10">
			<div id="line-products" className="absolute top-1/2 left-80 w-0 h-0"></div>
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
					<div>
						<h2 className="text-3xl font-medium text-white tracking-tight">
							Product Categories
						</h2>
						<p className="text-slate-400 mt-2 max-w-md">
							Engineered for reliability. Sourced for performance.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
					{categories.map((item, idx) => (
						<div
							key={idx}
							className={`group relative glass-panel border border-white/5 hover:border-cyan-900/50 p-8 transition-all duration-300 ${item.span || ""}`}
						>
							<div className="absolute top-8 right-8 text-slate-600 group-hover:text-cyan-500 transition-colors">
								<Icon icon={item.icon} width="32" />
							</div>
							<h3 className="text-lg font-medium text-white mt-8 mb-2">
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

							{/* <a
								href="#"
								className="inline-flex items-center text-xs font-semibold text-white uppercase tracking-wider group-hover:text-cyan-400 transition-colors"
							>
								Check Availability
							</a> */}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Products;
