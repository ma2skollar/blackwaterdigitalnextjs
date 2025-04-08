import Link from "next/link";
import EmailIcon from "../svg/emailIcon";
import FacebookIcon from "../svg/facebookIcon";
import GitHubIcon from "../svg/githubIcon";
import InstagramIcon from "../svg/instagramIcon";
import LinkedInIcon from "../svg/linkedinIcon";
import { LangProps } from "@/app/[lang]/page";
import { useEffect, useState } from "react";

const SocialMediaIcon = ({type}: {type: FooterSocialButtonType}) => {
    switch (type) {
        case FooterSocialButtonType.Email:
            return <EmailIcon />;
        case FooterSocialButtonType.LinkedIn:
            return <LinkedInIcon />;
        case FooterSocialButtonType.Facebook:
            return <FacebookIcon />;
        case FooterSocialButtonType.Instagram:
            return <InstagramIcon />;
        case FooterSocialButtonType.GitHub:
            return <GitHubIcon />;
        default:
            return null;
    }
}

interface FooterSocialButtonProps extends LangProps {
    type: FooterSocialButtonType;
    onClick?: () => void;
}
export enum FooterSocialButtonType {
    Email = "mailto:info@blackwaterdigital.sk",
    LinkedIn = "https://www.linkedin.com/company/blackwaterdigitalsk/",
    Facebook = "https://www.facebook.com/blackwaterdigitalsk",
    Instagram = "https://www.instagram.com/blackwaterdigitalsk/",
    GitHub = "https://github.com/BlackwaterDigital",
}

const FooterSocialButton: React.FC<FooterSocialButtonProps> = (props) => {

    const [ariaLabel, setAriaLabel] = useState("");

    useEffect(() => {
        const setUp = async () => {
            const dict = props.langInfo.dict
            switch (props.type) {
                case FooterSocialButtonType.Email:
                    setAriaLabel(dict.footer.socialLinkLabels.email);
                    break;
                case FooterSocialButtonType.LinkedIn:
                    setAriaLabel(dict.footer.socialLinkLabels.linkedin);
                    break;
                case FooterSocialButtonType.Facebook:
                    setAriaLabel(dict.footer.socialLinkLabels.facebook);
                    break;
                case FooterSocialButtonType.Instagram:
                    setAriaLabel(dict.footer.socialLinkLabels.instagram);
                    break;
                case FooterSocialButtonType.GitHub:
                    setAriaLabel(dict.footer.socialLinkLabels.github);
                    break;
            }
        }
        setUp()
    }, []);

    return (
        <Link href={props.type} target={"_blank"} aria-label={ariaLabel}>
            <SocialMediaIcon type={props.type} />
        </Link>
    )
}

export default FooterSocialButton;