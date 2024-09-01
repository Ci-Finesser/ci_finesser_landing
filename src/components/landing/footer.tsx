import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => {
    return (
        <footer className="bg-[#F9FAFB] pt-16 pb-6 bottom-0">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Left Section */}
                    <div className="md:w-1/2 lg:w-2/5 mb-8 md:mb-0">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#232e33] mb-4">
                            Discover, Connect, Create, and Earn
                        </h3>
                        <p className="text-base text-[#515b60] leading-relaxed">
                            Explore our platforms to manage projects, collaborate
                            effortlessly, and grow your creative business. Stay connected for
                            updates, support, and resources to enhance your skills, streamline
                            your business, and maximize your earnings.
                        </p>
                        {/* Social Media Icons (Placeholder) */}
                        <div className="flex gap-4 mt-6">
                            <Link href={'https://www.linkedin.com/company/ci-finesser'} target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <g clipPath="url(#clip0_7143_11302)">
                                        <path d="M20.3281 20.0008V20H20.3331V12.665C20.3331 9.07667 19.5606 6.3125 15.3656 6.3125C13.3489 6.3125 11.9956 7.41917 11.4431 8.46833H11.3847V6.6475H7.40723V20H11.5489V13.3883C11.5489 11.6475 11.8789 9.96417 14.0347 9.96417C16.1589 9.96417 16.1906 11.9508 16.1906 13.5V20.0008H20.3281Z" fill="#E88800" />
                                        <path d="M0.663086 6.64844H4.80975V20.0009H0.663086V6.64844Z" fill="#E88800" />
                                        <path d="M2.73467 0C1.40884 0 0.333008 1.07583 0.333008 2.40167C0.333008 3.7275 1.40884 4.82583 2.73467 4.82583C4.06051 4.82583 5.13634 3.7275 5.13634 2.40167C5.13551 1.07583 4.05967 0 2.73467 0V0Z" fill="#E88800" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_7143_11302">
                                            <rect width="20" height="20" fill="white" transform="translate(0.333008)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                            <Link href={''}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <g clipPath="url(#clip0_7143_11306)">
                                        <path d="M0.333008 9.25917C0.333008 12.1725 1.78634 14.7717 4.05884 16.4692V20L7.46384 18.1317C8.37218 18.3825 9.33468 18.5192 10.3322 18.5192C15.8547 18.5192 20.3322 14.3742 20.3322 9.26C20.333 4.14583 15.8555 0 10.333 0C4.81051 0 0.333008 4.145 0.333008 9.25917H0.333008ZM9.27801 6.66583L11.8863 9.38167L16.7922 6.66583L11.3255 12.4675L8.77968 9.7525L3.81051 12.4683L9.27801 6.66583Z" fill="#E88800" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_7143_11306">
                                            <rect width="20" height="20" fill="white" transform="translate(0.333008)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                            <Link href={''}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <g clipPath="url(#clip0_7143_11308)">
                                        <path d="M18.278 5.9275C19.0913 5.35 19.7755 4.62917 20.333 3.79917V3.79833C19.5888 4.12417 18.7972 4.34083 17.9705 4.44583C18.8205 3.93833 19.4697 3.14083 19.7747 2.18C18.9822 2.6525 18.1072 2.98583 17.1747 3.1725C16.4222 2.37083 15.3497 1.875 14.1797 1.875C11.9097 1.875 10.0822 3.7175 10.0822 5.97583C10.0822 6.30083 10.1097 6.61333 10.1772 6.91083C6.76884 6.74417 3.75217 5.11083 1.72551 2.62167C1.37217 3.23583 1.16384 3.93833 1.16384 4.69417C1.16384 6.11417 1.89467 7.3725 2.98551 8.10167C2.32634 8.08917 1.68051 7.8975 1.13301 7.59667V7.64167C1.13301 9.63417 2.55384 11.2892 4.41801 11.6708C4.08384 11.7625 3.72051 11.8058 3.34301 11.8058C3.08051 11.8058 2.81551 11.7908 2.56717 11.7358C3.09801 13.3592 4.60634 14.5533 6.39801 14.5925C5.00301 15.6833 3.23134 16.3408 1.31384 16.3408C0.978008 16.3408 0.655508 16.3258 0.333008 16.285C2.14967 17.4558 4.30134 18.125 6.62301 18.125C13.8588 18.125 18.5747 12.0883 18.278 5.9275Z" fill="#E88800" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_7143_11308">
                                            <rect width="20" height="20" fill="white" transform="translate(0.333008)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                            <Link href={''}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <g clipPath="url(#clip0_7143_11310)">
                                        <path d="M8.76385 14.1003C8.81719 14.0553 8.87136 14.0087 8.92136 13.9595C6.13719 16.6912 1.59719 15.4162 0.533021 11.5637V11.5578C-0.894479 6.31618 5.12469 2.33451 8.91969 6.00118C8.99885 6.08534 14.2414 11.6762 13.908 11.3203H13.923C14.7055 12.127 15.8372 12.0387 16.5105 11.3337C17.2347 10.577 17.2605 9.34201 16.5497 8.57284C15.4272 7.28034 13.223 8.24618 13.4339 10.162L12.1722 8.87701L10.7089 7.47784C11.0105 6.87868 11.4064 6.35451 11.9022 5.90118C11.8489 5.94701 11.7947 5.99451 11.7447 6.04201C14.5397 3.30034 19.0764 4.60534 20.133 8.44118V8.44618C21.5639 13.687 15.538 17.6687 11.7464 14.002C11.6689 13.9187 6.42969 8.29284 6.76135 8.64951L6.75802 8.63701C6.74469 8.63701 6.74469 8.62451 6.74469 8.62451C5.92302 7.77701 4.80886 7.90451 4.15719 8.59868C3.43219 9.35534 3.40719 10.5903 4.11969 11.3478C5.19302 12.6103 7.44469 11.6745 7.23302 9.72034C7.31469 9.80451 10.1405 12.7053 9.96052 12.5212C9.50302 13.4337 8.99135 13.8528 8.76385 14.1003Z" fill="#E88800" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_7143_11310">
                                            <rect width="20" height="20" fill="white" transform="translate(0.333008)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="md:w-1/2 lg:w-1/3 flex flex-col md:flex-row justify-between gap-8 md:gap-16">
                        {/* Company */}
                        <div>
                            <h4 className="text-lg font-semibold text-[#232e33] mb-4">
                                Company
                            </h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#about">
                                        <div className="text-base text-[#515b60] hover:text-black">
                                            About Us
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#services">
                                        <div className="text-base text-[#515b60] hover:text-black">
                                            Our Services
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#contact">
                                        <div className="text-base text-[#515b60] hover:text-black">
                                            Contact Us
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Products */}
                        <div>
                            <h4 className="text-lg font-semibold text-[#232e33] mb-4">
                                Products
                            </h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#talent-management">
                                        <div className="text-base text-[#515b60] hover:text-black">
                                            Talent Management
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#talent-development">
                                        <div className="text-base text-[#515b60] hover:text-black">
                                            Talent Development
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#neobank">
                                        <div className="text-base text-[#515b60] hover:text-black">
                                            NeoBank
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-300 mt-12 pt-6 text-center">
                    <p className="text-sm text-[#232e33]">
                        Copyright &copy; CI Finesser 2024. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
