import './headerDropdown.css'
import FlagSK from "@/app/components/svg/flagSK";
import FlagEN from "@/app/components/svg/flagEN";
import {useRef} from "react";
import {Language} from "@/app/[lang]/languages";
import {LangProps} from "@/app/[lang]/page";

interface HeaderDropdownProps extends LangProps {
    onChangeLanguage: (lang: Language) => void;
}

const HeaderDropdown: React.FC<HeaderDropdownProps> = (props) => {
    const dropdownRef = useRef<HTMLUListElement | null>(null);
    const dropdownContentRef = useRef<HTMLUListElement | null>(null);

    const handleLangMenuToggle = () => {
        if (dropdownRef.current && dropdownContentRef.current) {
            dropdownRef.current.classList.toggle("hidden-dropdown");
            dropdownContentRef.current.classList.toggle("active");
        }
        // TODO: add if active and click anywhere else, remove active
    }


    return (
        <ul className="dropdown hidden-dropdown" ref={dropdownRef}>
            <li className="lang" onClick={handleLangMenuToggle}></li>
            <ul className="dropdown-content" ref={dropdownContentRef}>
                <li className={props.langInfo.lang == "sk" ? "active" : ""} onClick={() => props.onChangeLanguage('sk')}>
                    <FlagSK/>
                </li>
                <li className={props.langInfo.lang == "en" ? "active" : ""} onClick={() => props.onChangeLanguage('en')}>
                    <FlagEN/>
                </li>
            </ul>
        </ul>
    );
}

export default HeaderDropdown;