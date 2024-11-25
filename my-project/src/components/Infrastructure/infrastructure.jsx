import React from 'react';

const Infrastructure = () => {
    const infrastructureData = [
        {
            title: 'Reception',
            image: 'https://via.placeholder.com/300', // Replace with actual image URL
            description: 'A welcoming reception area where students and visitors are greeted.',
        },
        {
            title: 'Classroom',
            image: 'https://via.placeholder.com/300', // Replace with actual image URL
            description: 'Modern classrooms with smart boards and comfortable seating.',
        },
        {
            title: 'Labs',
            image: 'https://via.placeholder.com/300', // Replace with actual image URL
            description: 'Fully equipped science and computer labs for hands-on learning.',
        },
        {
            title: 'Library',
            image: 'https://via.placeholder.com/300', // Replace with actual image URL
            description: 'A spacious library with a wide collection of books and resources.',
        },
        {
            title: 'Swimming Pool',
            image: 'https://via.placeholder.com/300', // Replace with actual image URL
            description: 'An Olympic-size swimming pool for training and recreational activities.',
        },
        {
            title: 'Playground',
            image: 'https://via.placeholder.com/300', // Replace with actual image URL
            description: 'Large outdoor playgrounds for sports and physical activities.',
        },
    ];

    return (
        <section id="infrastructure" className="py-16 bg-gradient-to-r from-green-100 via-teal-200 to-blue-300">
            <div className="container mx-auto text-center">
                <h2 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-700 to-blue-800 mb-8">
                    Glimpse to Our Infrastructure
                </h2>
                <p className="text-xl max-w-2xl mx-auto text-gray-700 mb-12">
                    Our campus is equipped with world-class facilities to foster holistic learning and growth.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {infrastructureData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white bg-opacity-50 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 mx-2"
                        >
                            {/* Image Section */}
                            <div className="w-full h-48 overflow-hidden rounded-t-lg">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Text Content Section */}
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-md">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-base drop-shadow-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Infrastructure;
