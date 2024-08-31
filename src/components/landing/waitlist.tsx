import { FC, useEffect, useRef, useState } from "react"

interface Option {
    value: string;
    label: string;
    checked: boolean;
}
export const WaitList: FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [selectedPlatform, setSelectedPlatform] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [selectedOptions, setSelectedOptions] = useState<Option[]>([
        { value: "creative_managment", label: "Creative Management", checked: false },
        { value: "skills_development", label: "Skills Development", checked: false },
        { value: "financial_management", label: "Financial Management", checked: false },
    ]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission, e.g., send data to backend
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Selected Platform:", selectedPlatform);
        console.log(
            "Selected Platforms:",
            selectedOptions
                .filter((option) => option.checked)
                .map((option) => option.value)
        );
    };

    const handleOptionChange = (value: string) => {
        setSelectedOptions((prevOptions) =>
            prevOptions.map((option) =>
                option.value === value ? { ...option, checked: !option.checked } : option
            )
        );
    };

    const dropdownRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    return (
        <section className="bg-[#101518] py-16 px-9 md:px-28">
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
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="bg-[#fff4e6]/20 border rounded-lg px-4 py-3 text-white placeholder-[#9ba1a3] focus:outline-none focus:border-[#e88800]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <div className="relative" ref={dropdownRef}>
                            <div
                                className="flex bg-transparent px-1 py-3 text-[#e88800] placeholder-[#e88800] focus:outline-none focus:border-[#e88800] appearance-none cursor-pointer"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                {selectedOptions.some((option) => option.checked)
                                    ? selectedOptions
                                        .filter((option) => option.checked)
                                        .map((option) => option.label)
                                        .join(", ")
                                    : "Select the platform you’re interested in"}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17"
                                    height="16"
                                    viewBox="0 0 17 16"
                                    fill="none"
                                    className={`ml-2 transform transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                                        }`}
                                >
                                    <path
                                        d="M13.3333 6L8.66667 10.6667L4 6"
                                        stroke="currentColor"
                                        strokeWidth={3}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            {isDropdownOpen && (
                                <div className="absolute px-4 py-2 pb-4 z-10 top-full left-0 mt-2 w-[290px] bg-white rounded-lg shadow-lg">
                                    <ul className="py-2">
                                        {selectedOptions.map((option) => (
                                            <li
                                                key={option.value}
                                                className="py-2 cursor-pointer hover:bg-gray-100"
                                                onClick={() => handleOptionChange(option.value)}
                                            >
                                                <label className="flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        className="w-6 h-6 rounded border border-2 border-[#bcbfc1] appearance-none checked:bg-[#e88800]"
                                                        checked={option.checked}
                                                        onChange={() => { }} // Prevent default checkbox behavior
                                                    />
                                                    <span  onClick={() => handleOptionChange(option.value)} className="text-[#232e33] text-xs md:text-lg font-normal">
                                                        {option.label}
                                                    </span>
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        type="button" // Change type to "button" to prevent form submission
                                        className="px-3 py-2.5 bg-[#fff4e6] rounded-lg border border-[#e88800] text-[#e88800] text-xs font-normal"
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    >
                                        Confirm
                                    </button>
                                </div>
                            )}
                        </div>

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
