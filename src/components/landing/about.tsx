import { FC } from "react";

export const AboutUsComponent: FC = () => {
    return (
        <section id="about" className="bg-[#fff4e6] py-16 md:py-24 lg:py-32 w-full">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                {/* Image (Placeholder) */}
                <div className="md:w-1/2 lg:w-2/5">
                    <img src="assets/images/about.png" alt="" />
                </div>

                {/* Text Content */}
                <div className="md:w-1/2 lg:w-2/4  px-5 md:px-0">
                    <h2 className="text-[35px] md:text-4xl lg:text-5xl font-bold text-[#232e33] leading-tight mb-9">
                        <span className="text-[#e88800]">Empowering Creativity with Purpose</span>
                    </h2>
                    <p className="text-base md:text-xl text-[#232e33] font-normal leading-relaxed">
                        We are a Nigerian company committed to empowering the creative community with the resources and support needed to thrive in a complex landscape.
                        <br />
                        <br />
                        Our mission is to bridge the gaps between creativity, technology, finance, and legal support, equipping you with the tools to grow, protect, and elevate your craft.
                        <br />
                        <br />
                        Founded in 2021, we advocate for creatives, entrepreneurs, and innovators, ensuring you have access to the knowledge and opportunities to succeed. Whether you need to sharpen your skills, manage projects, protect your intellectual property, or navigate legal complexities, our platforms are built to support you at every stage.
                        <br />
                        <br />
                        We’re here to help you scale your business, secure your rights, and maximize your potential—empowering you to focus on what matters most: creating.
                    </p>
                </div>
            </div>
        </section>
    )
}
