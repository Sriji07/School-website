import React, { useState } from 'react';


const Mission = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        '/src/assets/images/mission1.jpg',
        '/assets/images/mission2.jpg',
        '/assets/images/mission3.jpg',
        '/assets/images/mission4.jpg',
        '/assets/images/mission5.jpg',
        '/assets/images/mission6.jpg',
        '/assets/images/mission7.jpg'
    ];


    // Handle next slide
    const nextSlide = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1); // Increment index until the last image
        }
    };

    // Handle previous slide
    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1); // Decrement index until the first image
        }
    };

    return (
        <section
            id="mission"
            className="min-h-screen py-16 bg-gradient-to-br from-blue-100 via-white to-green-50 relative flex items-center justify-center overflow-hidden"
        >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-opacity-50"></div>
            <div className="absolute top-0 left-0 w-48 h-48 bg-yellow-400 opacity-70 rounded-full blur-2xl animate-slideInFromTop"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-300 opacity-50 rounded-full blur-3xl animate-slideInFromBottom"></div>

            {/* Content Container */}
            <div className="container mx-auto relative z-10 px-6 md:px-12 text-center">
                {/* Title */}
                <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-wide text-blue-800 animate-slideInFromTop font-[Poppins]">
                    Our <span className="text-green-600">Mission</span>
                </h2>

                {/* Description */}
                <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed font-[Lora] animate-fadeIn">
                    Our mission is to provide an inclusive, empowering environment where students grow academically, develop creativity, and cultivate leadership skills to shape a better tomorrow.
                </p>

                {/* Additional Content Box */}
                <div className="bg-white shadow-xl rounded-lg p-8 mt-8 mx-auto max-w-4xl animate-zoomIn">
                    <p className="text-lg md:text-xl text-gray-600 leading-7 font-[Roboto]">
                        At the heart of our mission lies a commitment to excellence, innovation, and collaboration. Together, we aim to inspire students to dream big, think critically, and act responsibly in an ever-changing world.
                    </p>
                </div>

                {/* Image Carousel (Manual Sliding) */}
                <div className="mt-12 relative overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 33.33}%)`, // Slide images 33.33% each step to show 3 images
                        }}
                    >
                        {/* Images (Only 3 at a time) */}
                        {images.map((image, index) => (
                            <div key={index} className="w-[33.33%] p-2">
                                <img
                                    src={image}
                                    alt={`Mission Image ${index + 1}`}
                                    className="w-full h-[400px] object-cover rounded-lg shadow-xl"
                                    style={{
                                        aspectRatio: '1', // Make the image square
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Next and Previous Buttons */}
                    <button
                        onClick={prevSlide}
                        className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent text-black rounded-full p-3 shadow-lg ${currentIndex === 0 ? 'pointer-events-none opacity-50' : ''}`}
                    >
                        &#60;
                    </button>
                    <button
                        onClick={nextSlide}
                        className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent text-black rounded-full p-3 shadow-lg ${currentIndex === images.length - 4 ? 'pointer-events-none opacity-50' : ''}`}
                    >
                        &#62;
                    </button>
                </div>

                {/* Decorative Line */}
                <div className="mt-12">
                    <div className="h-1 w-24 mx-auto bg-blue-600 rounded-full animate-bounce"></div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
