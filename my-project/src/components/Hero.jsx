import React from 'react';

const Hero = () => {
    return (
        <section
            id="home"
            className="bg-cover bg-center py-20 text-center relative overflow-hidden min-h-screen flex items-center justify-center"
            style={{ backgroundImage: "url('https://www.freepik.com/free-photos-vectors/school')" }}
        >
            <div className="absolute inset-0 bg-opacity-100 bg-blue-900"></div>
            <div className="container mx-auto relative z-10 px-4 md:px-12 text-center flex flex-col justify-center items-center h-full">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-wide animate__animated animate__fadeIn animate__delay-1s">
                    Welcome to <span className="text-yellow-500">My School</span>
                </h2>
                <p className="text-2xl md:text-3xl text-white mb-8 max-w-4xl mx-auto animate__animated animate__fadeIn animate__delay-2s">
                    Shaping the future with education, creativity, and a strong commitment to excellence. We foster an environment where learning is at the heart of everything we do.
                </p>
                <div className="flex justify-center space-x-6">
                    <a
                        href="/about"
                        className="bg-yellow-500 text-black px-8 py-4 rounded-lg shadow-lg text-xl font-semibold hover:bg-yellow-600 transform transition-all duration-300 ease-in-out animate__animated animate__zoomIn"
                    >
                        Learn More
                    </a>
                    <a
                        href="/admission"
                        className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg shadow-lg text-xl font-semibold hover:bg-white hover:text-blue-700 transform transition-all duration-300 ease-in-out animate__animated animate__zoomIn animate__delay-1s"
                    >
                        Apply Now
                    </a>
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0">
                <img
                    src="https://www.freepik.com/free-photos-vectors/school"
                    alt="School Campus"
                    className="w-full h-full object-cover opacity-40 animate__animated animate__fadeIn animate__delay-3s"
                />
            </div>
        </section>
    );
};

export default Hero;
