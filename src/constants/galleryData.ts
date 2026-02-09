import teslaModelS from "../assets/batteries/teslay.jpg";
import lifeP04Cell from "../assets/batteries/lifeP04Cells.webp";
import cylinder from "../assets/batteries/lifepoCylinder.jpg";
import moduleBatteries from "../assets/batteries/module.jpg";
import diagram from "../assets/batteries/diagram.webp";

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
		src: teslaModelS,
		alt: "Tesla Module",
		isMain: true,
		specs: ["24V", "234Ah", "5.3 kWh", "25kg"],
		translations: {
			en: {
				title: "Tesla Model S Module",
				desc: "High-density lithium-ion module sourced from Model S/X packs. Ideal for solar storage and EV conversions.",
			},
			bg: {
				title: "Модул Tesla Model S",
				desc: "Литиево-йонен модул с висока плътност от пакети Model S/X. Идеален за соларно съхранение и EV конверсии.",
			},
			de: {
				title: "Tesla Model S Modul",
				desc: "Hochenergetisches Lithium-Ionen-Modul aus Model S/X Packs. Ideal für Solarspeicher und Elektro-Umbauten.",
			},
			ro: {
				title: "Modul Tesla Model S",
				desc: "Modul litiu-ion de înaltă densitate din pachete Model S/X. Ideal pentru stocare solară și conversii EV.",
			},
		},
	},
	{
		id: 2,
		src: lifeP04Cell,
		alt: "LiFePO4 Cell",
		specs: ["3.2V", "280Ah", "Grade A", "6000+ Cycles"],
		translations: {
			en: {
				title: "Prismatic LiFePO4 Cell",
				desc: "Brand new Grade A prismatic cells for industrial and home energy storage systems.",
			},
			bg: {
				title: "Призматична LiFePO4 клетка",
				desc: "Чисто нови Grade A призматични клетки за индустриални и домашни системи за съхранение.",
			},
			de: {
				title: "Prismatische LiFePO4 Zelle",
				desc: "Nagelneue Grade A Prismenzellen für industrielle und private Energiespeichersysteme.",
			},
			ro: {
				title: "Celulă prismatică LiFePO4",
				desc: "Celule prismatice noi Grade A pentru sisteme industriale și casnice de stocare a energiei.",
			},
		},
	},
	{
		id: 3,
		src: diagram,
		alt: "Technical Diagram",
		translations: {
			en: {
				title: "System Architecture",
				desc: "Detailed wiring and communication diagram for modular high-voltage battery management.",
			},
			bg: {
				title: "Системна архитектура",
				desc: "Детайлна схема на свързване и комуникация за модулно управление на високоволтови батерии.",
			},
			de: {
				title: "Systemarchitektur",
				desc: "Detailliertes Verkabelungs- und Kommunikationsdiagramm für modulares Hochvolt-Batteriemanagement.",
			},
			ro: {
				title: "Arhitectura sistemului",
				desc: "Diagramă detaliată de cablare și comunicare pentru managementul modular al bateriilor de înaltă tensiune.",
			},
		},
	},
	{
		id: 4,
		src: moduleBatteries,
		alt: "Battery Stack",
		specs: ["High Voltage", "Modular", "Liquid Cooled"],
		translations: {
			en: {
				title: "Modular Battery Stack",
				desc: "Scalable energy solution for heavy-duty EV platforms and industrial machinery.",
			},
			bg: {
				title: "Модулен пакет батерии",
				desc: "Мащабируемо енергийно решение за тежкотоварни EV платформи и индустриални машини.",
			},
			de: {
				title: "Modularer Batteriestapel",
				desc: "Skalierbare Energielösung für schwere Elektroplattformen und Industriemaschinen.",
			},
			ro: {
				title: "Set de baterii modular",
				desc: "Soluție energetică scalabilă pentru platforme EV grele și utilaje industriale.",
			},
		},
	},
	{
		id: 5,
		src: cylinder,
		alt: "Cylindrical Cells",
		specs: ["21700 Format", "NMC Chemistry", "High Discharge"],
		translations: {
			en: {
				title: "21700 Cylindrical Cells",
				desc: "High-drain cylindrical cells used in modern long-range electric vehicle architectures.",
			},
			bg: {
				title: "21700 Цилиндрични клетки",
				desc: "Цилиндрични клетки с висок разряд, използвани в модерните архитектури на електромобили.",
			},
			de: {
				title: "21700 Zylindrische Zellen",
				desc: "Hochstromfähige Rundzellen, die в modernen Elektrofahrzeug-Architekturen verwendet werden.",
			},
			ro: {
				title: "Celule cilindrice 21700",
				desc: "Celule cilindrice cu descărcare mare utilizate în arhitecturile moderne ale vehiculelor electrice.",
			},
		},
	},
	{
		id: 6,
		src: cylinder,
		alt: "Cylindrical Cells",
		specs: ["21700 Format", "NMC Chemistry", "High Discharge"],
		translations: {
			en: {
				title: "21700 Cylindrical Cells",
				desc: "High-drain cylindrical cells used in modern long-range electric vehicle architectures.",
			},
			bg: {
				title: "21700 Цилиндрични клетки",
				desc: "Цилиндрични клетки с висок разряд, използвани в модерните архитектури на електромобили.",
			},
			de: {
				title: "21700 Zylindrische Zellen",
				desc: "Hochstromfähige Rundzellen, die в modernen Elektrofahrzeug-Architekturen verwendet werden.",
			},
			ro: {
				title: "Celule cilindrice 21700",
				desc: "Celule cilindrice cu descărcare mare utilizate în arhitecturile moderne ale vehiculelor electrice.",
			},
		},
	},
];
