import './headerButton.css'
import Link from "next/link";
import {useEffect, useState} from "react";
import {LangProps} from "@/app/[lang]/page";

interface HeaderButtonProps extends LangProps {
    type: HeaderButtonType;
    onClick?: () => void;
}

export enum HeaderButtonType {
    Home = "/",
    About = "/about/",
    Work = "/our-work/",
    Services = "/services/",
    //Contact = "/contact/",
    Digitalization = "/digitalization/"
}

const HeaderButton: React.FC<HeaderButtonProps> = (props) => {

    const [text, setText] = useState("");

    useEffect(() => {
        const setUp = async () => {
            const dict = props.langInfo.dict
            switch (props.type) {
                case HeaderButtonType.Home:
                    setText(dict.nav.home)
                    break;
                case HeaderButtonType.About:
                    setText(dict.nav.about)
                    break;
                case HeaderButtonType.Work:
                    setText(dict.nav.work)
                    break;
                case HeaderButtonType.Services:
                    setText(dict.nav.services)
                    break;
                case HeaderButtonType.Digitalization:
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

export default HeaderButton;