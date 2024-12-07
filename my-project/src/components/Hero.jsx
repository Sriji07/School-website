import React, { useEffect } from 'react';
import backgroundImage from '/school.jpg'; // Adjust the path as needed
import { FaUserGraduate, FaBuilding, FaPalette, FaTree } from 'react-icons/fa';
import AOS from 'aos'; // Import AOS for scroll-based animations
import 'aos/dist/aos.css'; // Import AOS styles

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
            easing: 'ease-in-out', // Easing effect for smooth animation
            once: true, // Animation only triggers once
        });
    }, []);

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
            }}
            className="relative"
        >
            {/* Black Transparent Overlay for Entire Body */}
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

            {/* Hero Section */}
            <section
                id="hero"
                className="py-10 text-center relative z-10 overflow-hidden flex items-top justify-center"
            >
                <div className="container mx-auto relative z-10 px-4 md:px-12 text-center flex flex-col justify-center items-center h-full">
                    <h2
                        className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-wide"
                        data-aos="fade-down" // Adding scroll animation
                        data-aos-delay="500"
                    >
                        Welcome to <span className="text-yellow-400">My School</span>
                    </h2>
                    <p
                        className="text-2xl md:text-3xl text-white mb-8 max-w-4xl mx-auto"
                        data-aos="fade-up" // Adding scroll animation
                        data-aos-delay="1000"
                    >
                        Shaping the future with education, creativity, and a strong commitment to excellence. We foster an environment where learning is at the heart of everything we do.
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="/about"
                            className="bg-yellow-400 text-black px-8 py-4 rounded-lg shadow-lg text-xl font-semibold hover:bg-yellow-500 transform transition-all duration-300 ease-in-out"
                            data-aos="zoom-in"
                            data-aos-delay="2000"
                        >
                            Learn More
                        </a>
                        <a
                            href="/admission"
                            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg shadow-lg text-xl font-semibold hover:bg-white hover:text-blue-700 transform transition-all duration-300 ease-in-out"
                            data-aos="zoom-in"
                            data-aos-delay="2000"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="feature" className="py-16 z-10 relative">
                <div className="container mx-auto px-6">
                    <h3
                        className="text-6xl font-bold text-center text-white mb-12 ease-in-out"
                        data-aos="zoom-in"
                        data-aos-delay="500" // Reduced delay for heading animation
                    >
                        What Makes Us <span className="text-yellow-400">Best</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Feature 1 */}
                        <div
                            className="bg-purple-600 text-white p-6 rounded-lg shadow-lg text-center"
                            data-aos="bounce-in"
                            data-aos-delay="700" // Sequential delay for features
                        >
                            <FaUserGraduate className="text-5xl mx-auto mb-4" />
                            <h4 className="text-3xl font-bold">4000+</h4>
                            <p className="text-lg">Students</p>
                        </div>
                        {/* Feature 2 */}
                        <div
                            className="bg-purple-900 text-white p-6 rounded-lg shadow-lg text-center"
                            data-aos="bounce-in"
                            data-aos-delay="1000" // Added delay to make it animate after Feature 1
                        >
                            <FaBuilding className="text-5xl mx-auto mb-4" />
                            <h4 className="text-3xl font-bold">250+</h4>
                            <p className="text-lg">Faculty & Staff</p>
                        </div>
                        {/* Feature 3 */}
                        <div
                            className="bg-purple-600 text-white p-6 rounded-lg shadow-lg text-center"
                            data-aos="bounce-in"
                            data-aos-delay="1300" // Added delay to make it animate after Feature 2
                        >
                            <FaPalette className="text-5xl mx-auto mb-4" />
                            <h4 className="text-3xl font-bold">18+</h4>
                            <p className="text-lg">Extra-Curricular Activities</p>
                        </div>
                        {/* Feature 4 */}
                        <div
                            className="bg-purple-900 text-white p-6 rounded-lg shadow-lg text-center"
                            data-aos="bounce-in"
                            data-aos-delay="1000" // Added delay to make it animate after Feature 3
                        >
                            <FaTree className="text-5xl mx-auto mb-4" />
                            <h4 className="text-3xl font-bold">ICSE, CBSE</h4>
                            <p className="text-lg">Affiliated to</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Why Choose Us Section */}
            <section id="whyUs" className="py-16 z-10 relative">
                <div className="container mx-auto px-6">
                    <h3
                        className="text-6xl py-5 font-bold text-center text-white mb-12"
                        data-aos="fade-down"
                        data-aos-delay="500"
                    >
                        Why Choose <span className="text-yellow-400">My School?</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Item 1 */}
                        <div
                            className="bg-gradient-to-r from-purple-600 to-purple-900 text-white shadow-xl p-6 rounded-lg text-center"
                            data-aos="fade-up"
                            data-aos-delay="1000"
                        >
                            <h4 className="text-3xl font-semibold text-orange-500">01</h4>
                            <h5 className="text-2xl font-semibold mt-4">Home-like Environment</h5>
                            <p className="text-lg mt-4">
                                Kids feel happy and sure of themselves at school. They feel safe to learn and try new things without worries.
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div
                            className="bg-gradient-to-r from-green-500 to-green-800 text-white shadow-xl p-6 rounded-lg text-center"
                            data-aos="fade-up"
                            data-aos-delay="1500"
                        >
                            <h4 className="text-3xl font-semibold text-orange-500">02</h4>
                            <h5 className="text-2xl font-semibold mt-4">Loving Language</h5>
                            <p className="text-lg mt-4">
                                90% success rate of children reading before they go to school for children attending more than 12 months.
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div
                            className="bg-gradient-to-r from-blue-500 to-blue-800 text-white shadow-xl p-6 rounded-lg text-center"
                            data-aos="fade-up"
                            data-aos-delay="1000"
                        >
                            <h4 className="text-3xl font-semibold text-orange-500">03</h4>
                            <h5 className="text-2xl font-semibold mt-4">Culture of Honour</h5>
                            <p className="text-lg mt-4">
                                Our goal is to make everyone who interacts with My School feel important, valued, and like they're understood.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
                        {/* Item 4 */}
                        <div
                            className="bg-gradient-to-r from-red-500 to-red-800 text-white shadow-xl p-6 rounded-lg text-center"
                            data-aos="fade-up"
                            data-aos-delay="1500"
                        >
                            <h4 className="text-3xl font-semibold text-orange-500">04</h4>
                            <h5 className="text-2xl font-semibold mt-4">Personalized Care & Attention</h5>
                            <p className="text-lg mt-4">
                                Being comfortable is super important for learning, and the teachers who know a lot make sure you feel good while you learn.
                            </p>
                        </div>

                        {/* Item 5 */}
                        <div
                            className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white shadow-xl p-6 rounded-lg text-center"
                            data-aos="fade-up"
                            data-aos-delay="1000"
                        >
                            <h4 className="text-3xl font-semibold text-orange-500">05</h4>
                            <h5 className="text-2xl font-semibold mt-4">Quality Educators</h5>
                            <p className="text-lg mt-4">
                                Trusted, highly trained and hand-picked Educators. We believe that educators play a huge role in quality child care.
                            </p>
                        </div>

                        {/* Item 6 */}
                        <div
                            className="bg-gradient-to-r from-pink-500 to-pink-800 text-white shadow-xl p-6 rounded-lg text-center"
                            data-aos="fade-up"
                            data-aos-delay="1500"
                        >
                            <h4 className="text-3xl font-semibold text-orange-500">06</h4>
                            <h5 className="text-2xl font-semibold mt-4">Security & Safety</h5>
                            <p className="text-lg mt-4">
                                The school takes care of the security and safety of the students completely.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Section: Legacy of Excellence */}
            <section id="legacy" className="py-16 text-center relative z-10">
                <div className="container mx-auto px-4">
                    <h2
                        className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-wide"
                        data-aos="fade-down"
                        data-aos-delay="500"
                    >
                        Become a part of a <span className="text-yellow-400">Legacy of Excellence.</span>
                    </h2>
                    <p
                        className="text-1xl md:text-3xl text-white mb-8 max-w-6xl mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="1000"
                    >
                        Remember, when you are considering school admissions in Kolkata, that not only is <b>My School</b> an education, but it also <b>trains</b> and <b>molds</b> the leaders of the future to make it with impact. Please look at our curriculum, programs, and facilities, which make My School the perfect choice for your child's journey to success.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Hero;
