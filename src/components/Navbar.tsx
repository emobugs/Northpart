import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

const Navbar: React.FC = () => {
	const { t, i18n } = useTranslation();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const menuItems = [
		{ id: "products", label: t("nav.products") },
		{ id: "logistics", label: t("nav.logistics") },
		{ id: "gallery", label: t("nav.gallery") },
		{ id: "contact", label: t("nav.contact") },
	];

	const languages = [
		{ code: "en", label: "EN" },
		{ code: "bg", label: "BG" },
		{ code: "de", label: "DE" },
		{ code: "ro", label: "RO" },
	];

	return (
		<nav className="fixed top-0 w-full z-50 border-b border-white/5 backdrop-blur-md">
			<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
				<a href="#" className="flex items-center gap-3 group">
					<div className="w-8 h-8 border border-black/20 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors duration-300">
						<span className="text-black font-medium text-lg">N</span>
					</div>
					<div className="flex flex-col">
						<span className="text-black tracking-[0.2em] text-sm font-semibold uppercase">
							Northpart
						</span>
						<span className="text-xs tracking-widest text-cyan-500 uppercase">
							EU Logistics
						</span>
					</div>
				</a>

				{/* Desktop Menu */}
				<div className="hidden md:flex items-center gap-8">
					{menuItems.map((item) => (
						<a
							key={item.id}
							href={`#${item.id}`}
							className="text-sm font-medium hover:text-black transition-colors"
						>
							{item.label}
						</a>
					))}
				</div>
				{/* language change */}
				<div className="hidden md:flex items-center gap-2 text-xs font-medium cursor-pointer hover:text-black transition-colors">
					<div className="flex gap-3 ml-6 border-l border-black/10 pl-6">
						{languages.map((lang) => (
							<button
								key={lang.code}
								onClick={() => i18n.changeLanguage(lang.code)}
								className={`text-[10px] font-bold tracking-tighter transition-all cursor-pointer ${
									i18n.language === lang.code
										? "text-cyan-500 scale-110"
										: "text-slate-400 hover:text-black"
								}`}
							>
								{lang.label}
							</button>
						))}
					</div>
					<Icon icon="solar:globe-linear" width="16" />
				</div>
				{/* Inquiry button */}
				<div className="hidden md:flex items-center gap-6">
					<a
						href="#contact"
						className="flex items-center gap-2 bg-white text-black px-4 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-cyan-50 transition-colors"
					>
						<span>{t("nav.inquire_btn")}</span>
						<Icon icon="solar:arrow-right-linear" width="16" />
					</a>
				</div>

				{/* Mobile Toggle */}
				{/* Mobile Toggle Button */}
				<button
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					className="md:hidden p-2 text-black cursor-pointer"
				>
					<Icon
						icon={
							isMobileMenuOpen
								? "solar:close-circle-linear"
								: "solar:hamburger-menu-linear"
						}
						width="28"
					/>
				</button>
				{/* Mobile Menu Overlay */}
				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							className="absolute top-20 left-0 w-full bg-white border-b border-black/5 p-6 flex flex-col gap-6 md:hidden shadow-xl z-40"
						>
							{menuItems.map((item) => (
								<a
									key={item.id}
									href={`#${item.id}`}
									onClick={() => setIsMobileMenuOpen(false)} // Затваря менюто при клик
									className="text-lg font-medium text-slate-900 hover:text-cyan-500 transition-colors"
								>
									{item.label}
								</a>
							))}

							<div className="pt-4 border-t border-black/5 flex items-center justify-between">
								<div className="flex gap-4">
									{languages.map((lang) => (
										<button
											key={lang.code}
											onClick={() => i18n.changeLanguage(lang.code)}
											className={`text-sm font-bold ${
												i18n.language === lang.code
													? "text-cyan-500"
													: "text-slate-400"
											}`}
										>
											{lang.label}
										</button>
									))}
								</div>
								<Icon
									icon="solar:globe-linear"
									width="20"
									className="text-slate-400"
								/>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</nav>
	);
};

export default Navbar;
