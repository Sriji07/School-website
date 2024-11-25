import React from 'react';
import { Link } from 'react-router-dom';

const Admission = () => {
    return (
        <section id="admission" className="h-screen bg-gradient-to-r from-indigo-200 via-purple-300 to-blue-200 flex items-center justify-center">
            <div className="container mx-auto text-center px-6">
                {/* Title with bold darker contrasting gradient text */}
                <h2 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-700 to-blue-900 mb-8 tracking-wide leading-tight animate__animated animate__fadeIn animate__delay-1.8s">
                    Admission Process
                </h2>

                {/* Subheading with darker gradient text */}
                <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-700 to-blue-800 max-w-3xl mx-auto mb-10 font-medium leading-relaxed animate__animated animate__fadeIn animate__delay-1.5s">
                    Join our community of future leaders! Learn more about the steps to apply and secure your place at My School.
                </p>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
                    <Link
                        to="/admission/procedure"
                        className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white px-8 py-4 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-xl uppercase tracking-wide hover:opacity-90 animate__animated animate__zoomIn animate__delay-1s"
                    >
                        Procedure
                    </Link>
                    <Link
                        to="/admission/registration"
                        className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 text-white px-8 py-4 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-xl uppercase tracking-wide hover:opacity-90 animate__animated animate__zoomIn animate__delay-1.2s"
                    >
                        Registration
                    </Link>
                    <Link
                        to="/admission/withdrawal"
                        className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 text-white px-8 py-4 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-xl uppercase tracking-wide hover:opacity-90 animate__animated animate__zoomIn animate__delay-1.4s"
                    >
                        Withdrawal
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Admission;
