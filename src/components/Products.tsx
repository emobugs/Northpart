import React from "react";
import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

interface Category {
	title: string;
	icon: string;
	desc: string;
	features: string[];
	span?: string;
}

const Products: React.FC = () => {
	const { t } = useTranslation();
	const categories = [
		{ id: "ev", icon: "solar:electric-refueling-bold-duotone" },
		{ id: "hybrid", icon: "solar:Transmission-bold-duotone" },
		{ id: "lifepo4", icon: "solar:battery-charge-bold-duotone" },
	];
	const cardVariants: Variants = {
		hidden: {
			opacity: 0,
			y: 20,
			borderColor: "rgba(255, 255, 255, 0.05)",
		},
		visible: {
			opacity: 1,
			y: 0,
			// Анимираме цвета на border-a: от сиво -> цианово -> обратно
			borderColor: [
				"rgba(255, 255, 255, 0.05)",
				"rgba(6, 182, 212, 0.4)",
				"rgba(255, 255, 255, 0.05)",
			],
			transition: {
				duration: 0.8,
				ease: "easeOut",
				// Светлинният импулс на бордюра се случва малко след появата
				borderColor: { delay: 0.3, duration: 1.2 },
			},
		},
	};
	return (
		<section id="products" className="py-24 px-6 relative z-10">
			<div id="line-products" className="absolute top-1/2 left-80 w-0 h-0"></div>
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
					<div>
						<h2 className="text-3xl font-medium heading-primary tracking-tight">
							{t("products.title")}
						</h2>
						<p className="text-slate-400 mt-2 max-w-md">{t("products.subtitle")}</p>
					</div>
				</div>

				<div className="flex overflow-x-auto snap-x snap-mandatory md:flex-none md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 px-15 py-20 -m-6 scrollbar-hide">
					{categories.map((item, idx) => (
						<motion.div
							initial={{
								opacity: 0.5,
								y: 0,
							}}
							whileInView={{ opacity: 1, y: -15, borderColor: "rgba(6,182,212,0.4)" }}
							whileHover={{
								y: -15,
								scale: 1.01,
								borderColor: "rgba(6, 182, 212, 0.8)",
								transition: { duration: 0.6, ease: "easeOut" },
							}}
							viewport={{ once: false, amount: 0.5 }}
							transition={{
								type: "spring",
								stiffness: 70,
								damping: 30,
								mass: 1,
								opacity: { duration: 0.4 },
								duration: 1,
								ease: "easeOut",
							}}
							variants={cardVariants}
							key={idx}
							className={`shrink-0 w-[80vw] md:w-full md:shrink md:snap-align-none snap-center group relative card-glass border border-black/5 p-8`}
						>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: [0, 1, 0.3] }} // Светва и изгасва
								viewport={{ once: false, amount: 0.6 }}
								transition={{ ease: "easeInOut" }}
								className="absolute inset-0 border border-cyan-500 rounded-[inherit] pointer-events-none z-0"
							/>
							<div className="absolute z-10 top-8 right-8 text-slate-600 group-hover:text-cyan-500 transition-colors">
								<Icon icon={item.icon} width="32" />
							</div>
							<h3 className="text-lg font-medium mt-8 mb-2 heading-primary">
								{t(`products.items.${item.id}.title`)}
							</h3>
							<p className="text-sm text-slate-500 mb-6 leading-relaxed">
								{t(`products.items.${item.id}.desc`)}
							</p>

							<ul className="space-y-2 mb-8">
								<li>{t(`products.items.${item.id}.f1`)}</li>
								<li>{t(`products.items.${item.id}.f2`)}</li>
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Products;
