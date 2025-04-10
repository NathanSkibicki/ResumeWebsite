import React, { useEffect, useState } from "react";
import aura from '../assets/Aura.jpg'
const About = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  // responsive handler
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //responsiveness checker
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  
  const cardMaxWidth = isMobile ? '90%' : isTablet ? '600px' : '800px';
  const marginTop = isMobile ? '100px' : isTablet ? '150px' : '200px';
  const headingFontSize = isMobile ? '24px' : isTablet ? '28px' : '32px';
  const paragraphFontSize = isMobile ? '16px' : '18px';
  const padding = isMobile ? '15px' : isTablet ? '20px' : '30px';

  return (
    <div style={{
      background: '#2c0452',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
    }}>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        background: '#8A2BE2',
        maxWidth: cardMaxWidth,
        width: '100%',
        marginTop: marginTop,
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
      }}>
          <h1 style={{
            color: 'white',
            fontSize: headingFontSize,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingTop: padding,
            paddingRight: padding,
            paddingLeft: padding,
            margin: 0,
          }}>
            About Me
          </h1>
          
          <p style={{
            color: 'white',
            fontSize: paragraphFontSize,
            lineHeight: '1.6',
            paddingTop: padding,
            paddingRight: padding,
            paddingLeft: padding,
            paddingBottom: padding,
            margin: 0,
          }}>
            I'm a passionate developer with a love for creating beautiful and
            functional web experiences. With expertise in React and modern web
            technologies, I build applications that are both visually appealing and
            performant.
          </p>
          <img src ={aura} alt="photo" style={{
                            height: '50vh',
                            maxHeight: '400px',
                            width: '50vh',
                            maxWidth: '400px', 
                            borderRadius: '50%', 
                            objectFit: 'cover',
                            border: '5px solid white',
                            marginBottom: '1rem'
                        }}/>
      </div>
    </div>
  );
};

export default About;