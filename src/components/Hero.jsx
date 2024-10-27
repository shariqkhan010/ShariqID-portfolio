import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import resumePic from '../assets/resumepic.jpeg';
const Hero = () => (
  <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-indigo-100"> {/* Changed to a solid color for testing */}
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="mb-8">
        <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-indigo-600">
          <img 
            src={resumePic} 
            alt="Shariq Khan" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Creating Engaging Learning Experiences
      </h1>
      <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto"> {/* Changed to a darker text color */}
        Hi, I'm Shariq Khan. I transform complex information into engaging, effective learning experiences.
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href="#portfolio"
          className="inline-flex items-center px-6 py-3 rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          View My Work
          <ArrowRight className="ml-2" size={20} />
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          className="inline-flex items-center px-6 py-3 rounded-md text-indigo-600 bg-white border-2 border-indigo-600 hover:bg-indigo-50 group"
        >
          <span>Download Resume</span>
          <Download className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
