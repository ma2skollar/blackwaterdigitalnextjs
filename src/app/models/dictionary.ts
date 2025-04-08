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
        bottomLine: string;
        socialLinkLabels: {
            email: string;
            linkedin: string;
            facebook: string;
            instagram: string;
            github: string;
        }
    }
}