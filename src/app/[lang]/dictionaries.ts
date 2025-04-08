import 'server-only'
import {Language} from "@/app/[lang]/languages";

export interface Dictionary {
    head: {
        title: string;
        description: string;
    }
    welcome: string
    nav: {
        home: string;
        about: string;
        work: string;
        services: string;
        contact: string;
        digitalization: string;
    }
}

const dictionaries: Record<Language, () => Promise<Dictionary>> = {
    en: () => import('./../dictionaries/en.json').then((module) => module.default),
    sk: () => import('./../dictionaries/sk.json').then((module) => module.default),
}

export const getDictionary = async (locale: Language) => dictionaries[locale]()