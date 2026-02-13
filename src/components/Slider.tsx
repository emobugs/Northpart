import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/effect-fade";

import img1 from "../assets/images/slider/ev.webp";
import img2 from "../assets/images/slider/hybrid.webp";
import img3 from "../assets/images/slider/plugin.webp";
import img4 from "../assets/images/slider/solar.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const Slider = () => {
	const { t } = useTranslation();

	// 1. Взимаме преводите и изрично ги третираме като масив
	const slidesData = t("hero.slides", { returnObjects: true });
	const commonCta = t("hero.common.cta");

	const finalSlides = useMemo(() => {
		// Проверка дали преводите са заредени и са масив
		if (!Array.isArray(slidesData)) return [];

		const images = [img1, img2, img3, img4];
		return slidesData
			.map((slide, index) => ({
				...slide,
				img: images[index],
			}))
			.sort(() => Math.random() - 0.5);
	}, [slidesData]);

	// 2. Анимация за текстовете (Stagger ефект)
	const onSlideChange = (swiper: SwiperType) => {
		const activeSlide = swiper.slides[swiper.activeIndex];
		const texts = activeSlide.querySelectorAll(".animate-text");

		gsap.set(texts, { opacity: 0, y: 40 });
		gsap.to(texts, {
			opacity: 1,
			y: 0,
			duration: 0.8,
			stagger: 0.3,
			ease: "EaseInOut",
			delay: 0.2,
		});
	};

	// 3. GSAP Анимация за панорамно движение (само мобилен)
	useGSAP(() => {
		if (finalSlides.length === 0) return;
		const mm = gsap.matchMedia();

		mm.add("(max-width: 768px)", () => {
			gsap.set(".hero-img", { scale: 1.7 });
			gsap.fromTo(
				".hero-img",
				{ xPercent: -25 },
				{
					xPercent: 25,
					duration: 12,
					ease: "sine.inOut",
					repeat: -1,
					yoyo: true,
				},
			).progress(0.5);
		});

		mm.add("(min-width: 769px)", () => {
			gsap.set(".hero-img", { xPercent: 0, scale: 1.1 });
		});

		return () => mm.revert();
	}, [finalSlides]); // Рестартираме при зареждане на слайдовете

	// 4. ГАРД: Ако няма слайдове, не рендираме Swiper (важно за Loop режима)
	if (finalSlides.length === 0) return null;

	return (
		<div className="relative w-full h-screen overflow-hidden bg-black">
			<Swiper
				onInit={(swiper) => onSlideChange(swiper)}
				onSlideChangeTransitionStart={(swiper) => onSlideChange(swiper)}
				modules={[Autoplay, Navigation, Pagination, EffectFade]}
				effect="fade"
				fadeEffect={{ crossFade: true }}
				speed={1500}
				autoplay={{ delay: 6000, disableOnInteraction: false }}
				loop={finalSlides.length > 1}
				pagination={{ clickable: true }}
				navigation={true}
				className="h-full w-full"
			>
				{finalSlides.map((slide) => (
					<SwiperSlide key={slide.id}>
						<div className="flex flex-col w-full h-full bg-[#1a1d21]">
							{" "}
							{/* Цвят, съвпадащ с пода на снимката */}
							{/* ГОРНА ЧАСТ: Изображението */}
							<div className="relative w-full h-[45vh] md:h-full overflow-hidden">
								<img
									src={slide.img}
									alt={slide.title}
									className="hero-img absolute inset-0 w-full h-full object-cover"
									style={{ objectPosition: "center bottom" }}
								/>
								{/* Градиент, който "прелива" снимката в долния блок */}
								<div className="absolute inset-x-0 bottom-0 h-200 bg-gradient-to-t from-black/60 to-transparent z-10 md:hidden" />
							</div>
							{/* ДОЛНА ЧАСТ: Текст и Бутони (на мобилен) */}
							<div className="relative flex-1 flex flex-col md:justify-center justify-start gap-2 py-3 md:absolute md:inset-0 md:z-20 md:bg-black/30 max-w-[100vw]">
								<div className="p-4 max-w-5xl md:ml-10 text-center md:text-center">
									<h1 className="animate-text opacity-0 text-white text-xl md:text-7xl font-bold mb-3 pt-4 uppercase leading-tight break-words px-2">
										{slide.title}
									</h1>
									<p className="animate-text opacity-0 text-gray-300 text-base text-md md:text-xl mb-8 md:mb-10 leading-snug">
										{slide.description}
									</p>
									<a
										href="#contact"
										className="animate-text opacity-0 inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-sm font-bold uppercase text-xs tracking-widest transition-all shadow-lg text-center"
									>
										{commonCta}
									</a>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Slider;
