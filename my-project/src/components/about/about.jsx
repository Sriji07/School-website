import React, { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
    const [popupImage, setPopupImage] = useState(null);

    // Handle popup open and close
    const handleImageClick = (image) => setPopupImage(image);
    const closePopup = () => setPopupImage(null);

    return (
        <section
            id="about"
            className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-100 to-blue-200 relative overflow-hidden flex items-center justify-center"
        >
            {/* Decorative Animated Background Elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-300 rounded-full blur-2xl opacity-60 animate-[ping_6s_infinite]"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-70 animate-[pulse_4s_infinite]"></div>
            <div className="absolute top-16 right-16 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-50 animate-[spin_10s_linear_infinite]"></div>

            {/* Content */}
            <div className="container mx-auto text-center relative z-10 px-6">
                <h2 className="text-6xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-[fadeInDown_1s_ease-in-out] font-display">
                    Discover <span className="text-yellow-500">Our Story</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto mb-12 animate-[fadeInUp_1.2s_ease-in-out] font-body">
                    Our school is where knowledge meets creativity, inspiring students to dream big and achieve more.
                </p>

                {/* Images Section */}
                <div className="flex justify-center space-x-6 mt-10 animate-[fadeIn_1.5s_ease-in-out]">
                    <img
                        src="/awards.jpg"
                        alt="Awards"
                        className="w-[300px] h-[200px] rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition"
                        onClick={() => handleImageClick('/src/assets/images/awards.jpg')}
                    />
                    <img
                        src="/assembly.jpg"
                        alt="Assembly"
                        className="w-[300px] h-[200px] rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition"
                        onClick={() => handleImageClick('/src/assets/images/assembly.jpg')}
                    />
                    <img
                        src="/extracuricular.jpg"
                        alt="Extracurricular"
                        className="w-[300px] h-[200px] rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition"
                        onClick={() => handleImageClick('/src/assets/images/extracuricular.jpg')}
                    />
                </div>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mt-12 animate-[fadeInUp_1.8s_ease-in-out]">
                    <Link
                        to="/about/history"
                        className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-display"
                    >
                        Our History
                    </Link>
                    <Link
                        to="/about/mission"
                        className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-display"
                    >
                        Our Mission
                    </Link>
                    <Link
                        to="/about/vision"
                        className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal-400 to-green-500 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-display"
                    >
                        Our Vision
                    </Link>
                </div>
            </div>

            {/* Popup Image Overlay */}
            {popupImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 animate-[fadeIn_0.5s_ease-in-out]"
                    onClick={closePopup}
                >
                    <img
                        src={popupImage}
                        alt="Popup"
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
                    />
                    <button
                        className="absolute top-5 right-5 text-white text-3xl font-bold"
                        onClick={closePopup}
                    >
                        &times;
                    </button>
                </div>
            )}
        </section>
    );
};

export default About;
