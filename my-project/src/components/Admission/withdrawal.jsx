import React from 'react';

const Withdrawal = () => {
    return (
        <section
            id="withdrawal"
            className="min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-violet-300 flex items-center justify-center px-8 py-20"
        >
            <div className="container mx-auto text-center">
                {/* Heading with gradient text */}
                <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-violet-600 mb-10 animate__animated animate__fadeIn animate__delay-0.5s">
                    Withdrawal Process
                </h2>

                {/* Introduction paragraph */}
                <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-800 font-medium leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
                    If you ever need to withdraw from the school, follow these steps to complete the process. We aim to make the withdrawal process as simple and efficient as possible.
                </p>

                {/* Step-by-step process */}
                <div className="space-y-8 max-w-4xl mx-auto text-left">
                    <div className="flex items-start space-x-6 animate__animated animate__fadeIn animate__delay-1s">
                        <div className="bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-full w-14 h-14 flex items-center justify-center font-extrabold text-2xl shadow-lg">
                            1
                        </div>
                        <div>
                            <h3 className="text-3xl font-semibold text-pink-600">Visit the Administration Office</h3>
                            <p className="text-lg text-gray-700 mt-2">
                                Inform the office about your decision to withdraw and discuss any necessary steps with the staff.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-6 animate__animated animate__fadeIn animate__delay-2s">
                        <div className="bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-full w-14 h-14 flex items-center justify-center font-extrabold text-2xl shadow-lg">
                            2
                        </div>
                        <div>
                            <h3 className="text-3xl font-semibold text-pink-600">Complete the Withdrawal Form</h3>
                            <p className="text-lg text-gray-700 mt-2">
                                Fill out the official withdrawal form and provide the necessary details to proceed.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-6 animate__animated animate__fadeIn animate__delay-3s">
                        <div className="bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-full w-14 h-14 flex items-center justify-center font-extrabold text-2xl shadow-lg">
                            3
                        </div>
                        <div>
                            <h3 className="text-3xl font-semibold text-pink-600">Settle Outstanding Dues</h3>
                            <p className="text-lg text-gray-700 mt-2">
                                Ensure that any pending fees or fines are cleared before the withdrawal process can be completed.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-6 animate__animated animate__fadeIn animate__delay-4s">
                        <div className="bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-full w-14 h-14 flex items-center justify-center font-extrabold text-2xl shadow-lg">
                            4
                        </div>
                        <div>
                            <h3 className="text-3xl font-semibold text-pink-600">Return School Property</h3>
                            <p className="text-lg text-gray-700 mt-2">
                                Ensure that all school property, such as books, uniforms, and equipment, is returned.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-6 animate__animated animate__fadeIn animate__delay-5s">
                        <div className="bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-full w-14 h-14 flex items-center justify-center font-extrabold text-2xl shadow-lg">
                            5
                        </div>
                        <div>
                            <h3 className="text-3xl font-semibold text-pink-600">Confirmation of Withdrawal</h3>
                            <p className="text-lg text-gray-700 mt-2">
                                After completing all the steps, you will receive official confirmation of your withdrawal from the school.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action Button */}
                <div className="mt-12">
                    <a
                        href="/contact"
                        className="bg-gradient-to-r from-pink-500 via-purple-500 to-violet-600 text-white px-8 py-4 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-xl uppercase tracking-wide hover:opacity-90"
                    >
                        Contact Us for More Details
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Withdrawal;
