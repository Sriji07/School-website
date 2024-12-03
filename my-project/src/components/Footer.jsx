import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#000080] text-white py-8">
            <div className="container mx-auto px-6">
                {/* Footer Content Wrapper */}
                <div className="flex flex-col md:flex-row justify-between items-start">
                    {/* Left-aligned Contact Information */}
                    <div className="text-left space-y-4">
                        <p className="text-base md:text-lg font-medium">
                            <span className="font-extrabold text-teal-400">Address:</span> 123 School Street, Education City, ABC 12345
                        </p>
                        <p className="text-base md:text-lg font-medium">
                            <span className="font-extrabold text-teal-400">Email:</span>{' '}
                            <a
                                href="mailto:info@myschool.com"
                                className="text-teal-400 underline hover:text-teal-300"
                            >
                                info@myschool.org.in
                            </a>
                        </p>
                        <p className="text-base md:text-lg font-medium">
                            <span className="font-extrabold text-teal-400">Phone:</span>{' '}
                            <a
                                href="tel:+91 9834588XXX"

                                className="text-teal-400 underline hover:text-teal-300"
                            >
                                +91 9834588XXX &nbsp;
                            </a>

                            <a
                                href="tel: +91 8879445XXX"

                                className="text-teal-400 underline hover:text-teal-300"
                            >
                                / +91 8879445XXX
                            </a>
                        </p>
                    </div>

                    {/* Spacer for Layout */}
                    <div className="mt-6 md:mt-0"></div>
                </div>

                {/* Centered Main Footer Content */}
                <div className="text-center mt-8">
                    <p className="text-lg font-medium tracking-wide">
                        &copy; 2024 <span className="font-extrabold text-teal-400">My School</span>. All Rights Reserved.
                    </p>
                    <p className="text-sm mt-2">Designed and developed by Sri</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
