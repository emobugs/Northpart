import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Navbar: React.FC = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
			<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
				<a href="#" className="flex items-center gap-3 group">
					<div className="w-8 h-8 border border-white/20 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors duration-300">
						<span className="text-white font-medium text-lg">N</span>
					</div>
					<div className="flex flex-col">
						<span className="text-white tracking-[0.2em] text-sm font-semibold uppercase">
							Northpart
						</span>
						<span className="text-xs tracking-widest text-cyan-500 uppercase">
							EU Logistics
						</span>
					</div>
				</a>

				{/* Desktop Menu */}
				<div className="hidden md:flex items-center gap-8">
					{["Products", "Logistics", "Gallery", "Contact"].map((item) => (
						<a
							key={item}
							href={`#${item.toLowerCase()}`}
							className="text-sm font-medium hover:text-white transition-colors"
						>
							{item}
						</a>
					))}
				</div>

				<div className="hidden md:flex items-center gap-6">
					<div className="flex items-center gap-2 text-xs font-medium cursor-pointer hover:text-white transition-colors">
						<Icon icon="solar:globe-linear" width="16" />
						<span>EN</span>
					</div>
					<a
						href="#contact"
						className="flex items-center gap-2 bg-white text-black px-4 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-cyan-50 transition-colors"
					>
						<span>Inquire Stock</span>
						<Icon icon="solar:arrow-right-linear" width="16" />
					</a>
				</div>

				{/* Mobile Toggle */}
				<button
					className="md:hidden text-white"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				>
					<Icon
						icon={
							isMobileMenuOpen
								? "solar:close-circle-linear"
								: "solar:hamburger-menu-linear"
						}
						width="24"
					/>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
