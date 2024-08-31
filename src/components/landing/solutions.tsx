import Link from "next/link";
import { FC } from "react";

interface Solution {
    imageUrl: string;
    title: string;
    description: string;
    linkText: string;
    linkUrl?: string;
}

const solutions: Solution[] = [
    {
        imageUrl: "assets/images/solutions.png",
        title: "Skills Development",
        description:
            "A platform for creatives to engage with interactive courses, connect with industry experts, and earn certifications to advance in career.",
        linkText: "Visit platform",
        linkUrl: "#", // Replace with actual URL
    },
    {
        imageUrl: "assets/images/solutions.png",
        title: "Creative Management",
        description:
            "A solution for project management, skill monetization, performance indication, legal guidance, and seamless platform integration.",
        linkText: "Visit platform",
        linkUrl: "#", // Replace with actual URL
    },
    {
        imageUrl: "assets/images/solutions.png",
        title: "Financial Management",
        description:
            "We combine traditional financial services with tools that cater to the unique needs of creatives and small businesses.",
        linkText: "NeoBank - Coming soon",
        // No linkUrl for "Coming soon"
    },
];

export const Solutions: FC = () => {
    return (
        <section className="py-[12rem] px-8 md:px-28 bg-white pb-[20rem]">
            <div className="container mx-auto">
                <div className="mb-10 md:mb-16 text-center">
                    <h2 className="text-[#101518] text-3xl md:text-4xl font-bold mb-2">
                        Engage with our Creative Industry (CI) Solutions
                    </h2>
                    <p className="text-[#515b60] text-lg md:text-xl font-normal">
                        We are achieving our mission with an innovative online platform,
                        offering tailored financial tools and vibrant community features for
                        creatives and small businesses.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center md:gap-[1.75rem]">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 shadow-lg rounded-xl border-2 border-gray-200 p-10 flex flex-col items-start relative w-96 h-[300px]"
                        >
                            <img
                                src={solution.imageUrl}
                                alt={solution.title}
                                className="absolute top-[6rem] right-0 w-24 h-auto translate-x-1/2 -translate-y-1/2"
                            />
                            <h3 className="text-2xl font-bold mb-4">
                                <span className="text-[#e88800]">{solution.title.split(" ")[0]}</span>{" "}
                                <span className="text-[#232e33]">
                                    {solution.title.split(" ").slice(1).join(" ")}
                                </span>
                            </h3>
                            <p className="text-[#515b60] text-base font-normal mb-6">
                                {solution.description}
                            </p>
                            {solution.linkUrl && (
                                <Link href={solution.linkUrl}>
                                    <button className="px-3 py-2.5 rounded-lg border border-[#e88800] flex items-center gap-2">
                                        <span className="text-[#e88800] text-base font-normal">
                                            {solution.linkText}
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M11.3333 5.33203L14 7.9987M14 7.9987L11.3333 10.6654M14 7.9987L2 7.9987" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </Link>
                            )}
                            {!solution.linkUrl && (
                                <div className="py-2.5 rounded-lg flex items-center gap-2">
                                    <span className="text-[#e88800] text-base font-normal">
                                        {solution.linkText}
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
