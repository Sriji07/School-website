import React from 'react';
import { Link } from 'react-router-dom';

const Admission = () => {
    return (
        <section
            id="admission"
            className="h-screen bg-cover bg-center flex items-center justify-center relative"
            style={{
                backgroundImage: 'url(/admission.jpg)', // Proper format for background image URL
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="container mx-auto text-center px-6 relative z-10">
                {/* Title with white text and animation */}
                <h2 className="text-7xl font-extrabold text-white mb-8 tracking-wide leading-tight animate__animated animate__fadeIn animate__delay-1.5s">
                    Admission Process
                </h2>

                {/* Subheading with white text and animation */}
                <p className="text-xl text-white max-w-3xl mx-auto mb-10 font-medium leading-relaxed animate__animated animate__fadeIn animate__delay-1.3s">
                    Join our community of future leaders! Learn more about the steps to apply and secure your place at My School.
                </p>

                {/* Action Buttons with sequential animations */}
                <div className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 animate__animated animate__fadeIn animate__delay-1.5s">
                    <Link
                        to="/admission/procedure"
                        className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white px-8 py-4 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-xl uppercase tracking-wide hover:opacity-90 animate__animated animate__zoomIn animate__delay-2.6s"
                    >
                        Procedure
                    </Link>
                    <Link
                        to="/admission/registration"
                        className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 text-white px-8 py-4 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-xl uppercase tracking-wide hover:opacity-90 animate__animated animate__zoomIn animate__delay-2.3s"
                    >
                        Registration
                    </Link>
                    <Link
                        to="/admission/withdrawal"
                        className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 text-white px-8 py-4 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-xl uppercase tracking-wide hover:opacity-90 animate__animated animate__zoomIn animate__delay-2.3s"
                    >
                        Withdrawal
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Admission;
