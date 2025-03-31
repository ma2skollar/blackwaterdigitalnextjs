import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";
import { Language } from "../[lang]/languages";
import NavLogo from "./navLogo";

const Header: React.FC = () => {
    
    const pathname = usePathname()
    const router = useRouter()

    const navRef = useRef<HTMLElement | null>(null);
    const dropdownRef = useRef<HTMLUListElement | null>(null);
    const dropdownContentRef = useRef<HTMLUListElement | null>(null);
    const body = document.body;
    const html = document.documentElement;

    const handleMobileNavOpen = () => {
        if (navRef.current) {
            navRef.current.classList.add("show");
            html.classList.add("html-lock");
            body.classList.add("fix-body");
        }
    }

    const handleMobileNavClose = () => {
        if (navRef.current) {
            navRef.current.classList.remove("show");
            html.classList.remove("html-lock");
            body.classList.remove("fix-body");
        }
    }

    const handleLangMenuToggle = () => {
        if (dropdownRef.current && dropdownContentRef.current) {
            dropdownRef.current.classList.toggle("hidden-dropdown");
            dropdownContentRef.current.classList.toggle("active");
        }
        // TODO: add if active and click anywhere else, remove active
    }

    const handleChangeLanguage = (language: Language) => {
        const segments = pathname.split('/')
        segments[1] = language
        const newPath = segments.join('/')
        router.push(newPath)
    }

    const handleToggleLanguage = () => {
        if (pathname.includes("/sk/")) {
            handleChangeLanguage("en")
        }
        if (pathname.includes("/en/")) {
            handleChangeLanguage("sk")
        }
    }

    return (
        <header>
        <NavLogo />
        <div className="mobile-nav-btn" onClick={handleMobileNavOpen}>
            <div className="top-line-mobile-nav-btn"></div>
            <div className="bottom-line-mobile-nav-btn"></div>
        </div>
        <nav ref={navRef}>
            <ul>
                <li className="close-mobile-nav-container">
                    <div className="mobile-nav-lang" onClick={handleToggleLanguage}></div> 
                    <div className="close-mobile-nav-btn" onClick={handleMobileNavClose}></div>
                </li>
                <li><a href="#" id="home-nav-link" onClick={handleMobileNavClose}>Domov</a></li>
                <li><a href="/about/" id="about-nav-link">O nás</a></li>
                <li><a href="/work/" id="work-nav-link">Naša práca</a></li>
                <li><a href="/services/" id="service-nav-link">Služby</a></li>
                <li className="nav-action-btn"><a href="/digitalization/" id="contact-nav-link">Digitalizácia</a></li>
                <ul className="dropdown hidden-dropdown" ref={dropdownRef}>
                    <li className="lang" onClick={handleLangMenuToggle}></li>
                    <ul className="dropdown-content" ref={dropdownContentRef}>
                        <li id="lang-svk" onClick={() => handleChangeLanguage('sk')}>
                            {/* add svg */}
                        </li>
                        <li id="lang-eng" onClick={() => handleChangeLanguage('en')}>
                            {/* add svg */}
                        </li>
                    </ul>
                </ul>
            </ul>
        </nav>
    </header>
    );
}

export default Header;