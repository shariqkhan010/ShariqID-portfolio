import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const placeholders = Array(6).fill('Coming Soon');

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 pt-24 pb-16">
      {/* Container */}
      <div className="w-full max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">My Portfolio</h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {placeholders.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center text-gray-500 font-bold text-xl w-full max-w-xs h-48 hover:shadow-lg transition-shadow"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Go Back Button */}
        <div className="text-center mt-16">
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Go Back
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
// Trigger Vercel deploy