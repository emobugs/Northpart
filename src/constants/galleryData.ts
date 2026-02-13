import moduleDec from "../assets/images/1.webp";
import warehouse from "../assets/images/warehouse.webp";
import batteries from "../assets/images/batteries.webp";
import hybridBmw from "../assets/images/bmw.webp";
import nissanLeafModule from "../assets/images/module.webp";
import process from "../assets/images/process.webp";
import enclosure from "../assets/images/enclosure.webp";
import internalArch from "../assets/images/internal-architecture.webp";

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
		tr: { title: string; desc: string };
		el: { title: string; desc: string };
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
			tr: {
				title: "EV Batarya Lojistik Merkezi ve Toptan Satış – Silistre",
				desc: "Bulgaristan'daki stratejik dağıtım merkezimiz, Avrupa geneline hızlı sevkiyat için geniş bir elektrikli araç bataryası (Tesla, BMW, Nissan) stoğuna sahiptir.",
			},
			el: {
				title: "Κέντρο Logistics & Χονδρική Πώληση Μπαταριών EV – Σίλιστρα",
				desc: "Το στρατηγικό μας κέντρο διανομής στη Βουλγαρία, με μεγάλη παρακαταθήκη μπαταριών ηλεκτρικών οχημάτων για ταχεία παροχή σε όλη την Ευρώπη.",
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
				desc: "O gamă largă de pachete de baterii EV supuse unor teste de diagnosticare cuprinzătoare pentru a asigura starea de sănătate, capacitatea și siguranța.",
			},
			tr: {
				title: "Batarya Teşhis Hattı",
				desc: "Dağıtım öncesinde sağlık, kapasite ve güvenlik durumlarını doğrulamak amacıyla kapsamlı teşhis testlerinden geçen geniş bir EV batarya paketi yelpazesi.",
			},
			el: {
				title: "Γραμμή Διάγνωσης Μπαταριών",
				desc: "Μια ευρεία γκάμα πακέτων μπαταριών EV που υποβάλλονται σε ολοκληρωμένες διαγνωστικές δοκιμές πριν από τη διανομή.",
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
			tr: {
				title: "Batarya Modülü Demontajı",
				desc: "Yüksek voltajlı batarya paketlerinin, ikinci el uygulamalar için hazır olan tekil modüllere uzmanlar tarafından sökülmesi.",
			},
			el: {
				title: "Αποσυναρμολόγηση Μονάδων Μπαταρίας",
				desc: "Εξειδικευμένη αποσυναρμολόγηση πακέτων μπαταριών υψηλής τάσης σε μεμονωμένες μονάδες, έτοιμες για εφαρμογές δεύτερης ζωής.",
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
				desc: "Selecție premium de pachete de baterii hibride pentru mărci auto de top precum BMW, asigurând performanță și fiabilitate.",
			},
			tr: {
				title: "Hibrit Batarya Sistemleri",
				desc: "BMW gibi önde gelen markalar için fabrika standartlarında performans ve güvenilirlik sağlayan birinci sınıf hibrit batarya paketi seçkisi.",
			},
			el: {
				title: "Υβριδικά Συστήματα Μπαταριών",
				desc: "Κορυφαία επιλογή πακέτων υβριδικών μπαταριών για μάρκες αυτοκινήτων όπως η BMW, διασφαλίζοντας απόδοση εργοστασιακών προδιαγραφών.",
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
				desc: "Originales Nissan Leaf Batteriemodul. Sehr gefragt für DIY-Powerwalls und Solarspeicher aufgrund seiner zuverlässigen Chemie.",
			},
			ro: {
				title: "Modul Nissan Leaf",
				desc: "Modul de baterie original Nissan Leaf. Foarte căutat pentru sisteme solare DIY și stocare de energie datorită fiabilității sale.",
			},
			tr: {
				title: "Nissan Leaf Modülü",
				desc: "Orijinal Nissan Leaf batarya modülü. Güvenilir kimyası nedeniyle DIY güç duvarları ve güneş enerjisi depolaması için oldukça popülerdir.",
			},
			el: {
				title: "Μονάδα Nissan Leaf",
				desc: "Αυθεντική μονάδα μπαταρίας Nissan Leaf. Ιδιαίτερα περιζήτητη για DIY power walls και αποθήκευση ηλιακής ενέργειας.",
			},
		},
	},
	{
		id: 7,
		src: process,
		alt: "Technical inspection",
		translations: {
			en: {
				title: "Hands-On Technical Expertise",
				desc: "Our engineers meticulously inspect every EV battery module, ensuring maximum quality and precision in every step of the disassembly process.",
			},
			bg: {
				title: "Техническа експертиза и прецизност",
				desc: "Нашите инженери извършват детайлна инспекция на всеки модул, гарантирайки безкомпромисно качество и прецизност във всяка стъпка.",
			},
			de: {
				title: "Handwerkliche technische Expertise",
				desc: "Unsere Ingenieure prüfen jedes EV-Batteriemodul akribisch und gewährleisten höchste Qualität bei jedem Schritt der Demontage.",
			},
			ro: {
				title: "Expertiză Tehnică și Precizie",
				desc: "Inginerii noștri inspectează meticulos fiecare modul de baterie EV, asigurând o calitate maximă în fiecare etapă a procesului.",
			},
			tr: {
				title: "Uygulamalı Teknik Uzmanlık",
				desc: "Mühendislerimiz, sökme sürecinin her adımında maksimum kalite sağlayarak her bir EV batarya modülünü titizlikle inceler.",
			},
			el: {
				title: "Εμπειρική Τεχνική Εξειδίκευση",
				desc: "Οι μηχανικοί μας επιθεωρούν σχολαστικά κάθε μονάδα μπαταρίας EV, διασφαλίζοντας μέγιστη ποιότητα σε κάθε βήμα.",
			},
		},
	},
	{
		id: 8,
		src: enclosure,
		alt: "EV Battery High-Voltage Enclosure",
		translations: {
			en: {
				title: "High-Voltage Battery Enclosure",
				desc: "Reinforced protective housing for large-scale EV battery packs, engineered for maximum structural integrity and thermal safety.",
			},
			bg: {
				title: "Корпус на високоволтова батерия",
				desc: "Усилена защитна обвивка за големи батерийни пакети на електромобили, проектирана за максимална здравина и топлинна безопасност.",
			},
			de: {
				title: "Hochvolt-Batteriegehäuse",
				desc: "Verstärktes Schutzgehäuse für großformatige EV-Batteriepakete, entwickelt für maximale strukturelle Integrität.",
			},
			ro: {
				title: "Carcasă baterie de înaltă tensiune",
				desc: "Carcasă de protecție ranforsată pentru pachete mari de baterii EV, proiectată pentru integritate structurală maximă.",
			},
			tr: {
				title: "Yüksek Voltajlı Batarya Kasası",
				desc: "Büyük ölçekli EV batarya paketleri için güçlendirilmiş koruyucu kasa; taşıma sırasında maksimum yapısal bütünlük için tasarlanmıştır.",
			},
			el: {
				title: "Περίβλημα Μπαταρίας Υψηλής Τάσης",
				desc: "Ενισχυμένο προστατευτικό περίβλημα για πακέτα μπαταριών EV μεγάλης κλίμακας, σχεδιασμένο για μέγιστη δομική ακεραιότητα.",
			},
		},
	},
	{
		id: 9,
		src: internalArch,
		alt: "Internal Battery Cell Architecture",
		translations: {
			en: {
				title: "Internal Cell Architecture",
				desc: "Detailed interior view of a high-capacity modular battery system, showcasing complex busbar connections during quality inspection.",
			},
			bg: {
				title: "Вътрешна архитектура на клетките",
				desc: "Детайлен поглед върху вътрешността на модулна батерийна система, показващ сложните връзки по време на качествена инспекция.",
			},
			de: {
				title: "Interne Zellenarchitektur",
				desc: "Detaillierte Innenansicht eines modularen Hochkapazitäts-Batteriesystems, die die komplexen Busbar-Verbindungen zeigt.",
			},
			ro: {
				title: "Arhitectura internă a celulelor",
				desc: "Vedere interioară detaliată a unui sistem modular de baterii de mare capacitate, prezentând conexiunile complexe.",
			},
			tr: {
				title: "Dahili Hücre Mimarisi",
				desc: "Yüksek kapasiteli modüler batarya sisteminin detaylı iç görünümü; kalite denetimi sırasında karmaşık bara bağlantılarını sergiler.",
			},
			el: {
				title: "Εσωτερική Αρχιτεκτονική Κυψελών",
				desc: "Λεπτομερής εσωτερική άποψη ενός σπονδυλωτού συστήματος μπαταριών υψηλής χωρητικότητας, που αναδεικνύει τις περίπλοκες συνδέσεις.",
			},
		},
	},
];
