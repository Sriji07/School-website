import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-[#000080] text-white py-4 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Brand Name */}
                <h1 className="text-3xl font-extrabold tracking-wider text-gradient bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-600 to-teal-500">
                    My School
                </h1>

                {/* Navigation Links */}
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="text-lg font-medium transition-all duration-300 transform hover:text-blue-300 hover:scale-105">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-lg font-medium transition-all duration-300 transform hover:text-blue-300 hover:scale-105">About Us</Link>
                    </li>
                    <li>
                        <Link to="/admission" className="text-lg font-medium transition-all duration-300 transform hover:text-blue-300 hover:scale-105">Admission</Link>
                    </li>
                    <li>
                        <Link to="/infrastructure" className="text-lg font-medium transition-all duration-300 transform hover:text-blue-300 hover:scale-105">Infrastructure</Link>
                    </li>
                    <li>
                        <Link to="/notices" className="text-lg font-medium transition-all duration-300 transform hover:text-blue-300 hover:scale-105">Notices</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
