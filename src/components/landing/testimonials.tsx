import { FC, useEffect, useRef, useState } from "react";

interface Testimonial {
    quote: string;
    name: string;
    title: string;
    platform: string;
}

const testimonials: Testimonial[] = [
    {
        quote:
            "CI Finesser's LXP Platform transformed my career with its easy-to-follow courses and expert instructors.",
        name: "Jane Doe",
        title: "Learner",
        platform: "CI Finesser Skills Development Platform",
    },
    {
        quote:
            "CI Finesser's LXP Platform transformed my career with its easy-to-follow courses and expert instructors.",
        name: "AR Shakir",
        title: "CEO GetNextDesign",
        platform: "CI Finesser Skills Talent Management Platform",
    },
    {
        quote:
            "The Talent Management App helped me monetize my skills and advance my career seamlessly",
        name: "John Smith",
        title: "CEO Access Bank - Partner",
        platform: "CI Finesser Skills Talent Management Platform",
    },
    {
        quote:
            "The Talent Management App helped me monetize my skills and advance my career seamlessly",
        name: "John Smith",
        title: "CEO Access Bank - Partner",
        platform: "CI Finesser Skills Talent Management Platform",
    },
];

export const TestimonialsComponent: FC = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const testimonialsRef = useRef<HTMLDivElement>(null);

    const handleNextTestimonial = () => {
        setCurrentTestimonial((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const handlePrevTestimonial = () => {
        setCurrentTestimonial((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    }
    const scrollToTestimonial = (index: number) => {
        if (testimonialsRef.current) {
            // Type assertion to tell TypeScript that testimonialsRef.current is an HTMLElement
            const testimonialWidth = (testimonialsRef.current.children[0] as HTMLElement).offsetWidth;
            const scrollOffset = testimonialWidth * index;
            testimonialsRef.current.scrollTo({
                left: scrollOffset,
                behavior: "smooth",
            });
        }
    };

    // Update scroll position when currentTestimonial changes
    useEffect(() => {
        scrollToTestimonial(currentTestimonial);
    }, [currentTestimonial]);


    return (
        <section className="py-16 px-8 md:px-28 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-[#e88800] text-base md:text-2xl font-bold mb-2">
                    TESTIMONIALS
                </h2>
                <h3 className="text-[#232e33] text-3xl md:text-4xl font-bold mb-8">
                    What our community is saying
                </h3>
                <div className="flex overflow-x-auto snap-x gap-8 mt-8 mr-8 scrollbar-hide"
                    ref={testimonialsRef}
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`snap-center shrink-0 bg-white rounded-lg p-9 flex flex-col w-80 md:w-96 scrollbar-hide ${index === currentTestimonial ? "opacity-100" : "opacity-50"
                                }`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 18 16" fill="none" className="mb-6">
                                <path d="M18 0.157778L17.5457 3.4899C16.6372 3.41196 15.8991 3.56785 15.3312 3.95757C14.7634 4.32781 14.3659 4.87342 14.1388 5.59441C13.9306 6.29591 13.8927 7.11433 14.0252 8.04966H18V16H10.2776V8.04966C10.2776 5.24366 10.9117 3.11967 12.1798 1.6777C13.4479 0.216237 15.388 -0.290403 18 0.157778ZM7.7224 0.157778L7.26814 3.4899C6.35962 3.41196 5.62145 3.56785 5.05363 3.95757C4.4858 4.32781 4.08833 4.87342 3.8612 5.59441C3.653 6.29591 3.61514 7.11433 3.74763 8.04966H7.7224V16H0V8.04966C0 5.24366 0.634069 3.11967 1.90221 1.6777C3.17035 0.216237 5.11041 -0.290403 7.7224 0.157778Z" fill="#E88800" />
                            </svg>
                            <p className="text-[#232e33] text-lg text-left font-normal mb-6">
                                {testimonial.quote}
                            </p>
                            <div className="flex flex-col mt-auto text-left">
                                <h4 className="text-[#232e33] text-lg font-semibold">
                                    {testimonial.name}
                                </h4>
                                <p className="text-[#9ba1a3] text-base font-normal">
                                    {testimonial.title}
                                </p>
                                <div className="flex-col justify-start items-start gap-0.5 mt-2">
                                    <div className="py-2.5 flex items-center justify-between">
                                        <span className="text-[#8c5200] text-xs font-normal">
                                            {testimonial.platform}
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                            <path d="M11.3333 5.83203L14 8.4987M14 8.4987L11.3333 11.1654M14 8.4987L2 8.4987" stroke="#8C5200" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination (Placeholder) */}
                <div className="flex justify-center items-center gap-6 mt-8" >
                    <button className="px-3 py-2.5 rounded-lg border border-2 border-[#e88800]" onClick={handlePrevTestimonial}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M12.5 15.8346L6.66667 10.0013L12.5 4.16797" stroke="#E88800" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className="px-3 py-2.5 rounded-lg border border-2 border-[#e88800]" onClick={handleNextTestimonial}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 4.16536L13.3333 9.9987L7.5 15.832" stroke="#E88800" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}