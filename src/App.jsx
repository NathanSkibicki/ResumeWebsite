import React, { useEffect } from 'react';
import './App.css';
import Home from "./pages/Home";
import About from './pages/About';
import Navbar from './Navbar';
import Project from './pages/Projects';
import Contact from './pages/Contact'

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <Navbar onNavClick={scrollToSection} />
      <div className="smooth-scroll-container">
        <div 
          id="home"
          className="page" 
          style={{ 
            minHeight: '100vh', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            flexShrink: 0
          }}
        >
          <Home />
        </div>
        <div 
          id="about"
          className="page" 
          style={{ 
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            flexShrink: 0
          }}
        >
          <About onNavClick={scrollToSection} />
        </div>
        <div 
          id="portfolio"
          className="page" 
          style={{ 
            minHeight: '100vh',
            background: '#2c0452',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            flexShrink: 0
          }}
        >
          <Project />
        </div>
        <div 
          id="contact"
          className="page" 
          style={{ 
            minHeight: '100vh',
            backgroundColor: "#2c0452", 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            flexShrink: 0
          }}
        >
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;