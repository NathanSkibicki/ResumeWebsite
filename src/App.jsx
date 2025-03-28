import React, { useRef, useEffect } from 'react';
import './App.css';
import Home from "./pages/Home";

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

  return (
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
        className="page" 
        style={{ 
          height: '100vh', 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          scrollSnapAlign: 'start'
        }}
      >
        <Home />
      </div>
      <div 
        className="page" 
        style={{ 
          height: '100vh',
          backgroundColor: "#f7a8a8", 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          scrollSnapAlign: 'start'
        }}
      >
        <h1>I am</h1>
      </div>

      <div 
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
  );
}

export default App;