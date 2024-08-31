import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => {
    return (
        <footer className="bg-[#F9FAFB] pt-16 pb-6 bottom-0">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Left Section */}
                    <div className="md:w-1/2 lg:w-2/5 mb-8 md:mb-0">
                        <h3 className="text-2xl font-bold text-[#232e33] mb-4">
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
                            <div className="w-8 h-8 bg-gray-300 rounded-full" />
                            <div className="w-8 h-8 bg-gray-300 rounded-full" />
                            <div className="w-8 h-8 bg-gray-300 rounded-full" />
                            <div className="w-8 h-8 bg-gray-300 rounded-full" />
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
                                    <Link href="/about">
                                        <div className="text-base text-[#515b60] hover:text-black">
                                            About Us
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services">
                                        <div className="text-base text-[#515b60] hover:text-black">
                                            Our Services
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
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
                                    <Link href="/talent-management">
                                        <div className="text-base text-[#515b60] hover:text-black">
                                            Talent Management
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/talent-development">
                                        <div className="text-base text-[#515b60] hover:text-black">
                                            Talent Development
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/neobank">
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
