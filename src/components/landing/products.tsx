import { FC } from "react";

interface Product {
    icon: string; // Placeholder for icon path
    title: string;
    description: string;
}

const products: Product[] = [
    {
        icon: "assets/svgs/products/digital-platform.svg",
        title: "Digital Platforms",
        description:
            "We design and develop cutting-edge digital platforms tailored for artists, designers, and creative entrepreneurs. Our platforms enable users to showcase their work, connect with audiences, and monetize their content effectively.",
    },
    {
        icon: "assets/svgs/products/consultancy.svg",
        title: "Consultancy",
        description:
            "Our expert consultants provide strategic guidance and support to creative businesses, helping them navigate the complexities of the digital landscape. We offer tailored solutions for branding, marketing, business development, and more.",
    },
    {
        icon: "assets/svgs/products/tech-solutions.svg",
        title: "Tech Solutions",
        description:
            "Our innovative technological solutions streamline enterprise processes, from idea conception to product delivery. Whether it's developing custom software for project management or implementing AI-driven tools, we leverage technology to optimize workflows and maximize efficiency.",
    },
    {
        icon: "assets/svgs/products/skills-development.svg",
        title: "Skills Development",
        description:
            "Our platform offers a wide range of courses designed to grow and develop talent. From technology to creative skills, our programs are tailored to equip Nigerian youth with the tools they need to succeed in today's digital economy.",
    },
];

export const ProductsComponent: FC = () => {
    return (
        <section id="products" className="py-16 px-8 md:px-28 bg-transparent">
            <div className="container mx-auto text-center max-w-[1240px]">
                <h2 className="text-[#232e33] text-3xl md:text-4xl text-center font-bold mb-6 max-w-[1140px]">
                    Embracing creativity and continuously pushing the boundaries of
                    what's possible - we explore limitless possibilities
                </h2>
                <p className="text-[#515b60] text-lg md:text-xl font-normal mb-12">
                    We provide tailored services for creative entrepreneurs and
                    businesses, focusing on innovation, collaboration, and sustainable
                    growth
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-9 place-items-center lg:mx-[14rem]">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="shrink-0 bg-white shadow-md text-left rounded-2xl border border-[#e9ebeb] px-6 py-10 flex flex-col w-96 h-[450px]"
                        >
                            <img
                                src={product.icon}
                                alt={product.title}
                                className="w-20 h-20 mb-6"
                            />
                            <h3 className="text-[#232e33] text-2xl font-bold mb-4">
                                {product.title}
                            </h3>
                            <p className="text-[#515b60] text-base md:text-lg font-normal">
                                {product.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
