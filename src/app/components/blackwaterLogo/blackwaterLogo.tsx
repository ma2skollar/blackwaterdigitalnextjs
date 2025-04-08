'use client'

import { usePathname, useRouter } from "next/navigation";
import './blackwaterLogo.css'

const BlackwaterLogo: React.FC = () => {

    const pathname = usePathname()
    const router = useRouter()

    const handleNavigateHome = () => {
        const localePath = pathname.split("/").slice(0, 3).join("/")
        router.push(localePath);
    }

    return (
        <div className="nav-logo" onClick={handleNavigateHome}>
            <svg width="149" height="80" viewBox="0 0 149 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_22_97)">
                    <path d="M143.189 5.4054H5.40332V74.5946H86.9942V40.2703H143.189V5.4054Z" fill="#0D1410" />
                    <path
                        d="M20.8679 25.7622L20.1547 25.1784C19.8953 24.9622 19.7116 24.8432 19.6035 24.8216C19.4955 24.7784 19.2793 24.7568 18.9551 24.7568H11.3688V32.8649H19.8305C20.2195 32.8649 20.4681 32.8541 20.5761 32.8324C20.6842 32.7892 20.8355 32.6919 21.03 32.5405C21.2245 32.3892 21.3326 32.2703 21.3542 32.1838C21.3975 32.0757 21.4191 31.8595 21.4191 31.5351V26.9297C21.4191 26.5838 21.3975 26.3568 21.3542 26.2486C21.311 26.1405 21.1489 25.9784 20.8679 25.7622ZM11.3688 14.7027V22.4865H18.404C18.793 22.4865 19.0416 22.4757 19.1497 22.4541C19.2793 22.4108 19.4522 22.3027 19.6684 22.1297L20.5113 21.4486C20.7707 21.2324 20.922 21.0703 20.9652 20.9622C21.0084 20.8541 21.03 20.6162 21.03 20.2486V16.0324C21.03 15.7081 21.0084 15.5027 20.9652 15.4162C20.9436 15.3081 20.8355 15.1784 20.641 15.027C20.4465 14.8757 20.2952 14.7892 20.1871 14.7676C20.079 14.7243 19.8305 14.7027 19.4414 14.7027H11.3688ZM21.2245 23.2649V23.427C21.4839 23.427 21.7865 23.5676 22.1323 23.8486L23.6885 25.1135C23.883 25.2865 24.0019 25.4486 24.0451 25.6C24.1099 25.7297 24.1424 25.9892 24.1424 26.3784V32.2162C24.1424 32.8649 23.883 33.4054 23.3643 33.8378C23.1914 33.9676 22.932 34.1838 22.5862 34.4865C22.0675 34.9189 21.5487 35.1351 21.03 35.1351H8.64551V12.4324H20.641C21.1597 12.4324 21.6784 12.6486 22.1972 13.0811L22.9752 13.7297C23.494 14.1622 23.7533 14.7027 23.7533 15.3513V20.8973C23.7533 21.3513 23.5804 21.7189 23.2346 22L22.1323 22.8432C21.7865 23.1243 21.4839 23.2649 21.2245 23.2649Z"
                        fill="#EAE3C9" />
                    <path
                        d="M25.4496 11.1351H28.1728V31.0811C28.1728 31.5784 28.1945 31.8919 28.2377 32.0216C28.2809 32.1297 28.4322 32.2703 28.6916 32.4432C28.9725 32.6595 29.1346 32.8324 29.1779 32.9622C29.2427 33.0703 29.2751 33.373 29.2751 33.8703V35.1351H28.3025C27.8919 35.1351 27.6217 35.1135 27.492 35.0703C27.3623 35.027 27.1354 34.8973 26.8112 34.6811L26.098 34.1946C25.7738 33.9784 25.5792 33.8054 25.5144 33.6757C25.4712 33.5459 25.4496 33.2324 25.4496 32.7351V11.1351Z"
                        fill="#EAE3C9" />
                    <path
                        d="M41.4991 33.8378H41.3694C41.3694 34.0973 41.1316 34.3676 40.6561 34.6486C40.2671 34.8865 39.9969 35.027 39.8456 35.0703C39.716 35.1135 39.4566 35.1351 39.0676 35.1351H33.5237C33.005 35.1351 32.4863 34.9189 31.9675 34.4865L31.1894 33.8378C30.6707 33.4054 30.4114 32.8649 30.4114 32.2162V28.3243C30.4114 27.6757 30.6707 27.1351 31.1894 26.7027L31.9675 26.0541C32.4863 25.6216 33.005 25.4054 33.5237 25.4054H39.3269C39.7376 25.4054 39.9969 25.427 40.105 25.4703C40.2131 25.4919 40.3536 25.5784 40.5265 25.7297C40.7858 25.9459 40.9155 26.1622 40.9155 26.3784H41.0452V22.5189C41.0452 22.1946 41.0236 21.9892 40.9804 21.9027C40.9587 21.7946 40.8507 21.6649 40.6561 21.5135C40.4616 21.3622 40.3103 21.2757 40.2023 21.2541C40.0942 21.2108 39.8456 21.1892 39.4566 21.1892H34.2045C33.8155 21.1892 33.5453 21.2216 33.394 21.2865C33.2643 21.3297 33.005 21.5135 32.6159 21.8378L30.6707 20.2162L31.4488 19.5676C31.8379 19.2432 32.0972 19.0595 32.2269 19.0162C32.3782 18.9513 32.6484 18.9189 33.0374 18.9189H40.6561C41.1749 18.9189 41.6936 19.1351 42.2123 19.5676L42.9904 20.2162C43.5091 20.6486 43.7685 21.1892 43.7685 21.8378V31.5351C43.7685 31.8595 43.7793 32.0757 43.8009 32.1838C43.8441 32.2703 43.963 32.3892 44.1575 32.5405C44.352 32.6919 44.4601 32.8216 44.4817 32.9297C44.525 33.0162 44.5466 33.2216 44.5466 33.5459V35.1351H43.4119C43.0228 35.1351 42.7527 35.1135 42.6014 35.0703C42.4717 35.0054 42.2772 34.8649 42.0178 34.6486C41.672 34.3676 41.4991 34.0973 41.4991 33.8378ZM33.1347 29.0054V31.5351C33.1347 31.8595 33.1455 32.0757 33.1671 32.1838C33.2103 32.2703 33.3292 32.3892 33.5237 32.5405C33.7182 32.6919 33.8695 32.7892 33.9776 32.8324C34.0857 32.8541 34.3342 32.8649 34.7232 32.8649H38.6785C39.0676 32.8649 39.3269 32.8432 39.4566 32.8C39.6079 32.7568 39.8781 32.6162 40.2671 32.3784C40.6561 32.1405 40.8831 31.9676 40.9479 31.8595C41.0128 31.7513 41.0452 31.5351 41.0452 31.2108V29.0054C41.0452 28.6811 41.0236 28.4757 40.9804 28.3892C40.9587 28.2811 40.8507 28.1513 40.6561 28C40.4616 27.8486 40.3103 27.7622 40.2023 27.7405C40.0942 27.6973 39.8456 27.6757 39.4566 27.6757H34.7232C34.3342 27.6757 34.0857 27.6973 33.9776 27.7405C33.8695 27.7622 33.7182 27.8486 33.5237 28C33.3292 28.1513 33.2103 28.2811 33.1671 28.3892C33.1455 28.4757 33.1347 28.6811 33.1347 29.0054Z"
                        fill="#EAE3C9" />
                    <path
                        d="M58.1762 23.1351H55.4529V22.5189C55.4529 22.1946 55.4313 21.9892 55.3881 21.9027C55.3665 21.7946 55.2584 21.6649 55.0639 21.5135C54.8694 21.3622 54.7181 21.2757 54.61 21.2541C54.5019 21.2108 54.2534 21.1892 53.8643 21.1892H49.52C49.131 21.1892 48.8824 21.2108 48.7744 21.2541C48.6663 21.2757 48.515 21.3622 48.3205 21.5135C48.126 21.6649 48.0071 21.7946 47.9639 21.9027C47.9422 21.9892 47.9314 22.1946 47.9314 22.5189V31.5351C47.9314 31.8595 47.9422 32.0757 47.9639 32.1838C48.0071 32.2703 48.126 32.3892 48.3205 32.5405C48.515 32.6919 48.6663 32.7892 48.7744 32.8324C48.8824 32.8541 49.131 32.8649 49.52 32.8649H53.8643C54.2534 32.8649 54.5019 32.8541 54.61 32.8324C54.7181 32.7892 54.8694 32.6919 55.0639 32.5405C55.2584 32.3892 55.3665 32.2703 55.3881 32.1838C55.4313 32.0757 55.4529 31.8595 55.4529 31.5351V30.9189H58.1762V32.2162C58.1762 32.8649 57.9169 33.4054 57.3981 33.8378L56.6201 34.4865C56.1013 34.9189 55.5826 35.1351 55.0639 35.1351H48.3205C47.8018 35.1351 47.283 34.9189 46.7643 34.4865L45.9862 33.8378C45.4675 33.4054 45.2081 32.8649 45.2081 32.2162V21.8378C45.2081 21.1892 45.4675 20.6486 45.9862 20.2162L46.7643 19.5676C47.283 19.1351 47.8018 18.9189 48.3205 18.9189H55.0639C55.5826 18.9189 56.1013 19.1351 56.6201 19.5676L57.3981 20.2162C57.9169 20.6486 58.1762 21.1892 58.1762 21.8378V23.1351Z"
                        fill="#EAE3C9" />
                    <path
                        d="M58.6511 35.1351V11.1351H61.3744V25.8919H64.0977L67.0155 21.1243C67.2533 20.7568 67.4262 20.5081 67.5343 20.3784C67.6639 20.2486 67.8909 20.0649 68.2151 19.827L68.8311 19.4054C69.1769 19.1676 69.4146 19.027 69.5443 18.9838C69.6956 18.9405 69.9658 18.9189 70.3548 18.9189H71.0032V20.1838C71.0032 20.6811 70.9708 20.9946 70.906 21.1243C70.8411 21.2324 70.6142 21.3946 70.2251 21.6108L69.8685 21.8054C69.5443 22 69.3282 22.1622 69.2201 22.2919C69.112 22.4 68.9283 22.6378 68.669 23.0054L66.5617 26.2811C66.3671 26.5838 66.1726 26.7892 65.9781 26.8973V27.027C66.1726 27.0703 66.4212 27.3189 66.7238 27.773L71.4571 35.1351H68.442L64.1301 28.1622H61.3744V35.1351H58.6511Z"
                        fill="#EAE3C9" />
                    <path
                        d="M81.5074 21.9027L78.2978 35.1351H74.764L70.1603 18.9189H72.7863L76.2877 32.3784C76.3958 32.7027 76.4498 32.9622 76.4498 33.1568H76.5795C76.5795 32.9622 76.6335 32.7027 76.7416 32.3784L80.0809 18.9189H83.3877L86.727 32.3784C86.8351 32.8108 86.8891 33.0703 86.8891 33.1568H87.0188C87.0188 32.9622 87.0728 32.7027 87.1809 32.3784L90.6823 18.9189H93.3083L88.7047 35.1351H85.1709L81.9613 21.9027C81.8532 21.4703 81.7991 21.2108 81.7991 21.1243H81.6695C81.6695 21.2108 81.6154 21.4703 81.5074 21.9027Z"
                        fill="#EAE3C9" />
                    <path
                        d="M103.914 33.8378H103.785C103.785 34.0973 103.547 34.3676 103.071 34.6486C102.682 34.8865 102.412 35.027 102.261 35.0703C102.131 35.1135 101.872 35.1351 101.483 35.1351H95.9389C95.4202 35.1351 94.9015 34.9189 94.3827 34.4865L93.6047 33.8378C93.0859 33.4054 92.8266 32.8649 92.8266 32.2162V28.3243C92.8266 27.6757 93.0859 27.1351 93.6047 26.7027L94.3827 26.0541C94.9015 25.6216 95.4202 25.4054 95.9389 25.4054H101.742C102.153 25.4054 102.412 25.427 102.52 25.4703C102.628 25.4919 102.769 25.5784 102.942 25.7297C103.201 25.9459 103.331 26.1622 103.331 26.3784H103.46V22.5189C103.46 22.1946 103.439 21.9892 103.396 21.9027C103.374 21.7946 103.266 21.6649 103.071 21.5135C102.877 21.3622 102.726 21.2757 102.617 21.2541C102.509 21.2108 102.261 21.1892 101.872 21.1892H96.6197C96.2307 21.1892 95.9605 21.2216 95.8092 21.2865C95.6796 21.3297 95.4202 21.5135 95.0312 21.8378L93.0859 20.2162L93.864 19.5676C94.2531 19.2432 94.5124 19.0595 94.6421 19.0162C94.7934 18.9513 95.0636 18.9189 95.4526 18.9189H103.071C103.59 18.9189 104.109 19.1351 104.628 19.5676L105.406 20.2162C105.924 20.6486 106.184 21.1892 106.184 21.8378V31.5351C106.184 31.8595 106.195 32.0757 106.216 32.1838C106.259 32.2703 106.378 32.3892 106.573 32.5405C106.767 32.6919 106.875 32.8216 106.897 32.9297C106.94 33.0162 106.962 33.2216 106.962 33.5459V35.1351H105.827C105.438 35.1351 105.168 35.1135 105.017 35.0703C104.887 35.0054 104.692 34.8649 104.433 34.6486C104.087 34.3676 103.914 34.0973 103.914 33.8378ZM95.5499 29.0054V31.5351C95.5499 31.8595 95.5607 32.0757 95.5823 32.1838C95.6255 32.2703 95.7444 32.3892 95.9389 32.5405C96.1334 32.6919 96.2847 32.7892 96.3928 32.8324C96.5009 32.8541 96.7494 32.8649 97.1385 32.8649H101.094C101.483 32.8649 101.742 32.8432 101.872 32.8C102.023 32.7568 102.293 32.6162 102.682 32.3784C103.071 32.1405 103.298 31.9676 103.363 31.8595C103.428 31.7513 103.46 31.5351 103.46 31.2108V29.0054C103.46 28.6811 103.439 28.4757 103.396 28.3892C103.374 28.2811 103.266 28.1513 103.071 28C102.877 27.8486 102.726 27.7622 102.617 27.7405C102.509 27.6973 102.261 27.6757 101.872 27.6757H97.1385C96.7494 27.6757 96.5009 27.6973 96.3928 27.7405C96.2847 27.7622 96.1334 27.8486 95.9389 28C95.7444 28.1513 95.6255 28.2811 95.5823 28.3892C95.5607 28.4757 95.5499 28.6811 95.5499 29.0054Z"
                        fill="#EAE3C9" />
                    <path
                        d="M111.352 14.3784V18.9189H115.501C115.782 19.1351 115.945 19.3081 115.988 19.4378C116.053 19.5459 116.085 19.8486 116.085 20.3459V21.1892H111.352V31.5351C111.352 31.8595 111.362 32.0757 111.384 32.1838C111.427 32.2703 111.546 32.3892 111.741 32.5405C111.935 32.6919 112.087 32.7892 112.195 32.8324C112.303 32.8541 112.551 32.8649 112.94 32.8649H115.891C116.171 33.0811 116.334 33.2541 116.377 33.3838C116.442 33.4919 116.474 33.7946 116.474 34.2919V35.1351H111.741C111.222 35.1351 110.703 34.9189 110.185 34.4865L109.406 33.8378C108.888 33.4054 108.628 32.8649 108.628 32.2162V21.1892H107.072C106.791 20.973 106.618 20.8108 106.553 20.7027C106.51 20.573 106.489 20.2595 106.489 19.7622V18.9189H108.628V14.3784H111.352Z"
                        fill="#EAE3C9" />
                    <path
                        d="M128.824 32.2162L130.769 33.8378L129.991 34.4865C129.602 34.8108 129.332 35.0054 129.181 35.0703C129.051 35.1135 128.791 35.1351 128.402 35.1351H119.746C119.228 35.1351 118.709 34.9189 118.19 34.4865L117.412 33.8378C116.893 33.4054 116.634 32.8649 116.634 32.2162V21.8378C116.634 21.1892 116.893 20.6486 117.412 20.2162L118.19 19.5676C118.709 19.1351 119.228 18.9189 119.746 18.9189H127.3C127.732 18.9189 128.251 19.1351 128.856 19.5676L129.667 20.2162C130.186 20.6054 130.445 21.1459 130.445 21.8378V28.4865H119.357V31.5351C119.357 31.8595 119.368 32.0757 119.39 32.1838C119.433 32.2703 119.552 32.3892 119.746 32.5405C119.941 32.6919 120.092 32.7892 120.2 32.8324C120.308 32.8541 120.557 32.8649 120.946 32.8649H127.235C127.624 32.8649 127.884 32.8432 128.013 32.8C128.165 32.7351 128.435 32.5405 128.824 32.2162ZM127.722 26.3784V22.5189C127.722 22.1946 127.7 21.9892 127.657 21.9027C127.635 21.7946 127.527 21.6649 127.333 21.5135C127.138 21.3622 126.987 21.2757 126.879 21.2541C126.771 21.2108 126.522 21.1892 126.133 21.1892H120.946C120.557 21.1892 120.308 21.2108 120.2 21.2541C120.092 21.2757 119.941 21.3622 119.746 21.5135C119.552 21.6649 119.433 21.7946 119.39 21.9027C119.368 21.9892 119.357 22.1946 119.357 22.5189V26.3784H127.722Z"
                        fill="#EAE3C9" />
                    <path
                        d="M131.09 18.9189H132.225C132.614 18.9189 132.873 18.9513 133.003 19.0162C133.154 19.0595 133.359 19.1892 133.619 19.4054C133.965 19.6865 134.138 19.9568 134.138 20.2162H134.267C134.267 19.9568 134.505 19.6865 134.98 19.4054C135.369 19.1676 135.629 19.027 135.759 18.9838C135.91 18.9405 136.18 18.9189 136.569 18.9189H139.552C140.07 18.9189 140.589 19.1351 141.108 19.5676L141.886 20.2162L139.941 21.8378L139.552 21.5135C139.357 21.3622 139.206 21.2757 139.098 21.2541C138.99 21.2108 138.741 21.1892 138.352 21.1892H136.958C136.569 21.1892 136.299 21.2108 136.148 21.2541C136.018 21.2973 135.759 21.4378 135.369 21.6757C134.98 21.9135 134.753 22.0865 134.689 22.1946C134.624 22.3027 134.591 22.5189 134.591 22.8432V35.1351H131.868V22.5189C131.868 22.1946 131.846 21.9892 131.803 21.9027C131.782 21.7946 131.674 21.6649 131.479 21.5135C131.285 21.3622 131.166 21.2432 131.122 21.1568C131.101 21.0486 131.09 20.8324 131.09 20.5081V18.9189Z"
                        fill="#EAE3C9" />
                    <path d="M80.9506 58.1181V40.3243H78.2273V57.7573L80.9506 58.1181Z" fill="#EAE3C9" />
                    <path
                        d="M75.9771 57.4591V51.027C75.9771 50.3783 75.7178 49.8378 75.199 49.4054L74.421 48.7567C73.9022 48.3243 73.3835 48.1081 72.8648 48.1081H65.246C64.857 48.1081 64.5868 48.1405 64.4355 48.2054C64.3059 48.2486 64.0465 48.4324 63.6575 48.7567L62.8794 49.4054L64.8246 51.027C65.2136 50.7027 65.473 50.5189 65.6027 50.4756C65.754 50.4108 66.0241 50.3783 66.4132 50.3783H71.6652C72.0543 50.3783 72.3028 50.4 72.4109 50.4432C72.519 50.4648 72.6703 50.5513 72.8648 50.7027C73.0593 50.854 73.1674 50.9837 73.189 51.0918C73.2322 51.1783 73.2538 51.3837 73.2538 51.7081V55.5675H73.1242C73.1242 55.3513 72.9945 55.1351 72.7351 54.9189C72.5622 54.7675 72.4217 54.681 72.3136 54.6594C72.2056 54.6162 71.9462 54.5946 71.5356 54.5946H65.7323C65.2136 54.5946 64.6949 54.8108 64.1762 55.2432L63.501 55.8061L71.4917 56.8648H71.6652C72.0543 56.8648 72.3028 56.8864 72.4109 56.9297C72.4658 56.9407 72.5319 56.9684 72.6091 57.0129L75.9771 57.4591Z"
                        fill="#EAE3C9" />
                    <path
                        d="M56.3652 54.8606V50.3783H61.0985V49.5351C61.0985 49.0378 61.0661 48.7351 61.0013 48.627C60.958 48.4973 60.7959 48.3243 60.515 48.1081H56.3652V43.5675H53.6419V48.1081H51.5022V48.9513C51.5022 49.4486 51.5238 49.7621 51.567 49.8918C51.6318 50 51.8047 50.1621 52.0857 50.3783H53.6419V54.4997L56.3652 54.8606Z"
                        fill="#EAE3C9" />
                    <path d="M51.2132 54.1779V48.1081H48.4899V53.8171L51.2132 54.1779Z" fill="#EAE3C9" />
                    <path
                        d="M46.2797 53.5242V51.7081C46.2797 51.3837 46.2905 51.1783 46.3121 51.0918C46.3554 50.9837 46.4742 50.854 46.6688 50.7027C46.8633 50.5513 46.9713 50.4324 46.993 50.3459C47.0362 50.2378 47.0578 50.0216 47.0578 49.6973V48.1081H45.9231C45.5341 48.1081 45.2639 48.1405 45.1126 48.2054C44.9829 48.2486 44.7884 48.3783 44.529 48.5946C44.1832 48.8756 44.0103 49.1459 44.0103 49.4054H43.8806C43.8806 49.1459 43.6429 48.8756 43.1674 48.5946C42.7783 48.3567 42.5082 48.2162 42.3569 48.1729C42.2272 48.1297 41.9678 48.1081 41.5788 48.1081H35.3865C34.8678 48.1081 34.3491 48.3243 33.8304 48.7567L33.0523 49.4054C32.5336 49.8378 32.2742 50.3783 32.2742 51.027V51.6685L34.9975 52.0293V51.7081C34.9975 51.3837 35.0083 51.1783 35.0299 51.0918C35.0731 50.9837 35.192 50.854 35.3865 50.7027C35.5811 50.5513 35.7323 50.4648 35.8404 50.4432C35.9485 50.4 36.197 50.3783 36.5861 50.3783H41.1897C41.5788 50.3783 41.8382 50.4 41.9678 50.4432C42.1191 50.4864 42.3893 50.627 42.7783 50.8648C43.1674 51.1027 43.3943 51.2756 43.4592 51.3837C43.524 51.4918 43.5564 51.7081 43.5564 52.0324V53.1634L46.2797 53.5242Z"
                        fill="#EAE3C9" />
                    <path d="M30.8505 51.4798V48.1081H28.1272V51.119L30.8505 51.4798Z" fill="#EAE3C9" />
                    <path
                        d="M26.2179 50.866V46.1621C26.2179 45.7297 25.9586 45.2973 25.4399 44.8648L22.3275 42.2702C21.852 41.8378 21.3333 41.6216 20.7714 41.6216H8.77588V48.555L11.4992 48.9158V43.8918H19.6042C20.1662 43.8918 20.6849 44.1081 21.1604 44.5405L22.7166 45.8378C23.2353 46.2702 23.4947 46.7027 23.4947 47.1351V50.5052L26.2179 50.866Z"
                        fill="#EAE3C9" />
                    <path
                        d="M31.1423 43.0486V43.3081C31.1423 43.7189 31.1207 43.9783 31.0774 44.0864C31.0558 44.1946 30.9586 44.3243 30.7857 44.4756C30.6127 44.6486 30.2129 44.7351 29.5861 44.7351H29.424C28.9485 44.7351 28.6567 44.7243 28.5487 44.7027C28.4406 44.681 28.3109 44.6054 28.1596 44.4756C28.0083 44.3243 27.9111 44.1946 27.8678 44.0864C27.8462 43.9783 27.8354 43.7189 27.8354 43.3081V43.0486C27.8354 42.6378 27.8462 42.3783 27.8678 42.2702C27.9111 42.1621 28.0191 42.0324 28.192 41.881C28.3217 41.7513 28.4406 41.6756 28.5487 41.654C28.6567 41.6324 28.9485 41.6216 29.424 41.6216H29.5537C30.2021 41.6216 30.6235 41.7081 30.8181 41.881C30.9694 42.0324 31.0558 42.1621 31.0774 42.2702C31.1207 42.3783 31.1423 42.6378 31.1423 43.0486Z"
                        fill="#EAE3C9" />
                    <path
                        d="M51.5049 43.0486V43.3081C51.5049 43.7189 51.4833 43.9783 51.4401 44.0864C51.4185 44.1946 51.3212 44.3243 51.1483 44.4756C50.9754 44.6486 50.5756 44.7351 49.9488 44.7351H49.7867C49.3112 44.7351 49.0194 44.7243 48.9113 44.7027C48.8033 44.681 48.6736 44.6054 48.5223 44.4756C48.371 44.3243 48.2737 44.1946 48.2305 44.0864C48.2089 43.9783 48.1981 43.7189 48.1981 43.3081V43.0486C48.1981 42.6378 48.2089 42.3783 48.2305 42.2702C48.2737 42.1621 48.3818 42.0324 48.5547 41.881C48.6844 41.7513 48.8033 41.6756 48.9113 41.654C49.0194 41.6324 49.3112 41.6216 49.7867 41.6216H49.9164C50.5648 41.6216 50.9862 41.7081 51.1807 41.881C51.332 42.0324 51.4185 42.1621 51.4401 42.2702C51.4833 42.3783 51.5049 42.6378 51.5049 43.0486Z"
                        fill="#EAE3C9" />
                    <path
                        d="M10.397 48.7698V64.3243H22.3924C22.9544 64.3243 23.4731 64.1081 23.9486 63.6757L27.061 61.0811C27.5797 60.6487 27.839 60.2162 27.839 59.7838V51.0809L25.1157 50.72V58.8108C25.1157 59.2432 24.8564 59.6757 24.3377 60.1081L22.7815 61.4054C22.306 61.8378 21.7873 62.0541 21.2253 62.0541H13.1203V49.1306L10.397 48.7698Z"
                        fill="#D3B58D" />
                    <path d="M29.7483 51.3338V64.3243H32.4716V51.6947L29.7483 51.3338Z" fill="#D3B58D" />
                    <path
                        d="M33.8953 51.8833V61.4054C33.8953 62.0541 34.1546 62.5946 34.6734 63.027L35.4515 63.6757C35.9702 64.1081 36.4889 64.3243 37.0076 64.3243H42.7136C43.2323 64.3243 43.751 64.1081 44.2697 63.6757C44.7452 63.2649 45.0046 62.9622 45.0478 62.7676H45.1775V69.1568C45.1775 69.4811 45.1559 69.6865 45.1127 69.773C45.0911 69.8811 44.983 70.0108 44.7885 70.1622C44.5939 70.3135 44.4427 70.4 44.3346 70.4216C44.2265 70.4649 43.978 70.4865 43.5889 70.4865H35.9053C35.6244 70.7027 35.4515 70.8649 35.3866 70.973C35.3434 71.1027 35.3218 71.4162 35.3218 71.9135V72.7568H44.7885C45.3072 72.7568 45.8259 72.5405 46.3446 72.1081L47.1227 71.4595C47.6414 71.027 47.9008 70.4865 47.9008 69.8378V53.739L45.1775 53.3782V60.1081C45.1775 60.5405 44.9182 60.973 44.3994 61.4054C43.8807 61.8378 43.362 62.0541 42.8433 62.0541H38.2072C37.8181 62.0541 37.5696 62.0432 37.4615 62.0216C37.3534 61.9784 37.2021 61.8811 37.0076 61.7297C36.8131 61.5784 36.6942 61.4595 36.651 61.373C36.6294 61.2649 36.6186 61.0487 36.6186 60.7243V52.2441L33.8953 51.8833Z"
                        fill="#D3B58D" />
                    <path d="M50.111 54.0319V64.3243H52.8342V54.3927L50.111 54.0319Z" fill="#D3B58D" />
                    <path
                        d="M55.263 54.7145V61.4054C55.263 62.0541 55.5223 62.5946 56.0411 63.027L56.8192 63.6757C57.3379 64.1081 57.8566 64.3243 58.3753 64.3243H63.1087V63.4811C63.1087 62.9838 63.0762 62.6811 63.0114 62.573C62.9682 62.4432 62.8061 62.2703 62.5251 62.0541H59.5749C59.1858 62.0541 58.9373 62.0432 58.8292 62.0216C58.7211 61.9784 58.5698 61.8811 58.3753 61.7297C58.1808 61.5784 58.0619 61.4595 58.0187 61.373C57.9971 61.2649 57.9863 61.0487 57.9863 60.7243V55.0754L55.263 54.7145Z"
                        fill="#D3B58D" />
                    <path
                        d="M64.9056 55.9922C64.4626 56.407 64.2411 56.9141 64.2411 57.5135V61.4054C64.2411 62.0541 64.5005 62.5946 65.0192 63.027L65.7973 63.6757C66.316 64.1081 66.8347 64.3243 67.3534 64.3243H72.8973C73.2863 64.3243 73.5457 64.3027 73.6754 64.2595C73.8267 64.2162 74.0968 64.0757 74.4859 63.8378C74.9614 63.5568 75.1991 63.2865 75.1991 63.027H75.3288C75.3288 63.2865 75.5017 63.5568 75.8475 63.8378C76.1069 64.0541 76.3014 64.1946 76.4311 64.2595C76.5824 64.3027 76.8526 64.3243 77.2416 64.3243H78.3763V62.7351C78.3763 62.4108 78.3547 62.2054 78.3115 62.1189C78.2898 62.0108 78.1818 61.8811 77.9873 61.7297C77.7927 61.5784 77.6739 61.4595 77.6306 61.373C77.609 61.2649 77.5982 61.0487 77.5982 60.7243V57.674L74.5899 57.2754C74.7193 57.3904 74.7927 57.4914 74.8101 57.5784C74.8533 57.6649 74.8749 57.8703 74.8749 58.1946V60.4C74.8749 60.7243 74.8425 60.9405 74.7777 61.0487C74.7128 61.1568 74.4859 61.3297 74.0968 61.5676C73.7078 61.8054 73.4376 61.9459 73.2863 61.9892C73.1567 62.0324 72.8973 62.0541 72.5082 62.0541H68.553C68.1639 62.0541 67.9154 62.0432 67.8073 62.0216C67.6992 61.9784 67.548 61.8811 67.3534 61.7297C67.1589 61.5784 67.04 61.4595 66.9968 61.373C66.9752 61.2649 66.9644 61.0487 66.9644 60.7243V58.1946C66.9644 57.8703 66.9752 57.6649 66.9968 57.5784C67.04 57.4703 67.1589 57.3405 67.3534 57.1892C67.548 57.0378 67.6992 56.9514 67.8073 56.9297C67.9154 56.8865 68.1639 56.8649 68.553 56.8649H71.4919L64.9056 55.9922Z"
                        fill="#D3B58D" />
                    <path
                        d="M79.8484 57.9721V61.9243C79.8484 62.4216 79.87 62.7351 79.9132 62.8649C79.9781 62.9946 80.1726 63.1676 80.4968 63.3838L81.21 63.8703C81.5342 64.0865 81.7612 64.2162 81.8909 64.2595C82.0205 64.3027 82.2907 64.3243 82.7014 64.3243H83.674V63.0595C83.674 62.5622 83.6415 62.2595 83.5767 62.1514C83.5335 62.0216 83.3714 61.8487 83.0904 61.6324C82.831 61.4595 82.6797 61.3189 82.6365 61.2108C82.5933 61.0811 82.5717 60.7676 82.5717 60.2703V58.3329L79.8484 57.9721Z"
                        fill="#D3B58D" />
                </g>
                <defs>
                    <clipPath id="clip0_22_97">
                        <rect width="137.786" height="69.1892" fill="white" transform="translate(5.40332 5.4054)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}

export default BlackwaterLogo