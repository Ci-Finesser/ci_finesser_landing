import { FC } from "react";
import { NavBar } from "./navbar";
import Link from "next/link";
import { motion } from "framer-motion";

export const HeroSection: FC = () => {
    return (
        <div className="bg-no-repeat bg-cover bg-white bg-left" style={{ backgroundImage: "url('/assets/svgs/hero.svg')" }} >
            <NavBar />
            <motion.section
                className="flex justify-center items-center pt-80 sd:pt-[19rem] md:pt-[15rem]"
                initial={{ opacity: 0, y: 50 }} // Initial state: hidden and slightly below
                animate={{ opacity: 1, y: 0 }} // Animate to: visible and in its normal position
                transition={{ duration: 1, ease: "easeOut" }} // Animation duration and easing
            >
                <div className="md:w-1/2 lg:w-2/5 mb-8 md:mb-0 px-9 -mt-[9rem]">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="text-[#232e33] text-base font-normal leading-relaxed">
                            Empowering the Future of Nigeria's Creative Industries
                        </div>
                    </motion.div>
                    <motion.h1
                        className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#232e33] leading-tight mb-9"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <span className="text-[#e88800]">Innovating Solutions</span> for a
                        Thriving Digital Economy
                    </motion.h1>
                    <motion.p
                        className="text-base md:text-lg text-[#232e33] font-semibold leading-relaxed mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        At Finesser Limited, we're dedicated to revolutionizing Nigeria's
                        creative and technological landscape. Explore our innovative
                        platforms, from talent development to digital banking, designed to
                        empower you and drive sustainable growth.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <Link href="#products">
                            <button className="px-6 py-3 bg-transparent text-[#e88800] border-2 border-[#e88800] font-semibold rounded-lg hover:bg-[#e88800] hover:text-white transition duration-300 ease-in-out">
                                <div className="flex gap-3">
                                    Explore our products
                                    <svg
                                        width="37"
                                        height="24"
                                        viewBox="0 0 27 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="animate-bounce"
                                    >
                                        <path
                                            d="M17.2747 8L21.2747 12M21.2747 12L17.2747 16M21.2747 12L3.27466 12"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                        />
                                    </svg>
                                </div>
                            </button>
                        </Link>
                    </motion.div>
                    <motion.div
                        className="mt-12 flex flex-wrap gap-x-4 gap-y-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1, staggerChildren: 0.1 }} // Add staggerChildren
                    >
                        {[
                            "Innovation",
                            "Collaboration",
                            "Transparency",
                            "Excellence",
                            "Empowerment",
                        ].map((value) => (
                            <motion.div
                                key={value}
                                className="flex items-center gap-2"
                                whileHover={{ scale: 1.1 }}
                                initial={{ opacity: 0, y: 20 }} // Initial state for each child
                                animate={{ opacity: 1, y: 0 }} // Animation for each child
                                transition={{ duration: 0.5 }} // Transition for each child
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                >
                                    <circle cx="9" cy="9" r="9" fill="#E88800" />
                                    <path
                                        d="M5 9L7.8 12L13 6"
                                        stroke="white"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className="text-xs md:text-sm text-[#232e33] font-semibold">
                                    {value}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Image */}
                <motion.div
                    className="md:w-1/2 lg:w-2/5 md:ml-9 hidden md:flex"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <img
                        src="assets/images/hero/hero-img.png"
                        alt="Hero Image"
                        className="w-full h-auto"
                    />
                </motion.div>
            </motion.section>
        </div>
    )
}