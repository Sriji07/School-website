import React, { useState } from 'react';

const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        grade: '',
        dateOfBirth: '',
        address: '',
        parentName: '',
        parentPhone: '',
        gender: '',
        contactPreference: 'email', // Default to email
        message: '',
        termsAccepted: false, // New checkbox for terms and conditions
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleCheckboxChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.termsAccepted) {
            alert('You must agree to the terms and conditions.');
            return;
        }
        alert('Registration successful!');
        console.log(formData);
    };

    return (
        <section
            id="registration"
            className="min-h-screen bg-gradient-to-r from-green-300 via-blue-300 to-green-400 flex items-center justify-center px-6 py-16"
        >
            <div className="container mx-auto">
                {/* Headline with adjusted padding */}
                <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-green-700 mb-4 py-4 text-center animate__animated animate__fadeIn animate__delay-1s">
                    Registration Form
                </h2>

                <form
                    className="bg-white bg-opacity-40 backdrop-blur-lg shadow-lg rounded-lg px-8 pt-6 pb-8 max-w-lg mx-auto animate__animated animate__fadeIn animate__delay-1.5s"
                    onSubmit={handleSubmit}
                >
                    {/* Name Input */}
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-lg font-medium mb-2"
                            htmlFor="name"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-lg font-medium mb-2"
                            htmlFor="email"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            required
                            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
                        />
                    </div>

                    {/* Phone Number Input */}
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-lg font-medium mb-2"
                            htmlFor="phone"
                        >
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            required
                            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
                        />
                    </div>

                    {/* Date of Birth Input */}
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-lg font-medium mb-2"
                            htmlFor="dateOfBirth"
                        >
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            id="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
                        />
                    </div>

                    {/* Address Input */}
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-lg font-medium mb-2"
                            htmlFor="address"
                        >
                            Address
                        </label>
                        <textarea
                            name="address"
                            id="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter your address"
                            rows="3"
                            required
                            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
                        ></textarea>
                    </div>

                    {/* Parent/Guardian Details */}
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-lg font-medium mb-2"
                            htmlFor="parentName"
                        >
                            Parent/Guardian Name
                        </label>
                        <input
                            type="text"
                            name="parentName"
                            id="parentName"
                            value={formData.parentName}
                            onChange={handleChange}
                            placeholder="Enter parent/guardian's full name"
                            required
                            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
                        />
                    </div>

                    {/* Parent/Guardian Phone Number */}
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-lg font-medium mb-2"
                            htmlFor="parentPhone"
                        >
                            Parent/Guardian Phone
                        </label>
                        <input
                            type="tel"
                            name="parentPhone"
                            id="parentPhone"
                            value={formData.parentPhone}
                            onChange={handleChange}
                            placeholder="Enter parent/guardian's phone number"
                            required
                            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
                        />
                    </div>

                    {/* Gender Selection */}
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-lg font-medium mb-2"
                            htmlFor="gender"
                        >
                            Gender
                        </label>
                        <select
                            name="gender"
                            id="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Preferred Mode of Contact */}
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-lg font-medium mb-2"
                            htmlFor="contactPreference"
                        >
                            Preferred Mode of Contact
                        </label>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                name="contactPreference"
                                value="email"
                                checked={formData.contactPreference === 'email'}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            <label htmlFor="email" className="mr-6">Email</label>
                            <input
                                type="radio"
                                name="contactPreference"
                                value="phone"
                                checked={formData.contactPreference === 'phone'}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            <label htmlFor="phone">Phone</label>
                        </div>
                    </div>

                    {/* Message Input */}
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-lg font-medium mb-2"
                            htmlFor="message"
                        >
                            Additional Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Additional information or queries"
                            rows="4"
                            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
                        ></textarea>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="mb-6 flex items-center">
                        <input
                            type="checkbox"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                            required
                        />
                        <label htmlFor="termsAccepted" className="text-lg">
                            I agree to the terms and conditions
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-green-400 via-blue-400 to-green-500 text-white px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 font-bold text-lg uppercase tracking-wide hover:opacity-90"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Registration;
