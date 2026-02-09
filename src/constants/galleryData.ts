import { tr } from "framer-motion/client";
import moduleDec from "../assets/images/1.jpg";
import warehouse from "../assets/images/warehouse.jpg";
import batteries from "../assets/images/batteries.jpg";
import hybridBmw from "../assets/images/bmw.jpg";
import nissanLeafModule from "../assets/images/module.jpg";
import process from "../assets/images/process.jpg";

export interface GalleryItem {
	id: number;
	src: string;
	alt: string;
	isMain?: boolean;
	specs?: string[];
	translations: {
		en: { title: string; desc: string };
		bg: { title: string; desc: string };
		de: { title: string; desc: string };
		ro: { title: string; desc: string };
	};
}

export const GALLERY_ITEMS: GalleryItem[] = [
	{
		id: 1,
		src: warehouse,
		alt: "Warehouse Silistra",
		isMain: true,

		translations: {
			en: {
				title: "EV Battery Logistics Hub & Wholesale – Silistra",
				desc: "Our strategic distribution center in Bulgaria, stocking a wide range of electric vehicle batteries (Tesla, BMW, Nissan) for rapid European supply.",
			},
			bg: {
				title: "Логистичен център и склад за EV батерии – Силистра",
				desc: "Специализирана база в България с голяма наличност от батерии за електромобили (Tesla, BMW, Nissan), готова за експресна дистрибуция в Европа.",
			},
			de: {
				title: "EV-Batterie Logistikzentrum & Großhandel – Silistra",
				desc: "Unser strategisches Vertriebszentrum in Bulgarien mit einem großen Lager an Elektrofahrzeugbatterien für die schnelle europaweite Belieferung.",
			},
			ro: {
				title: "Centru Logistic și Depozit Baterii EV – Silistra",
				desc: "Centrul nostru strategic de distribuție în Bulgaria, cu un stoc variat de baterii pentru vehicule electrice, pregătit pentru livrare rapidă în Europa.",
			},
		},
	},
	{
		id: 3,
		src: batteries,
		alt: "EV Batteries",

		translations: {
			en: {
				title: "Battery Diagnostic Line",
				desc: "A wide array of EV battery packs undergoing comprehensive diagnostic testing to ensure health, capacity, and safety before distribution.",
			},
			bg: {
				title: "Линия за диагностика на батерии",
				desc: "Богата гама от батерийни пакети в процес на пълна диагностика, гарантираща техния капацитет и безопасност преди последваща дистрибуция.",
			},
			de: {
				title: "Batteriediagnose-Linie",
				desc: "Eine Vielzahl von EV-Batteriepaketen, die umfassenden Diagnosetests unterzogen werden, um Zustand, Kapazität und Sicherheit vor dem Versand zu gewährleisten.",
			},
			ro: {
				title: "Linie de Diagnosticare Baterii",
				desc: "O gamă largă de pachete de baterii EV supuse unor teste de diagnosticare cuprinzătoare pentru a asigura starea de sănătate, capacitatea și siguranța înainte de distribuție.",
			},
		},
	},
	{
		id: 4,
		src: moduleDec,
		alt: "EV Battery Module Decomposition",

		translations: {
			en: {
				title: "Battery Module Decomposition",
				desc: "Expert disassembly of high-voltage battery packs into individual modules, rigorously tested and ready for second-life applications.",
			},
			bg: {
				title: "Модулна декомпозиция на батерии",
				desc: "Професионално разглобяване на високоволтови пакети на отделни модули, преминали строга диагностика и готови за повторна употреба.",
			},
			de: {
				title: "Batteriemodul-Zerlegung",
				desc: "Fachgerechte Demontage von Hochvolt-Batteriepaketen in einzelne Module, streng geprüft und bereit für Second-Life-Anwendungen.",
			},
			ro: {
				title: "Decompoziția modulelor de baterii",
				desc: "Dezasamblarea expertă a pachetelor de baterii de înaltă tensiune în module individuale, testate riguros și pregătite pentru aplicații second-life.",
			},
		},
	},
	{
		id: 5,
		src: hybridBmw,
		alt: "BMW Hybrid Batteries",

		translations: {
			en: {
				title: "Hybrid Battery Systems",
				desc: "Premium selection of hybrid battery packs for leading automotive brands like BMW, ensuring factory-standard performance and reliability.",
			},
			bg: {
				title: "Хибридни батерийни системи",
				desc: "Висококачествени батерийни пакети за хибридни автомобили от водещи марки като BMW, гарантиращи фабрична надеждност и мощност.",
			},
			de: {
				title: "Hybrid-Batteriesysteme",
				desc: "Premium-Auswahl an Hybrid-Batteriepaketen für führende Automobilmarken wie BMW, die werksseitige Leistung und Zuverlässigkeit garantieren.",
			},
			ro: {
				title: "Sisteme de Baterii Hibride",
				desc: "Selecție premium de pachete de baterii hibride pentru mărci auto de top precum BMW, asigurând performanță și fiabilitate la standarde de fabrică.",
			},
		},
	},
	{
		id: 6,
		src: nissanLeafModule,
		alt: "Nissan Leaf battery module",

		translations: {
			en: {
				title: "Nissan Leaf Module",
				desc: "Authentic Nissan Leaf battery module. Highly sought after for DIY power walls and solar energy storage due to its reliable chemistry and ease of assembly.",
			},
			bg: {
				title: "Модул от Nissan Leaf",
				desc: "Оригинален батериен модул от Nissan Leaf. Силно търсен за изграждане на домашни соларни системи (Powerwalls) заради надеждността и лесния монтаж.",
			},
			de: {
				title: "Nissan Leaf Modul",
				desc: "Originales Nissan Leaf Batteriemodul. Sehr gefragt für DIY-Powerwalls und Solarspeicher aufgrund seiner zuverlässigen Chemie und einfachen Montage.",
			},
			ro: {
				title: "Modul Nissan Leaf",
				desc: "Modul de baterie original Nissan Leaf. Foarte căutat pentru sisteme solare DIY și stocare de energie datorită fiabilității și ușurinței în asamblare.",
			},
		},
	},
	{
		id: 7,
		src: process,
		alt: "Nissan Leaf battery module",
		translations: {
			en: {
				title: "Hands-On Technical Expertise",
				desc: "Our engineers meticulously inspect every EV battery module, ensuring maximum quality and precision in every step of the disassembly process.",
			},
			bg: {
				title: "Техническа експертиза и прецизност",
				desc: "Нашите инженери извършват детайлна инспекция на всеки модул, гарантирайки безкомпромисно качество и прецизност във всяка стъпка от процеса.",
			},
			de: {
				title: "Handwerkliche technische Expertise",
				desc: "Unsere Ingenieure prüfen jedes EV-Batteriemodul akribisch und gewährleisten höchste Qualität und Präzision bei jedem Schritt der Demontage.",
			},
			ro: {
				title: "Expertiză Tehnică și Precizie",
				desc: "Inginerii noștri inspectează meticulos fiecare modul de baterie EV, asigurând o calitate maximă și precizie în fiecare etapă a procesului de dezasamblare.",
			},
		},
	},
];
