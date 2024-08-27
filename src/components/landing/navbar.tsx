import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const NavBar: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleProductsDropdown = () => {
        setIsProductsDropdownOpen(!isProductsDropdownOpen);
    };
    return (
        <nav className="flex items-center justify-between p-4 px-[200px] bg-white">
            <div className="flex items-center justify-center">
                <Link href="/">
                    <div className="flex items-center">
                        <Image
                            src="/og-image.png"
                            alt="Logo"
                            width={70}
                            height={70}
                        />
                    </div>
                </Link>
                <div className="hidden md:flex md:ml-9 items-center gap-10">
                    <div className="relative">
                        <button
                            onClick={toggleProductsDropdown}
                            className="flex items-center text-black text-sm font-semibold"
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
                            <div className="absolute top-full left-0 mt-2 py-2 bg-white rounded-md shadow-lg">
                                <Link href="#product1">
                                    <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        Product 1
                                    </div>
                                </Link>
                                <Link href="#product2">
                                    <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        Product 2
                                    </div>
                                </Link>
                                {/* Add more product links as needed */}
                            </div>
                        )}
                    </div>
                    <Link href="#about">
                        <div className="text-black text-sm font-semibold">
                            About us
                        </div>
                    </Link>
                    <Link href="#services">
                        <div className="text-black text-sm font-semibold">
                            Services
                        </div>
                    </Link>
                    <Link href="#contact">
                        <div className="text-black text-sm font-semibold">
                            Contact us
                        </div>
                    </Link>
                </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
                <Link href="#join-us">
                    <div className="px-6 py-2.5 bg-[#e88800] rounded-md shadow justify-center items-center gap-1 flex">
                        <div className="text-center text-white text-base font-semibold leading-normal">
                            Join us
                        </div>
                    </div>
                </Link>
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
                <div className="md:hidden absolute top-0 right-0 w-full h-screen bg-white z-10">
                    <ul className="flex flex-col items-center justify-center h-full gap-8">
                        <li>
                            <Link href="#products">
                                <div className="text-black text-lg font-semibold">
                                    Products
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="#about">
                                <div className="text-black text-lg font-semibold">
                                    About us
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="#services">
                                <div className="text-black text-lg font-semibold">
                                    Services
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact">
                                <div className="text-black text-lg font-semibold">
                                    Contact us
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="#sign-in">
                                <div className="px-6 py-2.5 opacity-0 bg-white rounded-md shadow justify-center items-center gap-1 flex">
                                    <div className="text-center text-[#101518] text-base font-semibold leading-normal">
                                        Sign in
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="#join-us">
                                <div className="px-6 py-2.5 bg-[#e88800] rounded-md shadow justify-center items-center gap-1 flex">
                                    <div className="text-center text-white text-base font-semibold leading-normal">
                                        Join us
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}