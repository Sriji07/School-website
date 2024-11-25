import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
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
                <h2 className="text-6xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-[fadeIn_1s_ease-in] font-display">
                    Discover <span className="text-yellow-500">Our Story</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto mb-12 animate-[slideIn_1s_ease-in-out] font-body">
                    Our school is a place where knowledge meets creativity, and dreams take flight. Join us as we shape a brighter, more colorful future for every student.
                </p>

                <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto mb-12 animate-[slideIn_1s_ease-in-out] font-body">
                    At our school, we believe in nurturing the potential of every child. Our curriculum blends academics with creativity, fostering an environment where children are encouraged to explore, innovate, and grow.
                </p>

                <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto mb-12 animate-[slideIn_1s_ease-in-out] font-body">
                    With a dedicated team of educators, modern facilities, and a holistic approach to learning, we strive to empower our students to become well-rounded individuals, prepared for the challenges of tomorrow.
                </p>

                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
                    <Link
                        to="/about/history"
                        className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-[zoomIn_0.8s_ease-out] font-display"
                    >
                        Our History
                    </Link>
                    <Link
                        to="/about/mission"
                        className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-[zoomIn_1s_ease-out_delay-300ms] font-display"
                    >
                        Our Mission
                    </Link>
                    <Link
                        to="/about/vision"
                        className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal-400 to-green-500 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-[zoomIn_1.2s_ease-out_delay-600ms] font-display"
                    >
                        Our Vision
                    </Link>
                </div>

                {/* Additional Paragraphs */}
                <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto mt-12 mb-12 animate-[slideIn_1s_ease-in-out] font-body">
                    We offer a variety of extracurricular activities, including sports, arts, and leadership programs, to help students develop skills outside of the classroom. These activities foster teamwork, discipline, and creativity.
                </p>

                <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto mt-12 mb-12 animate-[slideIn_1s_ease-in-out] font-body">
                    Our school community is inclusive, vibrant, and diverse, bringing together students from different backgrounds to create an environment where everyone can thrive.
                </p>
            </div>
        </section>
    );
};

export default About;
