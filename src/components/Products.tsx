import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Products: React.FC = () => {
	const { t } = useTranslation();
	const categories = [
		{ id: "ev", icon: "solar:electric-refueling-bold-duotone" },
		{ id: "hybrid", icon: "solar:Transmission-bold-duotone" },
		{ id: "lifepo4", icon: "solar:battery-charge-bold-duotone" },
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.6, // Закъснение между всяка карта
			},
		},
	};

	/* arrow left hide */
	const scrollRef = useRef(null);

	// Следим скрола вътре в конкретния контейнер
	const { scrollXProgress } = useScroll({
		container: scrollRef,
	});
	const opacity = useTransform(scrollXProgress, [0, 0.05], [1, 0]);

	const cardVariants: Variants = {
		hidden: {
			opacity: 0,
			y: -30,
			x: -400, // Започват доста по-отляво
			scale: 0.9,
			rotate: -2,
		},
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			rotate: 0,
			scale: 1,
			transition: {
				type: "spring",
				stiffness: 80,
				damping: 30,
				duration: 2,
			},
		},
	};
	return (
		<section id="products" className="py-24 relative z-10">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col justify-between md:px-16 md:pt-20 pt-10 gap-6 mx-auto text-center md:text-left">
					<h2 className="text-3xl font-medium heading-primary tracking-tight">
						{t("products.title")}
					</h2>
					<p className="text-slate-400 mt-2 max-w-lg">{t("products.subtitle")}</p>
				</div>

				{/* Картите container*/}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					className="flex overflow-x-auto snap-x snap-mandatory md:flex-none md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 px-15 py-10 xl:py-20 scrollbar-hide"
					ref={scrollRef}
				>
					<motion.div
						className="absolute top-1/2 translate-y-1/2 block md:hidden right-0 z-10 opacity-15"
						style={{ opacity }}
					>
						<FontAwesomeIcon icon={faCircleArrowLeft} size="4x" />
					</motion.div>
					{categories.map((item, idx) => {
						const zIndexValue = categories.length - idx;
						return (
							<motion.div
								key={idx}
								variants={cardVariants}
								whileHover={{ y: -10, scale: 1.02 }}
								style={{ zIndex: zIndexValue }}
								className={`shrink-0 w-[80vw] md:w-full md:shrink md:snap-align-none overflow-x-auto snap-center group relative card-glass border border-black/5 p-8`}
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
						);
					})}
				</motion.div>
			</div>
		</section>
	);
};

export default Products;
