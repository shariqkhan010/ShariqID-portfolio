import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <Hero />
      <Skills />
      <Tools />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;