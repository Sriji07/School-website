import React, { useState } from 'react';

const Notices = () => {
    const [selectedNotice, setSelectedNotice] = useState(null); // State for the selected notice
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

    const notices = [
        {
            id: 1,
            title: 'Winter Break Announcement',
            date: 'November 25, 2024',
            description: 'The school will remain closed for winter break from December 20, 2024, to January 5, 2025.At common law, notice is the fundamental principle in service of process. In this case, the service of process puts the defendant "on notice" of the allegations contained within the complaint, or other such pleading. Since notice is fundamental, a court may rule a pleading defective if it does not put the defendant on notice.In a civil case, personal jurisdiction over a defendant is obtained by service of a summons. Service can be accomplished by personal delivery of the summons or subpoena to the person or an authorized agent of the person. Service may also be made by substitute means; for example, in many jurisdictions, service of a summons can be made on a person of suitable age and discretion at the residence or place of business of the defendant. Jurisdiction over corporations can often be obtained through a government body authorized to receive such process.',
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

    const openModal = (notice) => {
        setSelectedNotice(notice);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedNotice(null);
        setIsModalOpen(false);
    };

    return (
        <section id="notices" className="py-16 bg-gradient-to-r from-blue-400 via-teal-300 to-teal-500">
            <div className="container mx-auto px-6">
                {/* Title */}
                <h2
                    className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-teal-700 text-center mb-8"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    School Notices
                </h2>
                <p
                    className="text-lg max-w-3xl mx-auto text-center mb-12 text-gray-700"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    Stay updated with the latest announcements and information from our school.
                </p>
                <div className="space-y-6">
                    {notices.map((notice) => (
                        <div
                            key={notice.id}
                            className="bg-white bg-opacity-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer"
                            onClick={() => openModal(notice)} // Open modal on click
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            <h3
                                className="text-2xl font-semibold text-blue-600 mb-2"
                                style={{ fontFamily: 'Lora, serif' }}
                            >
                                {notice.title}
                            </h3>
                            <p className="text-sm text-gray-500 mb-4">{notice.date}</p>
                            <p className="text-gray-700 truncate">{notice.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && selectedNotice && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 shadow-xl w-11/12 max-w-lg">
                        <h3
                            className="text-3xl font-semibold text-blue-600 mb-4"
                            style={{ fontFamily: 'Lora, serif' }}
                        >
                            {selectedNotice.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">{selectedNotice.date}</p>
                        <p className="text-gray-700">{selectedNotice.description}</p>
                        <button
                            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Notices;
