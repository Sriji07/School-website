import React from 'react';

const Procedure = () => {
    return (
        <section id="procedure" className="min-h-screen bg-gradient-to-r from-pink-300 via-red-300 to-pink-400 flex items-center justify-center px-6 py-16">
            <div className="container mx-auto text-center">
                {/* Title with gradient text */}
                <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-red-700 to-pink-800 mb-8 tracking-wide leading-tight animate__animated animate__fadeIn animate__delay-0.5s">
                    Admission Procedure
                </h2>

                {/* Introduction paragraph */}
                <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-600 to-pink-700 max-w-3xl mx-auto mb-10 font-medium leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
                    Our admission process is simple and designed to help us understand the aspirations and goals of each student. Here's how you can apply:
                </p>

                {/* Step-by-step guide */}
                <div className="space-y-12 max-w-3xl mx-auto text-left">
                    {/* Step 1 */}
                    <div className="flex items-start space-x-6 animate__animated animate__fadeIn animate__delay-1s">
                        <div className="bg-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                            1
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-red-800">Fill the Online Application Form</h3>
                            <p className="text-lg text-gray-700 mt-2">
                                Start by filling the online application form with your personal and academic details.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start space-x-6 animate__animated animate__fadeIn animate__delay-2s">
                        <div className="bg-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                            2
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-red-800">Submit Required Documents</h3>
                            <p className="text-lg text-gray-700 mt-2">
                                After completing the form, submit the necessary documents such as your transcripts, birth certificate, and more.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start space-x-6 animate__animated animate__fadeIn animate__delay-3s">
                        <div className="bg-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                            3
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-red-800">Attend the Interview</h3>
                            <p className="text-lg text-gray-700 mt-2">
                                Selected applicants will be invited to attend an interview where we’ll discuss your interests, goals, and fit for the school.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex items-start space-x-6 animate__animated animate__fadeIn animate__delay-4s">
                        <div className="bg-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                            4
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-red-800">Receive Acceptance Letter</h3>
                            <p className="text-lg text-gray-700 mt-2">
                                If you are selected, you will receive an acceptance letter confirming your place at the school.
                            </p>
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div className="flex items-start space-x-6 animate__animated animate__fadeIn animate__delay-5s">
                        <div className="bg-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                            5
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-red-800">Complete Registration</h3>
                            <p className="text-lg text-gray-700 mt-2">
                                After receiving the acceptance letter, complete the registration process and pay the required fees to secure your spot.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Center-aligned Call to Action Button */}
                <div className="mt-10 flex justify-center animate__animated animate__zoomIn animate__delay-6s">
                    <a
                        href="/admission/registration"
                        className="bg-gradient-to-r from-pink-400 via-red-500 to-pink-600 text-white px-10 py-4 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-xl uppercase tracking-wide hover:opacity-90"
                    >
                        Start Your Application
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Procedure;
