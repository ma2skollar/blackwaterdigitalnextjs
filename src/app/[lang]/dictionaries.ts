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
    footer: {
        newsletter: {
            title: string;
            namePlaceholder: string;
            emailPlaceholder: string;
            subscribeButton: string;
            notice: string;
        }
        footerMenu: {
            digitalizationAudit: {
                title: string;
                link: string;
                items: {
                    item1: {
                        title: string;
                        link: string;
                    }
                    item2: {
                        title: string;
                        link: string;
                    }
                    item3: {
                        title: string;
                        link: string;
                    }
                }
            }
            supplementaryServices: {
                title: string;
                link: string;
                items: {
                    item1: {
                        title: string;
                        link: string;
                    }
                    item2: {
                        title: string;
                        link: string;
                    }
                    item3: {
                        title: string;
                        link: string;
                    }
                    item4: {
                        title: string;
                        link: string;
                    }
                }
            }
            ourWork: {
                title: string;
                link: string;
                items: {
                    item1: {
                        title: string;
                        link: string;
                    }
                    item2: {
                        title: string;
                        link: string;
                    }
                    item3: {
                        title: string;
                        link: string;
                    }
                }
            }
            aboutUs: {
                title: string;
                link: string;
                items: {
                    item1: {
                        title: string;
                        link: string;
                    }
                    item2: {
                        title: string;
                        link: string;
                    }
                    item3: {
                        title: string;
                        link: string;
                    }
                    item4: {
                        title: string;
                        link: string;
                    }
                }
            }
            legal: {
                title: string;
                link: string;
                items: {
                    item1: {
                        title: string;
                        link: string;
                    }
                    item2: {
                        title: string;
                        link: string;
                    }
                    item3: {
                        title: string;
                        link: string;
                    }
                }
            }
        }
        socialLinkLabels: {
            email: {
                link: string;
                label: string;
            }
            linkedin: {
                link: string;
                label: string;
            }
            facebook: {
                link: string;
                label: string;
            }
            instagram: {
                link: string;
                label: string;
            }
            github: {
                link: string;
                label: string;
            }
        }
    }
}

const dictionaries: Record<Language, () => Promise<Dictionary>> = {
    en: () => import('./../dictionaries/en.json').then((module) => module.default),
    sk: () => import('./../dictionaries/sk.json').then((module) => module.default),
}

export const getDictionary = async (locale: Language) => dictionaries[locale]()