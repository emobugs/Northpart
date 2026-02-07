import teslaModelS from "../assets/batteries/teslay.jpg";
import lifeP04Cell from "../assets/batteries/lifeP04Cells.webp";
import cylinder from "../assets/batteries/lifepoCylinder.jpg";
import moduleBatteries from "../assets/batteries/module.jpg";
import diagram from "../assets/batteries/diagram.webp";

export interface GalleryItem {
	id: number;
	src: string;
	alt: string;
	title?: string;
	isMain?: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
	{
		id: 1,
		src: teslaModelS,
		alt: "High-Voltage EV Modules",
		title: "High-Voltage EV Modules",
		isMain: true,
	},
	{ id: 2, src: lifeP04Cell, alt: "LifeP04 Cell" },
	{ id: 3, src: diagram, alt: "Technical Diagram" },
	{ id: 4, src: moduleBatteries, alt: "Battery Stack" },
	{ id: 5, src: cylinder, alt: "Cylindrical Cells" },
	{ id: 6, src: lifeP04Cell, alt: "LifeP04 Cell" },
	{ id: 7, src: lifeP04Cell, alt: "LifeP04 Cell" },
];
