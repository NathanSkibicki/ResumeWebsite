import React, { useEffect, useState } from "react";
import aura from '../assets/Aura.jpg'
import mitsubishi from '../assets/mitsu.png'
import ultimate from '../assets/ultimatecoders.jpg'

const About = ({ onNavClick }) => {
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
  
  const handleClick = (e, id) => {
    e.preventDefault();
    onNavClick(id);
  };

  // Responsive values based on screen size
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  
  const cardMaxWidth = isMobile ? '90%' : isTablet ? '700px' : '900px';
  const marginTop = isMobile ? '80px' : isTablet ? '120px' : '150px';
  const marginBottom = isMobile ? '80px': isTablet ? '120px' : '150px';
  const headingFontSize = isMobile ? '24px' : isTablet ? '28px' : '32px';
  const paragraphFontSize = isMobile ? '16px' : '18px';
  const padding = isMobile ? '15px' : isTablet ? '20px' : '30px';
  const bottomLinkPadding = isMobile ? '50px' : isTablet ? '70px': '120px' 
  
  // Image size calculations
  const imageSize = isMobile ? '200px' : isTablet ? '250px' : '300px';
  const imageBorderWidth = isMobile ? '3px' : '5px';
  const imageBorderWidthIcons = isMobile ? '1px' : '2px';
  const imageSizeIcon = isMobile ? '40px' : isTablet ? '50px': '60px';

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
        flexDirection: 'column',
        background: '#8A2BE2',
        maxWidth: cardMaxWidth,
        width: '100%',
        marginTop: marginTop,
        borderRadius: '12px',
        marginBottom: marginBottom,
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
        overflow: 'hidden',
        padding: padding,
      }}>
        {/* Main content area */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          width: '100%',
        }}>
          {/*LHS stuff*/}
          <div style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: isMobile ? '0' : `0 ${padding} 0 0`,
            order: 1,
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
            
            {/*Resume Link*/}
            <p style={{
              color: 'white', 
              fontSize: paragraphFontSize,
              marginTop: '10px',
            }}>
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
            
            {/* Experience section */}
            <div style={{
              marginTop: '20px',
              marginBottom: '10px'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'row', 
                alignItems: 'center',
                marginBottom: '10px'
              }}>
                <a href="https://mhirj.com/" target="_blank" rel="noopener noreferrer">
                  <img 
                    src={mitsubishi} 
                    style={{
                      height: 'auto',
                      width: isMobile ? '30px' : isTablet ? '40px' : '50px',
                      borderRadius: '8px',
                      objectFit: 'contain',
                      border: `${imageBorderWidthIcons} solid white`,
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                      marginRight: '10px',
                      verticalAlign: 'middle'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
                      e.currentTarget.style.borderColor = '#f0f0f0';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
                      e.currentTarget.style.borderColor = 'white';
                    }}
                    alt="Mitsubishi Heavy Industries logo"
                  />
                </a>
                <div>
                  <p style={{fontWeight:'700', margin: '0', color:"white"}}>Mitsubishi Heavy Industries</p>
                  <p style={{fontSize: 'medium', margin: '0', color:"white"}}>Full Stack Developer and Data Analyst</p>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'row', 
                alignItems: 'center',
                marginTop: '15px',
              }}>
                <a href="https://www.ultimatecoders.ca/" target="_blank" rel="noopener noreferrer">
                  <img 
                    src={ultimate} 
                    style={{
                      height: 'auto',
                      width: isMobile ? '30px' : isTablet ? '40px' : '50px',
                      borderRadius: '8px',
                      objectFit: 'contain',
                      border: `${imageBorderWidthIcons} solid white`,
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                      marginRight: '10px',
                      verticalAlign: 'middle'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
                      e.currentTarget.style.borderColor = '#f0f0f0';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
                      e.currentTarget.style.borderColor = 'white';
                    }}
                    alt="Ultimate Coders logo"
                  />
                </a>
                <div>
                  <p style={{fontWeight:'700', margin: '0', color:"white"}}>Ultimate Coders</p>  
                  <p style={{fontSize: 'medium', margin: '0', color:"white"}}>Programming Instructor</p>
                </div>
              </div>
            </div>
          </div>
          
          {/*RHS Image*/}
          <div style={{
            flex: isMobile ? '1' : '0 0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: isMobile ? `${padding} 0` : '0',
            order: isMobile ? 2 : 2,
            marginTop: isMobile ? '20px' : '0',
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
        
        {/*Bottom Links*/}
        <div style={{
          display: 'flex', 
          justifyContent: 'center',
          padding: '10px', 
          color: 'white',
          marginTop: bottomLinkPadding,
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          paddingTop: '20px',
          width: '100%',
        }}>
          <span style={{
            display: 'flex',
            gap: '30px', 
          }}>
            <a 
              href="https://github.com/NathanSkibicki" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: 'white',
                textDecoration: 'none', 
                transition: 'color 0.3s ease',
                fontSize: paragraphFontSize,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#c9a0ff'; 
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white';
              }}
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/nathan-skibicki-71b03b223/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: 'white',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                fontSize: paragraphFontSize,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#c9a0ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white';
              }}
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                onNavClick('portfolio'); 
              }} 
              style={{
                color: 'white',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                fontSize: paragraphFontSize,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#c9a0ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white';
              }}
            >
              Projects
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;