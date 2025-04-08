'use client'

import BlackwaterLogo from "../blackwaterLogo/blackwaterLogo";
import FooterSocialButton, { FooterSocialButtonType } from "../footerSocialButton/footerSocialButton";
import { LangProps } from "@/app/[lang]/page";
import './footer.css'

const Footer: React.FC<LangProps> = (props) => {

    return (
        <footer>
        <div className="footer-top-row">
            <BlackwaterLogo />
            {/* <!-- add newsletter signup form --> */}
            <div className="newsletter-signup">
                <h3>{props.langInfo.dict.footer.newsletter.title}</h3>
                <form action="" className="newsletter-signup-form">
                    <input type="name" name="name" id="name" placeholder={props.langInfo.dict.footer.newsletter.namePlaceholder} required />
                    <input type="email" name="email" id="email" placeholder={props.langInfo.dict.footer.newsletter.emailPlaceholder} required />
                    <button type="submit">{props.langInfo.dict.footer.newsletter.subscribeButton}</button>
                </form>
                <p>{props.langInfo.dict.footer.newsletter.notice}</p>
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
            <p>{props.langInfo.dict.footer.bottomLine}</p>
            <div className="socials-footer">
                {(Object.values(FooterSocialButtonType) as FooterSocialButtonType[]).map((type) => (
                    <FooterSocialButton 
                    type={type} 
                    langInfo={props.langInfo}
                    key={type}
                    />
                ))}
            </div>
        </div>
    </footer>
    );
}

export default Footer;