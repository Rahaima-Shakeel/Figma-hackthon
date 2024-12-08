"use client"
import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted Email:', email);
    setEmail(''); // Clear the email input field
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        {/* Heading Section */}
        <h2 className="text-3xl font-bold text-center mb-4">Join the club and get the benefits</h2>
        <p className="text-gray-600 text-center mb-8 leading-relaxed">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
        </p>

        {/* Newsletter Form Section */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          {/* Input Field */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-4 py-2 md:w-1/2 rounded-md focus:outline-none focus:ring-2bg-[#3e3e80]"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#2C2C60] text-white font-semibold py-2 px-6  transition ease-in-out duration-200"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
