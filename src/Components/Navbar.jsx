import React from "react";

export default function Navbar() {
    return (
        <header>
            {/* Top Bar */}
            <div
                className="py-1 px-8 flex justify-between items-center h-[53px]"
                style={{
                    background: 'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)'
                }}
            >
                <div className="text-white text-sm flex items-center font-poppins">
                    <span className="mr-1">@</span>
                    info@usaprintersolutions.com
                </div>
                <div className="text-sm text-black flex items-center font-poppins">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-600 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.04 2.26a2.996 2.996 0 011.92 0c2.68.97 7.02 3.29 7.02 9.74 0 5.25-3.52 8.51-7.11 9.59a2.996 2.996 0 01-1.72 0C5.52 20.51 2 17.25 2 12c0-6.45 4.34-8.77 7.04-9.74zm.96 3.82a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                    200 Vesey Street, 24th Floor, New York, 10281
                </div>
            </div>

            {/* Main Navigation */}
            <div className="flex justify-between items-center px-8 py-4 border-b">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img
                        src="https://via.placeholder.com/100x50" // Replace with the actual logo URL
                        alt="USA Printer Solutions"
                        className="w-[80px] h-auto mr-4"
                    />
                    <div>
                        <h1 className="text-2xl font-poppins text-black leading-none">
                            USA Printer
                        </h1>
                        <h2 className="gradient-text text-base font-medium">Solutions</h2>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex space-x-8 text-black text-base font-poppins text-[18px] ">
                    <a href="#" className="hover:text-orange-500">
                        Home
                    </a>
                    <a href="#" className="hover:text-orange-500">
                        About Us
                    </a>
                    <a href="#" className="hover:text-orange-500">
                        Services
                    </a>
                    <a href="#" className="hover:text-orange-500">
                        Why Choose Us
                    </a>
                    <a href="/blogs" className="hover:text-orange-500">
                        Blogs
                    </a>
                </nav>

                {/* Contact Us Button */}
                <button className="bg-black text-white px-6 py-2 rounded text-sm font-medium hover:bg-gray-800">
                    Contact Us
                </button>
            </div>
        </header>
    );
}





