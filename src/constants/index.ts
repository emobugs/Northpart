import { type TFunction } from "i18next";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faViber } from "@fortawesome/free-brands-svg-icons";
import { type IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ContactLink {
	href: string;
	icon: IconProp;
	color?: string;
	textColor?: string;
	title: string;
}

export interface ContactItem {
	type: "email" | "phone";
	label: string;
	val: string;
	href?: string;
	icon?: IconProp;
	color: string;
	links?: ContactLink[];
}

export const getContactItems = (t: TFunction): ContactItem[] => [
	{
		type: "email",
		label: t("contact.labels.email"),
		val: "northpartbg@gmail.com",
		href: "mailto:northpartbg@gmail.com",
		icon: faEnvelope,
		color: "cyan",
	},
	{
		type: "phone",
		label: t("contact.labels.technical"),
		val: "+359892787845",
		color: "blue",
		links: [
			{ href: "tel:+359892787845", icon: faPhoneAlt, color: "blue", title: "Call" },
			{
				href: "viber://add?number=359892787845",
				icon: faViber,
				textColor: "text-purple-400",
				title: "Viber",
			},
			{
				href: "https://wa.me/359892787845",
				icon: faWhatsapp,
				textColor: "text-green-400",
				title: "WhatsApp",
			},
		],
	},
	{
		type: "phone",
		label: t("contact.labels.sales"),
		val: "+4745021323",
		color: "blue",
		links: [
			{ href: "tel:+4745021323", icon: faPhoneAlt, color: "blue", title: "Call" },
			{
				href: "viber://add?number=4745021323",
				icon: faViber,
				textColor: "text-purple-400",
				title: "Viber",
			},
			{
				href: "https://wa.me/4745021323",
				icon: faWhatsapp,
				textColor: "text-green-400",
				title: "WhatsApp",
			},
		],
	},
];
