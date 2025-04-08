'use client'

import {usePathname, useRouter} from "next/navigation";
import {useEffect, useRef, useState} from "react";
import {Language} from "../../[lang]/languages";
import NavLogo from "../navLogo/navLogo";
import './header.css'
import HeaderButton, {HeaderButtonType} from "@/app/components/headerButton/headerButton";
import {LangProps} from "@/app/[lang]/page";
import HeaderDropdown from "@/app/components/headerDropdown/headerDropdown";
import FlagSK from "@/app/components/svg/flagSK";
import FlagEN from "@/app/components/svg/flagEN";

const Header: React.FC<LangProps> = (props) => {

    const pathname = usePathname()
    const router = useRouter()

    const navRef = useRef<HTMLElement | null>(null);
    const [body, setBody] = useState<HTMLElement | null>(null);
    const [html, setHtml] = useState<HTMLElement | null>(null);

    const handleMobileNavOpen = () => {
        if (navRef.current && body && html) {
            navRef.current.classList.add("show");
            html.classList.add("html-lock");
            body.classList.add("fix-body");
        }
    }

    const handleMobileNavClose = () => {
        if (navRef.current && body && html) {
            navRef.current.classList.remove("show");
            html.classList.remove("html-lock");
            body.classList.remove("fix-body");
        }
    }

    const handleChangeLanguage = (language: Language) => {
        const segments = pathname.split('/')
        segments[1] = language
        const newPath = segments.join('/')
        router.push(newPath)
    }

    const handleToggleLanguage = () => {
        if (props.langInfo.lang == "sk") {
            handleChangeLanguage("en")
        }
        if (props.langInfo.lang == "en") {
            handleChangeLanguage("sk")
        }
    }

    useEffect(() => {
        setBody(document.body)
        setHtml(document.documentElement)
    }, [])

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
                    <div className="mobile-nav-lang" onClick={handleToggleLanguage}>
                        { props.langInfo.lang == "sk" ? (
                            <FlagSK />
                        ) : (
                            <FlagEN />
                        )}
                    </div>
                    <div className="close-mobile-nav-btn" onClick={handleMobileNavClose}></div>
                </li>
                {(Object.values(HeaderButtonType) as HeaderButtonType[]).map((type, index, array) => (
                    <li key={type} className={index === array.length - 1 ? "nav-action-btn" : undefined}>
                        <HeaderButton
                            type={type}
                            langInfo={props.langInfo}
                            onClick={type === HeaderButtonType.Home ? handleMobileNavClose : undefined}
                        />
                    </li>
                ))}
                <HeaderDropdown
                    langInfo={props.langInfo}
                    onChangeLanguage={handleChangeLanguage}
                />
            </ul>
        </nav>
    </header>
    );
}

export default Header;