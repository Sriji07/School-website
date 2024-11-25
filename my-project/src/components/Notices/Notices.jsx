import React from 'react';

const Notices = () => {
    const notices = [
        {
            id: 1,
            title: 'Winter Break Announcement',
            date: 'November 25, 2024',
            description: 'The school will remain closed for winter break from December 20, 2024, to January 5, 2025.',
        },
        {
            id: 2,
            title: 'Annual Sports Day',
            date: 'November 30, 2024',
            description: 'Join us for the Annual Sports Day on December 10, 2024, at the school playground. All are welcome!',
        },
        {
            id: 3,
            title: 'Admission Open for 2025',
            date: 'November 15, 2024',
            description: 'Admissions for the 2025 academic year are now open. Apply before December 31, 2024.',
        },
    ];

    return (
        <section id="notices" className="py-16 bg-gradient-to-r from-blue-400 via-teal-300 to-teal-500">
            <div className="container mx-auto px-6">
                {/* Title with Poppins font */}
                <h2 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-teal-700 text-center mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    School Notices
                </h2>
                {/* Subheading with Inter font */}
                <p className="text-lg max-w-3xl mx-auto text-center mb-12 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Stay updated with the latest announcements and information from our school.
                </p>
                <div className="space-y-6">
                    {notices.map((notice) => (
                        <div
                            key={notice.id}
                            className="bg-white bg-opacity-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            {/* Notice title with Lora font */}
                            <h3 className="text-2xl font-semibold text-blue-600 mb-2" style={{ fontFamily: 'Lora, serif' }}>
                                {notice.title}
                            </h3>
                            <p className="text-sm text-gray-500 mb-4">{notice.date}</p>
                            <p className="text-gray-700">{notice.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Notices;
