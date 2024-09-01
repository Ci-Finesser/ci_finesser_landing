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
                        <span className="text-[#e88800]">"Building a Skilled Africa"</span>{" "}
                        Top 1% of Talents
                    </h2>
                    <p className="text-base md:text-xl text-[#232e33] font-normal leading-relaxed">
                        We are a company duly registered in Nigeria with a deep-rooted
                        commitment to technological innovation. We are driven by our mission
                        to revolutionize the creative landscape in Nigeria. With a focus on
                        innovation, collaboration, excellence, and empowerment, we aim to be
                        the catalyst for positive change, bridging the gap between
                        creativity, technology, and finance.
                        <br />
                        <br />
                        Founded in 2021, our journey began with a vision to empower
                        creative individuals, businesses, innovators, and young
                        entrepreneurs enabling them to thrive in a digital era. Today, we
                        continue to push the boundaries of what's possible, pioneering
                        innovative solutions that enhance productivity, foster
                        collaboration, and drive sustainable growth.
                    </p>
                </div>
            </div>
        </section>
    )
}
