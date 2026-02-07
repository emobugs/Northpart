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
	description?: string;
	status?: string;
	isMain?: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
	{
		id: 1,
		src: teslaModelS,
		alt: "High-Voltage EV Modules",
		title: "High-Voltage EV Modules",
		description: "",
		isMain: true,
	},
	{ id: 2, src: lifeP04Cell, alt: "LifeP04 Cell", description: "" },
	{ id: 3, src: diagram, alt: "Technical Diagram", description: "" },
	{ id: 4, src: moduleBatteries, alt: "Battery Stack", description: "" },
	{ id: 5, src: cylinder, alt: "Cylindrical Cells", description: "" },
	// {
	// 	id: 6,
	// 	src: lifeP04Cell,
	// 	alt: "LifeP04 Cell",
	// 	description: "De specifications Detailed technical specifications and performance metrics ",
	// },
	{ id: 7, src: lifeP04Cell, alt: "LifeP04 Cell", description: "" },
	{ id: 8, src: lifeP04Cell, alt: "LifeP04 Cell", description: "" },
	{ id: 8, src: lifeP04Cell, alt: "LifeP04 Cell", description: "" },
];
