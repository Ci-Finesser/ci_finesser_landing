import { FC, useState } from "react"

export const WaitList: FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [selectedPlatform, setSelectedPlatform] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission, e.g., send data to backend
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Selected Platform:", selectedPlatform);
    };

    return (
        <section className="bg-[#101518] py-16 px-8 md:px-28">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Text Content */}
                <div className="md:w-1/2 lg:w-1/3 mb-8 md:mb-0 w-full">
                    <h2 className="text-[#e88800] text-base md:text-2xl font-bold mb-2">
                        JOIN THE WAITLIST
                    </h2>
                    <h3 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4">
                        Get Started with{" "}
                        <span className="text-[#e88800]">CI Finesser</span> Today
                    </h3>
                    <p className="text-[#e9ebeb] text-base md:text-lg font-normal leading-relaxed">
                        Explore our products and find the perfect solution for your needs.
                    </p>
                </div>

                {/* Form */}
                <div className="md:w-1/2 lg:w-1/3 w-full p">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Your first name e.g John"
                            className="bg-[#fff4e6]/20 border rounded-lg px-4 py-3 text-white placeholder-[#9ba1a3] focus:outline-none focus:border-[#e88800]"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="bg-[#fff4e6]/20 border rounded-lg px-4 py-3 text-white placeholder-[#9ba1a3] focus:outline-none focus:border-[#e88800]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <select
                            className="bg-transparent px-4 py-3 text-white placeholder-[#e88800] focus:outline-none focus:border-[#e88800] appearance-none"
                            value={selectedPlatform}
                            onChange={(e) => setSelectedPlatform(e.target.value)}
                        >
                            <option value="" disabled className="justify-start items-center gap-2 inline-flex">
                                Select the platform you’re interested in
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                    <path d="M13.3333 6L8.66667 10.6667L4 6" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </option>
                            <option value="platform1">Platform 1</option>
                            <option value="platform2">Platform 2</option>
                            {/* Add more platform options as needed */}
                        </select>
                        <button
                            type="submit"
                            className="bg-[#e88800] text-white font-normal py-3 rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
