import Link from "next/link";
import { FC } from "react";

export const CallToAction: FC = () => {
    return (
        <section className="bg-[#8c5200] rounded-2xl py-8 px-8 md:px-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Text Content */}
                <div className="md:w-1/1 lg:w-1/1 mb-8 md:mb-0">
                    <h2 className="text-white w-[39rem] text-3xl md:text-4xl font-black leading-tight mb-4">
                        Explore Our Solutions and Let Us Help You Achieve More
                    </h2>
                    <p className="text-white  w-[39rem] text-lg font-normal leading-relaxed py-[1rem] mb-6">
                        Dive in to find the right tools and features for your needs. Start
                        collaborating effectively and maximizing your potential today!
                    </p>
                    <Link href="#waitlist">
                        <button className="flex items-center justify-between gap-3 px-6 py-3 bg-[#e88800] text-white font-semibold rounded-lg hover:bg-transparent hover:border-2 border-[#e88800] transition duration-300 ease-in-out">
                            Join the waitlist
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M14.1667 6.66797L17.5 10.0013M17.5 10.0013L14.1667 13.3346M17.5 10.0013L2.5 10.0013" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </Link>
                </div>

                <div className="md:w-1/2 lg:w-1/3 ">
                    <img
                        src="assets/images/cta.png"
                        alt="Call to Action"
                        className="w-full h-[365.123px]"
                    />
                </div>
            </div>
        </section>
    )
}