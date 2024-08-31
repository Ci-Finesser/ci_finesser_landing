import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const NavBar: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleProductsDropdown = () => {
        setIsProductsDropdownOpen(!isProductsDropdownOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Adjust the scroll position (100px in this example) as needed
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuLinks = [
        { label: "Products", href: "#products" },
        { label: "About Us", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Contact Us", href: "#contact" },
    ];
    return (
        <nav
            className={`flex items-center justify-between px-8 md:px-[150px] z-10 fixed top-0 left-0 w-full transition-all duration-500 ${isScrolled
                ? "bg-white shadow-md border-b border-gray-300"
                : "bg-transparent shadow-md border-b border-gray-300"
                }`}
        >
            <div className="flex items-center justify-center">
                <Link href="/">
                    <div className="flex items-center z-50">
                        <Image
                            src="/og-image.png"
                            alt="Logo"
                            width={100}
                            height={100}
                        />
                    </div>
                </Link>
                <div className="hidden md:flex md:ml-9 items-center gap-10">
                    <div className="relative">
                        <button
                            onClick={toggleProductsDropdown}
                            className="flex items-center text-black text-lg font-semibold"
                        >
                            Products
                            <svg
                                className={`w-4 h-4 ml-2 mt-1 transition-transform font-bold ${isProductsDropdownOpen ? 'transform rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Dropdown Content */}
                        {isProductsDropdownOpen && (
                            <div className="absolute top-full w-[15rem] left-0 mt-2 py-2 bg-white rounded-md shadow-lg">
                                <Link href="#product1">
                                    <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        Talent Management
                                    </div>
                                </Link>
                                <Link href="#product1">
                                    <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        Talent Developement
                                    </div>
                                </Link>
                                <Link href="#product2">
                                    <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        NeoBank {`(Coming Soon)`}
                                    </div>
                                </Link>
                                {/* Add more product links as needed */}
                            </div>
                        )}
                    </div>
                    <Link href="#about">
                        <div className="text-black text-lg font-semibold">
                            About us
                        </div>
                    </Link>
                    <Link href="#services">
                        <div className="text-black text-lg font-semibold">
                            Services
                        </div>
                    </Link>
                    <Link href="#contact">
                        <div className="text-black text-lg font-semibold">
                            Contact us
                        </div>
                    </Link>
                </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
                {/* <Link href="#join-us">
                    <div className="px-6 py-2.5 bg-[#e88800] rounded-md shadow justify-center items-center gap-1 flex">
                        <div className="flex text-center text-white text-base font-semibold leading-normal">
                            Join us
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.2747 8L21.2747 12M21.2747 12L17.2747 16M21.2747 12L3.27466 12" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </Link> */}
            </div>
            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-black focus:outline-none z-50"
                onClick={toggleMenu}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {isMenuOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    )}
                </svg>
            </button>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-0 right-0 w-full h-screen bg-white backdrop-blur-sm bg-white/30 z-10">
                    <ul className="flex flex-col items-center justify-center h-full gap-8 px-9">
                        {menuLinks.map(menuLink => (
                            <Link href={menuLink.href} onClick={toggleMenu} className="text-black hover:bg-[#e88800] hover:text-white w-full flex items-center justify-center p-3">
                                <li>
                                    <div className="text-lg font-semibold">
                                        {menuLink.label}
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}