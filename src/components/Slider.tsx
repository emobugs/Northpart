import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import img1 from "../assets/images/slider/ev.webp";
import img2 from "../assets/images/slider/hybrid.webp";
import img3 from "../assets/images/slider/plugin.webp";
import img4 from "../assets/images/slider/solar.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMemo } from "react";

const Slider = () => {
	const slides = [
		{ id: 1, img: img1, title: "Slide 1" },
		{ id: 2, img: img2, title: "Slide 2" },
		{ id: 3, img: img3, title: "Slide 3" },
		{ id: 4, img: img4, title: "Slide 4" },
	];

	useGSAP(() => {
		const mm = gsap.matchMedia();

		// Тази анимация ще се изпълни САМО ако екранът е под 768px
		mm.add("(max-width: 768px)", () => {
			// Задаваме по-голям мащаб за мобилни, за да няма бели ивици
			gsap.set(".hero-img", { scale: 1.6 });

			gsap.fromTo(
				".hero-img",
				{ xPercent: -25 }, // Плъзгане наляво (разкрива дясната кола)
				{
					xPercent: 25, // Плъзгане надясно
					duration: 12,
					ease: "sine.inOut",
					repeat: -1,
					yoyo: true,
				},
			).progress(0.5); // Стартира от центъра
		});

		// Опционално: За десктоп (над 769px) можем да нулираме всичко
		mm.add("(min-width: 769px)", () => {
			gsap.set(".hero-img", {
				xPercent: 0,
				scale: 1.1, // По-малък зуум за големи екрани
			});
		});

		return () => mm.revert(); // Почистване на анимациите
	});

	return (
		<div className="flex min-h-screen w-full justify-center items-center">
			<Swiper
				// onSlideChangeTransitionStart={onSlideChange}
				modules={[Autoplay, Navigation, Pagination, EffectFade]}
				effect="fade" // Smooth fade transition like a pro hero section
				speed={1000}
				// fadeEffect={{ crossFade: true }}
				autoplay={{ delay: 6000, disableOnInteraction: false }}
				loop={true}
				pagination={{ clickable: true }}
				navigation={true}
				className="h-full w-full"
			>
				{slides.map((slide) => (
					<SwiperSlide key={slide.id}>
						<div className="relative mx-auto w-full h-[50vh] md:max-w-[90vw] md:h-[80vh] flex items-center justify-center">
							<img
								src={slide.img}
								alt={slide.title}
								className="hero-img absolute inset-0 w-full h-full object-cover"
								style={{ scale: 1.2, objectPosition: "center" }}
							/>
							{/* Overlay for text readability */}
							<div className="absolute inset-0 bg-black/40 min-w-full" />

							<h1 className="relative z-10 text-white text-5xl font-bold">
								{slide.title}
							</h1>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Slider;
