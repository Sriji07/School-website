import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-[#000080] text-white py-1 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center px-4 h-16">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src="/src/assets/images/logo1.png"
                        alt="School Logo"
                        className="h-full max-h-14 object-contain" // Adjusted to scale within navbar
                    />
                </Link>

                {/* Navigation Links */}
                <div className="flex-grow flex justify-center">
                    <ul className="flex space-x-6">
                        <li>
                            <Link
                                to="/"
                                className="text-lg font-medium  transition-all duration-300 transform hover:text-blue-300 hover:scale-105"
                            >
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="text-lg font-medium transition-all duration-300 transform hover:text-blue-300 hover:scale-105"
                            >
                                ABOUT US
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/admission"
                                className="text-lg font-medium transition-all duration-300 transform hover:text-blue-300 hover:scale-105"
                            >
                                ADMISSION
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/infrastructure"
                                className="text-lg font-medium transition-all duration-300 transform hover:text-blue-300 hover:scale-105"
                            >
                                INFRASTRUCTURE
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/notices"
                                className="text-lg font-medium transition-all duration-300 transform hover:text-blue-300 hover:scale-105"
                            >
                                NOTICES
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Login/Signup Buttons */}
                <div className="ml-auto flex space-x-4">
                    <Link
                        to="/login"
                        className="text-lg font-medium transition-all duration-300 transform hover:text-blue-300 hover:scale-105 bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="text-lg font-medium transition-all duration-300 transform hover:text-blue-300 hover:scale-105 bg-yellow-400 text-black px-6 py-2 rounded-lg"
                    >
                        Signup
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
