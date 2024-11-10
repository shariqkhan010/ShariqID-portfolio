import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm'
import Portfolio from './components/Portfolio';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen">
        <Navigation isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Skills />
                <Tools />
                <ContactForm />
              </>
            }
          />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;