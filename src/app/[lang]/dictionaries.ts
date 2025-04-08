import 'server-only'
import {Language} from "@/app/[lang]/languages";
import {Dictionary} from "@/app/models/dictionary";

const dictionaries: Record<Language, () => Promise<Dictionary>> = {
    en: () => import('./../dictionaries/en.json').then((module) => module.default),
    sk: () => import('./../dictionaries/sk.json').then((module) => module.default),
}

export const getDictionary = async (locale: Language) => dictionaries[locale]()