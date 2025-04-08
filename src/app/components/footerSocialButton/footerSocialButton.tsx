import Link from "next/link";
import EmailIcon from "../svg/emailIcon";
import FacebookIcon from "../svg/facebookIcon";
import GitHubIcon from "../svg/githubIcon";
import InstagramIcon from "../svg/instagramIcon";
import LinkedInIcon from "../svg/linkedinIcon";
import { LangProps } from "@/app/[lang]/page";
import { useEffect, useState } from "react";

const SocialMediaIcon = ({type}: {type: string}) => {
    switch (type) {
        case "email":
            return <EmailIcon />;
        case "linkedin":
            return <LinkedInIcon />;
        case "facebook":
            return <FacebookIcon />;
        case "instagram":
            return <InstagramIcon />;
        case "twitter":
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
    Email = "email",
    LinkedIn = "github",
    Facebook = "facebook",
    Instagram = "instagram",
    GitHub = "github",
}

const FooterSocialButton: React.FC<FooterSocialButtonProps> = (props) => {

    const [link, setLink] = useState("");
    const [ariaLabel, setAriaLabel] = useState("");

    useEffect(() => {
        const setUp = async () => {
            const dict = props.langInfo.dict
            switch (props.type) {
                case FooterSocialButtonType.Email:
                    setLink(dict.footer.socialLinkLabels.email.link);
                    setAriaLabel(dict.footer.socialLinkLabels.email.label);
                    break;
                case FooterSocialButtonType.LinkedIn:
                    setLink(dict.footer.socialLinkLabels.linkedin.link);
                    setAriaLabel(dict.footer.socialLinkLabels.linkedin.label);
                    break;
                case FooterSocialButtonType.Facebook:
                    setLink(dict.footer.socialLinkLabels.facebook.link);
                    setAriaLabel(dict.footer.socialLinkLabels.facebook.label);
                    break;
                case FooterSocialButtonType.Instagram:
                    setLink(dict.footer.socialLinkLabels.instagram.link);
                    setAriaLabel(dict.footer.socialLinkLabels.instagram.label);
                    break;
                case FooterSocialButtonType.GitHub:
                    setLink(dict.footer.socialLinkLabels.github.link);
                    setAriaLabel(dict.footer.socialLinkLabels.github.label);
                    break;
            }
        }
        setUp()
    }, []);

    return (
        <Link href={link} target={"_blank"} aria-label={ariaLabel} onClick={props.onClick}>
            <SocialMediaIcon type={props.type} />
        </Link>
    )
}

export default FooterSocialButton;