import React, { useState } from 'react';

const Vision = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "/src/assets/images/vision/vision1.jpg",
        "/src/assets/images/vision/vision2.jpg",
        "/src/assets/images/vision/vision3.jpg",
        "/src/assets/images/vision/vision4.jpg",
        "/src/assets/images/vision/vision5.jpg",
        "/src/assets/images/vision/vision6.jpg",
        "/src/assets/images/vision/vision7.jpg",
        "/src/assets/images/vision/vision8.jpg",
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
            id="vision"
            className="min-h-screen py-16 bg-gradient-to-br from-purple-100 via-white to-pink-50 relative flex items-center justify-center overflow-hidden"
        >
            {/* Background Decorative Elements */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 bg-opacity-50"
            ></div>
            <div
                className="absolute top-0 left-0 w-48 h-48 bg-pink-600 opacity-70 rounded-full blur-3xl animate-slideInFromTop"
            ></div>
            <div
                className="absolute bottom-0 right-0 w-64 h-64 bg-purple-300 opacity-50 rounded-full blur-3xl animate-slideInFromBottom"
            ></div>


            {/* Content Container */}
            <div className="container mx-auto relative z-10 px-6 md:px-12 text-center">
                {/* Title with Animation */}
                <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-wide text-purple-800 animate__animated animate__fadeInUp">
                    Our <span className="text-pink-600">Vision</span>
                </h2>

                {/* Description with Animation */}
                <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed font-[Lora] animate__animated animate__fadeInUp animate__delay-1s">
                    To create a transformative educational environment that empowers every student to excel academically, grow creatively, and lead with integrity in a rapidly changing world.
                </p>

                {/* Image Carousel with Cards */}
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
                                <div className="bg-white opacity-100 rounded-lg shadow-xl overflow-hidden">
                                    <img
                                        src={image}
                                        alt={`Vision Image ${index + 1}`}
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
                            ? "pointer-events-none opacity-30 bg-gray-500 shadow-none"
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

                {/* Decorative Line */}
                <div className="mt-12">
                    <div className="h-1 w-24 mx-auto bg-purple-600 rounded-full animate-bounce"></div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
