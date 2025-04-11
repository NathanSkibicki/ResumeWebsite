import React, { useEffect, useState } from "react";
import aura from '../assets/Aura.jpg'

const About = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Responsive values based on screen size
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  
  const cardMaxWidth = isMobile ? '90%' : isTablet ? '700px' : '900px';
  const marginTop = isMobile ? '80px' : isTablet ? '120px' : '150px';
  const headingFontSize = isMobile ? '24px' : isTablet ? '28px' : '32px';
  const paragraphFontSize = isMobile ? '16px' : '18px';
  const padding = isMobile ? '15px' : isTablet ? '20px' : '30px';
  
  // Image size calculations
  const imageSize = isMobile ? '200px' : isTablet ? '250px' : '300px';
  const imageBorderWidth = isMobile ? '3px' : '5px';

  return (
    <div style={{
      background: '#2c0452',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      padding: '20px'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        background: '#8A2BE2',
        maxWidth: cardMaxWidth,
        width: '100%',
        marginTop: marginTop,
        borderRadius: '12px',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
        overflow: 'hidden',
        padding: padding,
      }}>
        <div style={{
          flex: isMobile ? 'auto' : '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          order: isMobile ? 2 : 1,
          padding: padding,
        }}>
          <h1 style={{
            color: 'white',
            fontSize: headingFontSize,
            fontWeight: 'bold',
            textAlign: isMobile ? 'center' : 'left',
            margin: '0 0 20px 0',
          }}>
            About Me
          </h1>
          <p style={{
            color: 'white',
            fontSize: paragraphFontSize,
            lineHeight: '1.6',
            margin: 0,
          }}>
            Software engineer, designer, and studying Computer Science at Western University. Currently at Mitsubishi.
          </p>
          <p style={{color:'white', fontSize: paragraphFontSize}}>
            Engineering the future
            <span>
              <a 
                href="/Nathan Skibicki Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#ffffff', 
                  marginLeft: '10px',
                  textDecoration: 'underline',
                  display: 'inline-flex',
                  alignItems: 'center',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#f0f0f0';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Resume
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  style={{ marginLeft: '5px' }}
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </span>
          </p>
        </div>
        
        <div style={{
          flex: isMobile ? 'auto' : '0 0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: padding,
          order: isMobile ? 1 : 2,
          marginBottom: isMobile ? '20px' : 0,
        }}>
          <img 
            src={aura} 
            alt="photo" 
            style={{
              height: imageSize,
              width: imageSize,
              borderRadius: '20px',
              objectFit: 'cover',
              border: `${imageBorderWidth} solid white`,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;