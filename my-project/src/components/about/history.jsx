import React from 'react';

const History = () => {
    return (
        <section
            id="history"
            className="py-16 bg-gradient-to-br from-blue-100 via-white to-blue-50 relative min-h-screen flex items-center justify-center"
        >
            <div className="container mx-auto text-center relative z-10 px-6 md:px-12">
                {/* Header */}
                <h2 className="text-5xl font-extrabold text-blue-700 mb-6 animate-slideInFromTop tracking-wide font-[Poppins]">
                    Our <span className="text-yellow-500">History</span>
                </h2>

                {/* Main Content */}
                <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed font-[Roboto] animate-fadeIn">
                    Founded in 1990, My School has always been at the forefront of providing quality education. Our journey started with a small group of dedicated teachers and students. Over the years, we have expanded our facilities, improved our curriculum, and embraced new technologies, all with the goal of shaping the future leaders of tomorrow.
                </p>

                {/* Additional Info */}
                <div className="bg-white shadow-lg rounded-xl p-8 mt-8 max-w-4xl mx-auto animate-zoomIn">
                    <p className="text-lg text-gray-600 leading-7 font-[Lora]">
                        From humble beginnings to becoming a renowned institution, our history is a testament to the hard work and commitment of our faculty, staff, and students. Each chapter of our story is marked by innovation, dedication, and a passion for excellence.
                    </p>
                </div>

                {/* Decorative Line */}
                <div className="mt-12">
                    <div className="h-1 w-24 mx-auto bg-yellow-500 rounded-full animate-bounce"></div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 bg-opacity-60 bg-gradient-to-br from-blue-200 via-blue-50 to-yellow-100"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-300 opacity-70 rounded-full blur-3xl animate-slideInFromRight"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 opacity-50 rounded-full blur-2xl animate-slideInFromLeft"></div>
        </section>
    );
};

export default History;
