import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  // Create 5 placeholder items
  const placeholders = Array(5).fill('Coming Soon');

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 pt-24 pb-16">
      <div className="w-full max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">My Portfolio</h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Real Project Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center w-full max-w-sm h-full hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">JavaScript Fundamentals Course</h3>
            <p className="text-gray-700 mb-6">An interactive eLearning platform for JavaScript beginners.</p>
            <div className="flex justify-center space-x-4 mb-4">
              <a
                href="https://github.com/shariqkhan010/javascript-fundamentals-course"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://67b8e637347a75009d1e1984--javascriptelearning.netlify.app/#home"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Live Demo
              </a>
            </div>
            <div className="flex justify-center space-x-2 mt-auto">
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm">HTML</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm">CSS</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm">JavaScript</span>
              
            </div>
          </div>

          {/* Placeholders */}
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