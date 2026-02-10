import { useEffect, useState, useRef } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { GALLERY_ITEMS, type GalleryItem } from "../constants/galleryData";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const Gallery: React.FC = () => {
	const { t, i18n } = useTranslation();
	const currentLang = i18n.language as "en" | "bg" | "de" | "ro";
	{
		/*Init scroll control and function */
	}
	const scrollRef = useRef<HTMLDivElement>(null);
	const [canScroll, setCanScroll] = useState({ left: false, right: false });

	/*Галерия  */
	/*Проверка за ширината */
	const checkScroll = () => {
		if (scrollRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
			setCanScroll({
				left: scrollLeft > 10, // Има ли съдържание наляво
				right: scrollLeft + clientWidth < scrollWidth - 10, // Има ли надясно
			});
		}
	};

	const scroll = (direction: "left" | "right") => {
		if (scrollRef.current) {
			const containerWidth = scrollRef.current.offsetWidth;
			const scrollAmount =
				direction === "left" ? -containerWidth * 0.6 : containerWidth * 0.6;

			scrollRef.current.scrollBy({
				left: scrollAmount,
				behavior: "smooth",
			});
		}
	};

	/*Проверка при промяна или скрол на галерията */
	useEffect(() => {
		const node = scrollRef.current;
		if (node) {
			checkScroll();
			node.addEventListener("scroll", checkScroll);
			window.addEventListener("resize", checkScroll);

			// Малък setTimeout, за да изчакаме рендирането на изображенията
			const timeout = setTimeout(checkScroll, 500);

			return () => {
				node.removeEventListener("scroll", checkScroll);
				window.removeEventListener("resize", checkScroll);
				clearTimeout(timeout);
			};
		}
	}, [GALLERY_ITEMS]); // проверяване, ако се добавят нови снимки

	const [selectedImg, setSelectedImg] = useState<GalleryItem | null>(null);
	useEffect(() => {
		if (selectedImg) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [selectedImg]);

	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2, // Децата ще се появяват едно след друго
			},
		},
	};

	return (
		<section
			id="gallery"
			className="py-8 pt-20 justify-center relative z-10 overflow-x-hidden h-screen w-full snap-start"
		>
			<div className="h-15 md:h-28 flex-shrink-0 md:hidden" />
			{/* Heading */}
			<div className="max-w-7xl mx-auto px-6 relative">
				<div className="flex justify-between items-end">
					<h2 className="heading-primary text-3xl font-medium tracking-tight py-6 lg:pl-10 lg:pt-20">
						{t("gallery.title")}
					</h2>
				</div>
			</div>

			{/* Стрелки */}
			<div className="relative flex-1 max-w-7xl mx-auto px-6 group">
				{/* СТРЕЛКА НАЛЯВО */}
				<button
					onClick={() => scroll("left")}
					aria-label="Button left"
					style={{
						opacity: canScroll.left ? 1 : 0,
						pointerEvents: canScroll.left ? "auto" : "none",
					}}
					className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-30  md:flex items-center justify-center p-4 bg-cyan-300/20 md:bg-cyan-300/40 backdrop-blur-md border border-white/20 rounded-full text-white md:hover:bg-cyan-500/60 transition-all duration-300 shadow-xl"
				>
					<Icon icon="solar:alt-arrow-left-linear" width="28" />
				</button>

				{/* СТРЕЛКА НАДЯСНО */}
				<button
					onClick={() => scroll("right")}
					aria-label="Button right"
					style={{
						opacity: canScroll.right ? 1 : 0,
						pointerEvents: canScroll.right ? "auto" : "none",
					}}
					className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-30  md:flex items-center justify-center p-4 bg-cyan-300/20 md:bg-cyan-300/40 backdrop-blur-md border border-white/20 rounded-full text-white md:hover:bg-cyan-500/60 transition-all duration-300 shadow-xl"
				>
					<Icon icon="solar:alt-arrow-right-linear" width="28" />
				</button>

				{/* САМАТА ГАЛЕРИЯ */}
				<motion.div
					ref={scrollRef}
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					className="
				/* Мобилен - хоризонтален Слайдер */
				flex md:grid overflow-x-auto snap-x snap-mandatory gap-4 pb-10 -mx-6 px-6 no-scrollbar 
				/* Десктоп */
				md:grid-flow-col md:grid-rows-[300px_300px] md:auto-cols-[22%] md:mx-0 md:p-10 md:gap-4 md:items-stretch md:overflow-x-auto
				"
				>
					{/* Генериране на изображенията от масива */}
					{GALLERY_ITEMS.map((item) => (
						<motion.div
							key={item.id}
							layoutId={`img-${item.id}`} // плавен преход
							onClick={() => setSelectedImg(item)}
							className={`flex flex-col justify-content:space-around  shrink-0 snap-center relative group overflow-hidden border border-white/10 card-glass rounded-xl cursor-pointer

                                ${item.isMain ? "w-[85vw] min-h-[400px]" : "w-[80vw] aspect-square"}
								md:w-full md:min-h-0
								${item.isMain ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"}
								`}
						>
							<img
								src={item.src}
								className="w-full h-full object-cover"
								alt={item.translations[currentLang]?.title}
							/>
							{/* <div className=" pb-2 z-20 translate-y-2 hover:translate-y-0 transition-transform duration-500"> */}
							<div className="flex p-4 items-center justify-center h-[80px] text-center">
								<h3 className="text-md  md:text-base font-medium text-black mb-2 text-slate-800 leading-tight">
									{item.translations[currentLang]?.title}
								</h3>
							</div>
							{/* </div> */}
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* modal */}
			<AnimatePresence>
				{selectedImg && (
					<div className="fixed 0 inset-0 z-[999] flex items-center justify-center p-4 md:p-10 lg:p-12 overflow-y-auto">
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setSelectedImg(null)}
							className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
						/>
						{/* Content Card */}
						<motion.div
							layoutId={`img-${selectedImg.id}`}
							/* Фиксираме височината на 80% от екрана и забраняваме външния скрол */
							className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:grid md:grid-cols-2 h-[85vh] md:h-[70vh]"
						>
							{/* ЛЯВА СТРАНА: Изображение - заема цялото пространство */}
							<div className="relative bg-slate-50 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-100 h-1/2 md:h-full overflow-hidden">
								<img
									src={selectedImg.src}
									alt={selectedImg.alt}
									className="w-full h-full object-contain p-6 md:p-12 drop-shadow-xl"
								/>
							</div>

							{/* ДЯСНА СТРАНА: Текст - СКРОЛАБЪЛ */}
							<div className="flex flex-col h-1/2 md:h-full bg-white relative min-h-0">
								{/* Бутон за затваряне - фиксиран горе вдясно на текста */}
								<button
									aria-label="Close image button"
									onClick={() => setSelectedImg(null)}
									className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors z-50 bg-white/80 backdrop-blur-sm cursor-pointer"
								>
									<Icon
										icon="solar:close-circle-linear"
										width="28"
										className="text-slate-400"
									/>
								</button>

								{/* Скролираща зона за текста */}
								<div className="p-8 md:p-12 overflow-y-auto custom-scrollbar h-full overscroll-contain">
									<h3 className="text-lg md:text-3xl font-semibold text-slate-900 mb-4 pr-8">
										{selectedImg.translations[currentLang]?.title}
									</h3>

									<div className="w-12 h-1.5 bg-cyan-500 mb-8 rounded-full" />

									<div className="prose prose-slate max-w-none">
										<p className="text-slate-600 leading-relaxed text-lg mb-8">
											{selectedImg.translations[currentLang]?.desc}
										</p>
									</div>

									{/* Фиксиран долен панел вътре в скрола за статус */}
									{/* <div className="sticky bottom-0 pt-10 mt-auto bg-gradient-to-t from-white via-white to-transparent">
										<div className="grid grid-cols-2 gap-4">
											<div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
												<p className="text-[10px] text-slate-400 uppercase font-black mb-1">
													{t("gallery.grade_label")}
												</p>
												<p className="text-emerald-600 font-bold">
													{t("gallery.automotive")}
												</p>
											</div>
											<div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
												<p className="text-[10px] text-slate-400 uppercase font-black mb-1">
													{t("gallery.stock_label")}
												</p>
												<p className="text-slate-700 font-bold">
													{t("gallery.available")}
												</p>
											</div>
										</div>
									</div> */}
								</div>
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default Gallery;
