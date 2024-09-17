import { Dialog, DialogBackdrop, DialogPanel, useClose } from "@headlessui/react";
import { FC, useEffect, useRef, useState } from "react"

interface Option {
    value: string;
    label: string;
    checked: boolean;
}

interface ToastProps {
    message: string;
    type: "success" | "error"
    duration?: number;
    onClose: (value: boolean) => void;
    closeToast: () => void;
    isOpen: boolean;
}

const CustomToast = ({ closeToast, type, message, isOpen }: ToastProps) => (
    console.log(`${type} ${message || ''}`),
    <Dialog open={isOpen} onClose={closeToast} className="">
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
                <DialogPanel
                    transition
                    className="w-full max-w-[50rem] py-10 bg-white justify-between gap-6 items-start inline-flex rounded-xl p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                >
                    {type === 'success' ? (<img className="w-36 h-36" src="assets/images/success.png" />) : type === 'error' ? (<img className="w-36 h-36" src="assets/images/error.png" />) : null}
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                        <div className="self-stretch">
                            {type === 'success' ?
                                <>
                                    <span className="text-[#459f49] text-xl font-bold leading-7">Success! </span><span className="text-[#232e33] text-xl font-bold font-['Satoshi'] leading-7">You’ve Joined the Waitlist</span>
                                </>
                                : type === 'error' ?
                                    <>
                                        <span className="text-[#ffbc00] text-xl font-bold font-['Satoshi'] leading-7">Error! </span><span className="text-[#232e33] text-xl font-bold font-['Satoshi'] leading-7">Invalid datails</span>
                                    </> : null
                            }
                        </div>
                        <div className="self-stretch text-[#515b60] text-base font-normal leading-relaxed">
                            {message}
                        </div>
                        <div className="justify-start items-start gap-4 inline-flex">
                            <div className="flex-col justify-start items-start gap-1 inline-flex">
                                <button
                                    className={`px-3 py-2.5 ${type == 'error' ? 'bg-[#ffbc00]' : 'bg-[#459f49]'} rounded-lg justify-start items-center gap-1 inline-flex`}
                                    onClick={closeToast} // Close the toast when "Okay" is clicked
                                >
                                    <span className="text-white  font-normal leading-tight">
                                       {type == 'error' ? 'Try again' : 'Close and explore Finesser'}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </div>
    </Dialog>
);

export const WaitList: FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoading, setIsisLoading] = useState(false);

    const [selectionError, showSelectionError] = useState(false);

    const [showToast, setShowToast] = useState(false); // State to control toast visibility
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState<'success' | 'error'>();

    let close = useClose()

    const [selectedOptions, setSelectedOptions] = useState<Option[]>([
        { value: "creative_management", label: "Creative Management", checked: false },
        { value: "skills_development", label: "Skills Development", checked: false },
        { value: "financial_management", label: "Financial Management", checked: false },
    ]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!selectedOptions.some((option) => option.checked)) {
            showSelectionError(true);
            return;
        }
        setIsisLoading(true);
        // Handle form submission, e.g., send data to backend
        console.log("Name:", name);
        console.log("Email:", email);
        console.log(
            "Selected Platforms:",
            selectedOptions
                .filter((option) => option.checked)
                .map((option) => option.value)
        );
        fetch("/api/joinWaitlist", {
            method: "POST", body: JSON.stringify({
                first_name: name,
                email: email,
                products: selectedOptions
                    .filter((option) => option.checked)
                    .map((option) => option.value)
            })
        })
            .then(response => response.json())
            .then(data => {
                setIsisLoading(false);
                if (data.status) {
                    setToastMessage("Thank you for your interest in our platforms. You’ll be among the first to know when access becomes available. Keep an eye on your email for updates and next steps.");
                    setToastType('success');
                } else {
                    let msg = data.message == "account with email exists already" ? "User with email already exist. Please try again with a different email address." : "Something went wrong. Please try again later."
                    setToastMessage(msg);
                    setToastType('error');
                }
                setShowToast(true); // Show the toast after handling the response
            });
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
        <>
            <CustomToast
                message={toastMessage}
                type={toastType || 'success'}
                isOpen={showToast}
                closeToast={() => setShowToast(false)}
                onClose={(showToast) => !showToast}
            />
            <section id="waitlist" className="bg-[#101518] py-16 px-9 md:px-28">
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
                        <p className="text-[#e9ebeb] max-w-[29rem] text-base md:text-lg font-normal leading-relaxed">
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
                            <div className="relative" ref={dropdownRef} aria-required>
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
                                {selectionError && !selectedOptions.some((option) => option.checked) && (
                                    <p className="text-red-500 text-xs mt-1">
                                        Please select at least one platform.
                                    </p>
                                )}
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
                                                        <span onClick={() => handleOptionChange(option.value)} className="text-[#232e33] text-xs md:text-lg font-normal">
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
                                disabled={isLoading}
                                type="submit"
                                className="bg-[#e88800] w-[10rem] text-white font-normal py-3 rounded-lg hover:bg-transparent hover:text-[#e88800] hover:border-2 border-[#e88800] transition duration-300 ease-in-out"
                            >
                                <div className="flex gap-2 items-center justify-center">
                                    {isLoading ? `Submitting` : `Submit`}
                                    {isLoading ? (
                                        <div className="animate-spin">
                                            {/* Choose one of the spinner SVG options below */}
                                            <svg
                                                className="w-5 h-5 text-[#e88800]" // Adjust size and color as needed
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                {/* Option 1: Simple circle spinner */}
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>

                                                {/* Option 2: Tailwind CSS default spinner */}
                                                {/* <path 
                                                className="opacity-75" 
                                                fill="currentColor" 
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path> */}
                                            </svg>
                                        </div>
                                    ) : (
                                        <svg
                                            width="37"
                                            height="24"
                                            viewBox="0 0 27 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="animate-bounce"
                                        >
                                            <path
                                                d="M17.2747 8L21.2747 12M21.2747 12L17.2747 16M21.2747 12L3.27466 12"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                            />
                                        </svg>
                                    )}
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
