'use client'

import {usePathname, useRouter} from "next/navigation";
import {useEffect, useRef, useState} from "react";
import BlackwaterLogo from "../blackwaterLogo/blackwaterLogo";

const Footer: React.FC = () => {
    
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
                <a href="mailto:info@blackwaterdigital.sk" target="_blank" aria-label="Ikonka na email pre firmu Blackwater Digital">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.00014 4C2.89786 4 2.00014 4.89772 2.00014 6V6.48211C1.99995 6.49341 1.99995 6.50471 2.00014 6.51599V18C2.00014 19.1023 2.89786 20 4.00014 20H20.0001C21.1024 20 22.0001 19.1023 22.0001 18V6.51599C22.0003 6.50471 22.0003 6.49341 22.0001 6.48211V6C22.0001 4.89772 21.1024 4 20.0001 4H4.00014ZM19.9006 6H4.09969L12.0001 10.8281L19.9006 6ZM4.00014 8.28306V18H20.0001V8.28306L12.5216 12.8533C12.2015 13.0489 11.7988 13.0489 11.4787 12.8533L4.00014 8.28306Z" fill="#EAE3C9"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/blackwaterdigitalsk/" target="_blank" aria-label="Ikonka na LinkedIn pre firmu Blackwater Digital">
                    <svg width="24"
                        height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21 4.32353V19.6765C21 20.0275 20.8606 20.3641 20.6123 20.6123C20.3641 20.8606 20.0275 21 19.6765 21H4.32353C3.97251 21 3.63586 20.8606 3.38765 20.6123C3.13944 20.3641 3 20.0275 3 19.6765V4.32353C3 3.97251 3.13944 3.63586 3.38765 3.38765C3.63586 3.13944 3.97251 3 4.32353 3H19.6765C20.0275 3 20.3641 3.13944 20.6123 3.38765C20.8606 3.63586 21 3.97251 21 4.32353ZM8.29412 9.88235H5.64706V18.3529H8.29412V9.88235ZM8.53235 6.97059C8.53375 6.77036 8.49569 6.57182 8.42035 6.3863C8.34502 6.20078 8.23387 6.03191 8.09328 5.88935C7.95268 5.74678 7.78537 5.6333 7.60091 5.5554C7.41646 5.47749 7.21846 5.43668 7.01824 5.43529H6.97059C6.5634 5.43529 6.17289 5.59705 5.88497 5.88497C5.59705 6.17289 5.43529 6.5634 5.43529 6.97059C5.43529 7.37777 5.59705 7.76828 5.88497 8.05621C6.17289 8.34413 6.5634 8.50588 6.97059 8.50588C7.17083 8.51081 7.37008 8.47623 7.55696 8.40413C7.74383 8.33202 7.91467 8.2238 8.0597 8.08565C8.20474 7.94749 8.32113 7.78212 8.40223 7.59897C8.48333 7.41582 8.52755 7.21848 8.53235 7.01824V6.97059ZM18.3529 13.2071C18.3529 10.6606 16.7329 9.67059 15.1235 9.67059C14.5966 9.6442 14.0719 9.75644 13.6019 9.9961C13.1318 10.2358 12.7328 10.5945 12.4447 11.0365H12.3706V9.88235H9.88235V18.3529H12.5294V13.8476C12.4911 13.3862 12.6365 12.9283 12.9339 12.5735C13.2313 12.2186 13.6567 11.9954 14.1176 11.9524H14.2182C15.06 11.9524 15.6847 12.4818 15.6847 13.8159V18.3529H18.3318L18.3529 13.2071Z"
                            fill="#EAE3C9" />
                    </svg>
                </a>
                <a href="https://www.facebook.com/blackwaterdigitalsk" target="_blank" aria-label="Ikonka na Facebook pre firmu Blackwater Digital">
                    <svg width="24" height="24"
                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22 12.0607C22 6.504 17.5233 2 12 2C6.47667 2 2 6.504 2 12.0607C2 17.0833 5.656 21.2453 10.4373 22V14.9693H7.89867V12.06H10.4373V9.844C10.4373 7.32267 11.93 5.92933 14.2147 5.92933C15.308 5.92933 16.4533 6.126 16.4533 6.126V8.602H15.1913C13.9493 8.602 13.5627 9.378 13.5627 10.174V12.0607H16.336L15.8927 14.9687H13.5627V22C18.344 21.2453 22 17.0833 22 12.0607Z"
                            fill="#EAE3C9" />
                    </svg>
                </a>
                <a href="https://www.instagram.com/blackwaterdigitalsk/" target="_blank" aria-label="Ikonka na Instagram pre firmu Blackwater Digital">
                    <svg width="24" height="24"
                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12 3C9.5556 3 9.2496 3.0102 8.2896 3.054C7.3314 3.0978 6.6768 3.2502 6.1044 3.4728C5.5044 3.6984 4.9602 4.0524 4.5102 4.5108C4.05253 4.96028 3.69831 5.5041 3.4722 6.1044C3.2508 6.6768 3.0978 7.332 3.054 8.2902C3.0108 9.2496 3 9.555 3 12C3 14.445 3.0102 14.7504 3.054 15.7104C3.0978 16.6686 3.2502 17.3232 3.4728 17.8956C3.6984 18.4956 4.0524 19.0398 4.5108 19.4898C4.96029 19.9475 5.50411 20.3017 6.1044 20.5278C6.6768 20.7498 7.3314 20.9022 8.2896 20.946C9.2496 20.9898 9.5556 21 12 21C14.4444 21 14.7504 20.9898 15.7104 20.946C16.6686 20.9022 17.3232 20.7498 17.8956 20.5272C18.4956 20.3016 19.0398 19.9476 19.4898 19.4892C19.9475 19.0397 20.3017 18.4959 20.5278 17.8956C20.7498 17.3232 20.9022 16.6686 20.946 15.7104C20.9898 14.7504 21 14.4444 21 12C21 9.5556 20.9898 9.2496 20.946 8.2896C20.9022 7.3314 20.7498 6.6768 20.5272 6.1044C20.3012 5.50384 19.947 4.95979 19.4892 4.5102C19.0397 4.05253 18.4959 3.69831 17.8956 3.4722C17.3232 3.2508 16.668 3.0978 15.7098 3.054C14.7504 3.0108 14.445 3 12 3ZM12 4.6218C14.403 4.6218 14.688 4.6308 15.6372 4.674C16.5144 4.7142 16.9908 4.86 17.3082 4.9842C17.7282 5.1468 18.0282 5.3424 18.3432 5.6568C18.6582 5.9718 18.8532 6.2718 19.0158 6.6918C19.1394 7.0092 19.2858 7.4856 19.326 8.3628C19.3692 9.312 19.3782 9.597 19.3782 12C19.3782 14.403 19.3692 14.688 19.326 15.6372C19.2858 16.5144 19.14 16.9908 19.0158 17.3082C18.8718 17.6991 18.6419 18.0528 18.3432 18.3432C18.0528 18.642 17.6992 18.8718 17.3082 19.0158C16.9908 19.1394 16.5144 19.2858 15.6372 19.326C14.688 19.3692 14.4036 19.3782 12 19.3782C9.5964 19.3782 9.312 19.3692 8.3628 19.326C7.4856 19.2858 7.0092 19.14 6.6918 19.0158C6.30087 18.8718 5.9472 18.6419 5.6568 18.3432C5.35811 18.0528 5.12828 17.6991 4.9842 17.3082C4.8606 16.9908 4.7142 16.5144 4.674 15.6372C4.6308 14.688 4.6218 14.403 4.6218 12C4.6218 9.597 4.6308 9.312 4.674 8.3628C4.7142 7.4856 4.86 7.0092 4.9842 6.6918C5.1468 6.2718 5.3424 5.9718 5.6568 5.6568C5.94716 5.35803 6.30085 5.12819 6.6918 4.9842C7.0092 4.8606 7.4856 4.7142 8.3628 4.674C9.312 4.6308 9.597 4.6218 12 4.6218Z"
                            fill="#EAE3C9" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12 15.0028C11.6057 15.0028 11.2152 14.9251 10.8508 14.7742C10.4865 14.6233 10.1554 14.4021 9.87658 14.1232C9.59773 13.8444 9.37653 13.5133 9.22561 13.149C9.0747 12.7846 8.99702 12.3941 8.99702 11.9998C8.99702 11.6054 9.0747 11.2149 9.22561 10.8506C9.37653 10.4862 9.59773 10.1552 9.87658 9.87635C10.1554 9.59749 10.4865 9.37629 10.8508 9.22538C11.2152 9.07446 11.6057 8.99679 12 8.99679C12.7965 8.99679 13.5603 9.31318 14.1235 9.87635C14.6866 10.4395 15.003 11.2033 15.003 11.9998C15.003 12.7962 14.6866 13.5601 14.1235 14.1232C13.5603 14.6864 12.7965 15.0028 12 15.0028ZM12 7.37379C10.7731 7.37379 9.59649 7.86117 8.72895 8.72871C7.8614 9.59626 7.37402 10.7729 7.37402 11.9998C7.37402 13.2267 7.8614 14.4033 8.72895 15.2709C9.59649 16.1384 10.7731 16.6258 12 16.6258C13.2269 16.6258 14.4036 16.1384 15.2711 15.2709C16.1386 14.4033 16.626 13.2267 16.626 11.9998C16.626 10.7729 16.1386 9.59626 15.2711 8.72871C14.4036 7.86117 13.2269 7.37379 12 7.37379ZM17.9718 7.28979C17.9718 7.5798 17.8566 7.85794 17.6515 8.06301C17.4465 8.26808 17.1683 8.38329 16.8783 8.38329C16.5883 8.38329 16.3102 8.26808 16.1051 8.06301C15.9 7.85794 15.7848 7.5798 15.7848 7.28979C15.7848 6.99977 15.9 6.72164 16.1051 6.51657C16.3102 6.3115 16.5883 6.19629 16.8783 6.19629C17.1683 6.19629 17.4465 6.3115 17.6515 6.51657C17.8566 6.72164 17.9718 6.99977 17.9718 7.28979Z"
                            fill="#EAE3C9" />
                    </svg>
                </a>
                <a href="https://github.com/BlackwaterDigital" target="_blank" aria-label="Ikonka na GitHub pre firmu Blackwater Digital">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.24658C6.475 2.24658 2 6.72158 2 12.2466C2 16.6716 4.8625 20.4091 8.8375 21.7341C9.3375 21.8216 9.525 21.5216 9.525 21.2591C9.525 21.0216 9.5125 20.2341 9.5125 19.3966C7 19.8591 6.35 18.7841 6.15 18.2216C6.0375 17.9341 5.55 17.0466 5.125 16.8091C4.775 16.6216 4.275 16.1591 5.1125 16.1466C5.9 16.1341 6.4625 16.8716 6.65 17.1716C7.55 18.6841 8.9875 18.2591 9.5625 17.9966C9.65 17.3466 9.9125 16.9091 10.2 16.6591C7.975 16.4091 5.65 15.5466 5.65 11.7216C5.65 10.6341 6.0375 9.73408 6.675 9.03408C6.575 8.78408 6.225 7.75908 6.775 6.38408C6.775 6.38408 7.6125 6.12158 9.525 7.40908C10.325 7.18408 11.175 7.07158 12.025 7.07158C12.875 7.07158 13.725 7.18408 14.525 7.40908C16.4375 6.10908 17.275 6.38408 17.275 6.38408C17.825 7.75908 17.475 8.78408 17.375 9.03408C18.0125 9.73408 18.4 10.6216 18.4 11.7216C18.4 15.5591 16.0625 16.4091 13.8375 16.6591C14.2 16.9716 14.5125 17.5716 14.5125 18.5091C14.5125 19.8466 14.5 20.9216 14.5 21.2591C14.5 21.5216 14.6875 21.8341 15.1875 21.7341C17.1727 21.0639 18.8977 19.7881 20.1198 18.0861C21.3419 16.3842 21.9995 14.3418 22 12.2466C22 6.72158 17.525 2.24658 12 2.24658Z"
                            fill="#EAE3C9" />
                    </svg>
                </a>
            </div>
        </div>
    </footer>
    );
}

export default Footer;