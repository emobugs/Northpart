import React from "react";
import { motion, type Variants } from "framer-motion";
import { GALLERY_ITEMS } from "../constants/galleryData";
import { main } from "framer-motion/m";

const Gallery: React.FC = () => {
	// Намираме главната снимка и останалите
	const mainItem = GALLERY_ITEMS.find((item) => item.isMain);
	const otherItems = GALLERY_ITEMS.filter((item) => !item.isMain);

	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2, // Децата ще се появяват едно след друго
			},
		},
	};
	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
		},
	};
	return (
		<section id="gallery" className="p-24 px-6 relative z-10 ">
			{/* Heading */}
			<div className="max-w-7xl mx-auto px-6 relative">
				<div className="flex justify-between items-end mb-12">
					<h2 className="heading-primary text-3xl font-medium tracking-tight">Gallery</h2>
				</div>
			</div>
			{/* Gallery container */}
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				className="
				/* Мобилен - хоризонтален Слайдер */
				flex overflow-x-auto snap-x snap-mandatory gap-4 pb-10 -mx-6 px-6 scrollbar-hide
				/* Десктоп */
				md:grid md:grid-cols-4 md:overflow-visible md:pb-0 md:mx-0 md:px-0 md:gap-4 md:items-stretch
				"
			>
				{/* Голямо изображение */}
				{mainItem && (
					<motion.div
						variants={itemVariants}
						className="
				/* Мобилен */
				shrink-0 w-[85vw] snap-center min-h-[400px]
				/* десктоп */
				card-glass md:w-auto md:shrink md:col-span-2 md:row-span-2 relative group overflow-hidden border border-white/10 rounded-xl bg-white
				"
					>
						<img
							src={mainItem.src}
							alt={mainItem.alt}
							className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
						/>
					</motion.div>
				)}
				{/* Всички останали изображеиния*/}
				{otherItems.map((img) => (
					<motion.div
						key={img.id}
						variants={itemVariants}
						className="
					/* Мобилен */
					shrink-0 w-[80vw] snap-center aspect-square
					/* desktop */
					md:w-auto md:shrink md:aspect-square
					relative card-glass group overflow-hidden border border-white/10 rounded-xl bg-white flex items-center justify-center p-6
					"
					>
						<img
							src={img.src}
							alt={img.alt}
							className="w-full h-full object-contain transition-transform duration-800 group-hover:scale-110"
						/>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default Gallery;
