import './footerLink.css'
import Link from "next/link";
import {useEffect, useState} from "react";
import {LangProps} from "@/app/[lang]/page";
import { NavLinkType } from '@/app/enums/navLinkType';

interface FooterLinkProps extends LangProps {
    type: NavLinkType;
    onClick?: () => void;
}

const FooterLink: React.FC<FooterLinkProps> = (props) => {

    const [text, setText] = useState("");

    useEffect(() => {
        const setUp = async () => {
            const dict = props.langInfo.dict
            switch (props.type) {
                case NavLinkType.Home:
                    setText(dict.nav.home)
                    break;
                case NavLinkType.About:
                    setText(dict.nav.about)
                    break;
                case NavLinkType.Work:
                    setText(dict.nav.work)
                    break;
                case NavLinkType.Services:
                    setText(dict.nav.services)
                    break;
                case NavLinkType.Digitalization:
                    setText(dict.nav.digitalization)
                    break;
            }
        }
        setUp()
    }, []);

    return (
        <Link className={"nav-link"} href={props.type} onClick={props.onClick}>{text}</Link>
    );
}

export default FooterLink;