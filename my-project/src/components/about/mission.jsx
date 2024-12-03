import React, { useState } from "react";

const Mission = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "/src/assets/images/mission/mission1.jpg",
        "/src/assets/images/mission/mission2.jpg",
        "/src/assets/images/mission/mission3.jpg",
        "/src/assets/images/mission/mission4.jpg",
        "/src/assets/images/mission/mission5.jpg",
        "/src/assets/images/mission/mission6.jpg",
        "/src/assets/images/mission/mission7.jpg",
        "/src/assets/images/mission/mission8.jpg",
    ];

    // Go to the next slide
    const nextSlide = () => {
        if (currentIndex < images.length - 4) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    // Go to the previous slide
    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <section
            id="mission"
            className="min-h-screen py-16 bg-gradient-to-br from-teal-300 via-blue-100 to-green-200 relative flex items-center justify-center overflow-hidden"
        >
            {/* Content Container */}
            <div className="container mx-auto relative z-10 px-6 md:px-12 text-center">
                {/* Title with Animation */}
                <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-wide text-blue-800 animate__animated animate__fadeInUp">
                    Our <span className="text-green-600">Mission</span>
                </h2>

                {/* Description with Animation */}
                <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed animate__animated animate__fadeInUp animate__delay-1s">
                    Our mission is to provide an inclusive, empowering environment where students grow academically, develop creativity, and cultivate leadership skills to shape a better tomorrow.
                </p>

                {/* Image Carousel */}
                <div className="mt-12 relative overflow-hidden w-full">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 25}%)`,
                        }}
                    >
                        {/* Cards with Animation */}
                        {images.map((image, index) => (
                            <div key={index} className="w-[25%] p-2 flex-shrink-0 animate__animated animate__zoomIn">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img
                                        src={image}
                                        alt={`Mission Image ${index + 1}`}
                                        className="w-full h-[250px] object-cover"
                                    />

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Next and Previous Buttons with Animation */}
                    <button
                        onClick={prevSlide}
                        className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-blue rounded-full p-3 shadow-lg transition-all duration-300 ${currentIndex === 0
                            ? "pointer-events-none opacity-30 bg-gray-500 shadow-none opacity-20"
                            : "opacity-60 hover:opacity-100 bg-white-600"
                            } animate__animated animate__fadeInLeft`}
                    >
                        &#60;
                    </button>

                    <button
                        onClick={nextSlide}
                        className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-blue rounded-full p-3 shadow-lg transition-all duration-300 ${currentIndex === images.length - 4
                            ? "pointer-events-none opacity-30 bg-gray-500 shadow-none"
                            : "opacity-60 hover:opacity-100 bg-white-600"
                            } animate__animated animate__fadeInRight`}
                    >
                        &#62;
                    </button>


                </div>

                {/* Decorative Line with Animation */}
                <div className="mt-12">
                    <div className="h-1 w-24 mx-auto bg-purple-600 rounded-full animate-bounce animate__animated animate__bounceIn"></div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
