import React, { useRef, useEffect } from 'react';
import './App.css';
import Home from "./pages/Home";
import About from './pages/About';
import Navbar from './Navbar';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!containerRef.current) return;

      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop, clientHeight } = containerRef.current;
      
      const currentPage = Math.floor(scrollTop / clientHeight);
      const nextPage = deltaY > 0 ? currentPage + 1 : currentPage - 1;
      
      containerRef.current.scrollTo({
        top: nextPage * clientHeight,
        behavior: 'smooth'
      });
    };

    const container = containerRef.current;
    container?.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container?.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Function to handle navbar link clicks
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element && containerRef.current) {
      containerRef.current.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="app-container">
      <Navbar onNavClick={scrollToSection} />
      <div 
        ref={containerRef} 
        className="smooth-scroll-container"
        style={{
          height: '100vh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory'
        }}
      >
        <div 
          id="home"
          className="page" 
          style={{ 
            height: '100vh', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            scrollSnapAlign: 'start',
            paddingTop: '60px' // Add padding to account for navbar
          }}
        >
          <Home />
        </div>
        <div 
          id="about"
          className="page" 
          style={{ 
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            scrollSnapAlign: 'start',
          }}
        >
          <About />
        </div>
        <div 
          id="portfolio"
          className="page" 
          style={{ 
            height: '100vh',
            backgroundColor: "#a8d5f7", 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            scrollSnapAlign: 'start'
          }}
        >
          <h1>Nathan</h1>
        </div>
        <div 
          id="contact"
          className="page" 
          style={{ 
            height: '100vh',
            backgroundColor: "#d5f7a8", 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            scrollSnapAlign: 'start'
          }}
        >
          <h1>Hi</h1>
        </div>
      </div>
    </div>
  );
}

export default App;