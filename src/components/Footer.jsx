import React from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';

const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-2">Shariq Khan</h3>
          <p className="text-gray-400 mb-6">Instructional Designer & Learning Experience Developer</p>
          <div className="flex space-x-6 mb-6">
            <a 
              href="https://www.linkedin.com/in/shariq-khan-00ab91b4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:shariqkhanns@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://github.com/shariqkhan010"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
          </div>
          <p className="text-gray-500 text-sm">© 2024 Shariq Khan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
  
  export default Footer;