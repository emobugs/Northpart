import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

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

// Keep individual imports above — used by IMAGES array below

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield, faCoins } from "@fortawesome/free-solid-svg-icons";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const FEATURE_ICONS = [faShield, faCoins];


const Slider = () => {
	const { t } = useTranslation();

	const slidesData = t("hero.slides", { returnObjects: true });
	const commonCta = t("hero.common.cta");
	const featuresTitle = t("hero.common.features_title");
	const features = t("hero.common.features", { returnObjects: true });

	const finalSlides = useMemo(() => {
		if (!Array.isArray(slidesData)) return [];
		const images = [img1, img2, img3, img4];
		return slidesData.map((slide, index) => ({ ...slide, img: images[index] }));
	}, [slidesData]);

	const onSlideChange = (swiper: SwiperType) => {
		const activeSlide = swiper.slides[swiper.activeIndex];
		const texts = activeSlide.querySelectorAll(".animate-text");
		gsap.set(texts, { opacity: 0, y: 25 });
		gsap.to(texts, {
			opacity: 1,
			y: 0,
			duration: 0.7,
			stagger: 0.15,
			ease: "power2.out",
			delay: 0.15,
		});
	};

	useGSAP(
		() => {
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
		},
		{ dependencies: [finalSlides] },
	);

	if (finalSlides.length === 0) return null;

	const featureList = Array.isArray(features) ? features : [];

	return (
		<div className="relative w-full h-screen overflow-hidden bg-[#0b1120]">
			<Swiper
				onInit={(swiper) => onSlideChange(swiper)}
				onSlideChangeTransitionStart={(swiper) => onSlideChange(swiper)}
				modules={[Autoplay, Navigation, Pagination, EffectFade]}
				effect="fade"
				fadeEffect={{ crossFade: true }}
				speed={1500}
				autoplay={{ delay: 6000, disableOnInteraction: false }}
				loop={finalSlides.length > 1}
				// pagination={{ clickable: true }}
				navigation={true}
				className="h-full w-full"
			>
				{finalSlides.map((slide) => (
					<SwiperSlide key={slide.id}>
						<div className="relative flex flex-col w-full h-full overflow-hidden bg-[#0b1120]">

							{/* IMAGE — мобил: горни 42%, десктоп: цял екран */}
							<div className="relative w-full h-[42%] overflow-hidden md:absolute md:inset-0 md:h-full">
								<img
									src={slide.img}
									alt={slide.title}
									className="hero-img absolute inset-0 w-full h-full object-cover"
									style={{ objectPosition: "center bottom" }}
								/>
								{/* Мобил градиент */}
								<div className="md:hidden absolute inset-0 bg-linear-to-b from-[#0b1120]/20 via-transparent to-[#0b1120]" />
								<div className="md:hidden absolute inset-0 bg-linear-to-r from-[#0b1120]/60 via-transparent to-[#0b1120]/60" />
								{/* Десктоп градиент — силен отдолу за четимост */}
								<div className="hidden md:block absolute inset-0 bg-linear-to-t from-[#0b1120] via-[#0b1120]/65 to-[#0b1120]/10" />
							</div>

							{/* CONTENT — мобил: flex-1 под image, десктоп: overlay отдолу */}
							<div className="flex-1 flex flex-col gap-3 px-5 pt-3 pb-5 md:absolute md:inset-x-0 md:bottom-0 md:z-10 md:px-20 md:pb-12 md:flex-none md:gap-5">

								{/* Текст */}
								<div className="text-center">
									<h1 className="animate-text opacity-0 text-white font-extrabold uppercase leading-tight tracking-tight mb-2 md:mb-4 text-[1.3rem] md:text-5xl lg:text-6xl md:max-w-2xl md:mx-auto">
										{slide.title}
									</h1>
									<p className="animate-text opacity-0 text-slate-400 leading-snug mb-4 md:mb-6 mx-auto text-sm md:text-lg max-w-2xl">
										{slide.description}
									</p>

									{/* CTA Button с glow */}
									<div className="animate-text opacity-0 relative mx-auto w-full max-w-[300px] md:max-w-sm">
										<div className="absolute -inset-4 rounded-2xl bg-cyan-500/10 blur-2xl" />
										<div className="absolute -inset-2 rounded-2xl bg-cyan-400/20 blur-lg animate-pulse" />
										<a
											href="#contact"
											className="relative z-10 block w-full text-center bg-linear-to-r from-cyan-700 via-cyan-500 to-cyan-700 hover:via-cyan-400 text-white py-3.5 md:py-4 rounded-xl font-bold uppercase text-xs md:text-sm tracking-widest transition-all"
											style={{
												boxShadow:
													"0 0 22px rgba(6,182,212,0.75), 0 0 55px rgba(6,182,212,0.4), 0 0 90px rgba(6,182,212,0.18)",
											}}
										>
											{commonCta}
										</a>
									</div>
								</div>

								{/* Features */}
								<div className="animate-text opacity-0 rounded-2xl bg-[#060c18]/80 border border-white/5 px-4 py-3 md:px-6 md:py-4 md:max-w-xl md:mx-auto md:w-full">
									<div className="flex items-center gap-3 mb-3">
										<div className="flex-1 h-px bg-white/10" />
										<span className="text-white text-xs md:text-sm font-semibold">
											{featuresTitle}
										</span>
										<div className="flex-1 h-px bg-white/10" />
									</div>
									<div className="grid grid-cols-2 gap-x-6 gap-y-3">
										{featureList.slice(0, 2).map((feat: { title: string; desc: string }, i: number) => (
											<div key={i} className="flex items-start gap-2.5">
												<div
													className="shrink-0 w-11 h-11"
													style={{
														filter: "drop-shadow(0 0 7px rgba(6,182,212,0.7)) drop-shadow(0 0 14px rgba(6,182,212,0.35))",
													}}
												>
													<div
														className="w-full h-full flex items-center justify-center"
														style={{
															clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
															background: "linear-gradient(135deg, #0d2244 0%, #0a3575 100%)",
														}}
													>
														<FontAwesomeIcon
															icon={FEATURE_ICONS[i]}
															className="text-cyan-300 text-base"
														/>
													</div>
												</div>
												<div>
													<p className="text-white font-bold text-xs md:text-sm leading-tight mb-0.5">
														{feat.title}
													</p>
													<p className="text-slate-400 text-[0.65rem] md:text-xs leading-snug">
														{feat.desc}
													</p>
												</div>
											</div>
										))}
									</div>
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
