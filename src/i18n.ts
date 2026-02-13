import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import bg from "./locales/bg/translation.json";
import en from "./locales/en/translation.json";
import de from "./locales/de/translation.json";
import ro from "./locales/ro/translation.json";
import tr from "./locales/tr/translation.json";
import el from "./locales/el/translation.json";

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		// Добавяме преводите ръчно тук
		resources: {
			en: { translation: en },
			bg: { translation: bg },
			de: { translation: de },
			ro: { translation: ro },
			tr: { translation: tr },
			el: { translation: el },
		},
		fallbackLng: "en",
		supportedLngs: ["en", "bg", "de", "ro", "tr", "el"],
		debug: false,
		interpolation: {
			escapeValue: false, // React вече се грижи за XSS
		},
		react: {
			useSuspense: false, // Вече няма да чакаме мрежови заявки
		},
	});

export default i18n;
