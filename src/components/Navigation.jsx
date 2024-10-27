import React, { useState } from 'react';
import { 
    Menu, X, ChevronRight, Star, Linkedin, Twitter, Mail, MapPin, 
    ArrowRight, Github, Home, User, Briefcase, Wrench, MessageSquare, 
    FileText, Download
  } from 'lucide-react';

  

const Navigation = ({ isOpen, setIsOpen }) => {
    const menuItems = [
      { name: 'Home', icon: Home },
      { name: 'About', icon: User },
      { name: 'Portfolio', icon: Briefcase },
      { name: 'Skills', icon: Star },
      { name: 'Tools', icon: Wrench },
      { name: 'Contact', icon: MessageSquare },
      { name: 'Resume', icon: FileText }
    ];
  
    return (
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">ID Portfolio</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {menuItems.map(({ name, icon: Icon }) => (
                <a
                  key={name}
                  href={name === 'Resume' ? '/resume.pdf' : `#${name.toLowerCase()}`}
                  className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
                  target={name === 'Resume' ? '_blank' : '_self'}
                >
                  <Icon size={16} />
                  <span>{name}</span>
                </a>
              ))}
            </div>
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-700 hover:text-indigo-600"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white">
            {menuItems.map(({ name, icon: Icon }) => (
              <a
                key={name}
                href={name === 'Resume' ? '/resume.pdf' : `#${name.toLowerCase()}`}
                className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
                target={name === 'Resume' ? '_blank' : '_self'}
              >
                <Icon size={20} />
                <span>{name}</span>
              </a>
            ))}
          </div>
        )}
      </nav>
    );
  };
  
  export default Navigation;