'use client'

import {usePathname, useRouter} from "next/navigation";
import {useEffect, useRef, useState} from "react";
import BlackwaterLogo from "../blackwaterLogo/blackwaterLogo";
import FooterSocialButton, { FooterSocialButtonType } from "../footerSocialButton/footerSocialButton";
import { LangProps } from "@/app/[lang]/page";

const Footer: React.FC<LangProps> = (props) => {
    
    const pathname = usePathname()
    const router = useRouter()

    const navRef = useRef<HTMLElement | null>(null);
    const [body, setBody] = useState<HTMLElement | null>(null);
    const [html, setHtml] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setBody(document.body)
        setHtml(document.documentElement)
    }, [])

    return (
        <footer>
        <div className="footer-top-row">
            <BlackwaterLogo />
            {/* <!-- add newsletter signup form --> */}
            <div className="newsletter-signup">
                <h3>Prihláste sa na odber nášho newsletteru!</h3>
                <form action="" className="newsletter-signup-form">
                    <input type="name" name="name" id="name" placeholder="Name *" required />
                    <input type="email" name="email" id="email" placeholder="Email *" required />
                    <button type="submit">Odoberať</button>
                </form>
                <p>* Prihlásením sa na odber nášho newsletteru súhlasím so spracovaním mojich osobných údajov, ako moje meno a email.</p>
            </div>
        </div>
        <div className="footer-menu">
            <div className="footer-row">
                <a href="/digitalization/"><h6>Digitalizačné riešenia</h6></a>
                <ul>
                    <li><a href="/digitalization/#phase-1">Rozpoznanie problémov</a></li>
                    <li><a href="/digitalization/#phase-2">Identifikácia a prezentácia riešení</a></li>
                    <li><a href="/digitalization/#phase-3">Aplikácia riešení</a></li>
                </ul>
            </div>
            <div className="footer-row">
                <a href="/services/"><h6>Doplnkové služby</h6></a>
                <ul>
                    <li><a href="/services/#webpages">Webstránky</a></li>
                    <li><a href="/services/#social-media">Sociálne siete</a></li>
                    <li><a href="/services/#visuals">Vizuálne riešenia</a></li>
                    <li><a href="/services/#custom-software">Softvér na mieru</a></li>
                </ul>
            </div>
            <div className="footer-row">
                <a href="/services/"><h6>Naša práca</h6></a>
                <ul>
                    <li><a href="/services/">Lalizu</a></li>
                    <li><a href="/services/">Nailden</a></li>
                    <li><a href="/services/">Vaše Voľby</a></li>
                </ul>
            </div>
            <div className="footer-row">
                <a href="/about/"><h6>O nás</h6></a>
                <ul>
                    <li><a href="/about/">Naše poslanie</a></li>
                    <li><a href="/about/">Vízia</a></li>
                    <li><a href="/about/">Motivácia</a></li>
                    <li><a href="/about/">Spoznajte náš tím</a></li>
                </ul>
            </div>
            <div className="footer-row">
                <a href="/legal/"><h6>Právne</h6></a>
                <ul>
                    <li><a href="/legal/impressum.html">Impressum</a></li>
                    <li><a href="/legal/privacy-policy.html">Zásady ochrany osobných údajov</a></li>
                    <li><a href="/legal/compliance.html">Dodržiavanie predpisov</a></li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom-links">
            <p>© 2025 Blackwater Digital s. r. o. Všetky práva vyhradené.</p>
            <div className="socials-footer">
                {(Object.values(FooterSocialButtonType) as FooterSocialButtonType[]).map((type) => (
                    <FooterSocialButton 
                    type={type} 
                    langInfo={props.langInfo}
                    />
                ))}
            </div>
        </div>
    </footer>
    );
}

export default Footer;