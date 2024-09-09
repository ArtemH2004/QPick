import { englishLanguage } from "@/common/language/english";
import { russianLanguage } from "@/common/language/russian";

export const getLanguage = () => {
    const language = localStorage.getItem("language") || 'Рус';
    return language === "Рус" ? russianLanguage : englishLanguage;
}