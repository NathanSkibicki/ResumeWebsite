import React, { useState, useEffect, useRef } from 'react';
import headShot from '../assets/headshot.jpg'

const Home = () => {
    const titles = [
        'Fullstack Developer, ', 
        'Data Analyst, ', 
        'AEM Programmer, ', 
        'Innovator, '
    ];

    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex((prevIndex) => 
                (prevIndex + 1) % titles.length
            );
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    return(
        <div style={{
            background: 'linear-gradient(to bottom, black, #4a0e70, #2c0452)',
            minHeightt: '100vh', 
            width: '100%', 
            position: 'relative',
            overflow: 'hidden'
        }}> 
            {/* Responsive background text */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                pointerEvents: 'none',
                opacity: 0.2,
                zIndex: 1
            }}>
                <div className="rolling-text">
                    {titles.concat(titles).map((title, index) => (
                        <span key={index} style={{ marginRight: '5vw' }}>
                            {title}
                        </span>
                    ))}
                </div>
            </div>
                    
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', 
                flex: 1,
                alignItems: 'start', 
                height: '100vh',
                width: '100%', 
                paddingLeft: '5vw',
                paddingRight: '5vw',
                position: 'relative',
                zIndex: 2
            }}>
                <div style={{
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    textAlign: 'center'
                }}>
                    <img 
                        src={headShot} 
                        alt="Nathan Skibicki" 
                        style={{
                            height: '50vh',
                            maxHeight: '400px',
                            width: '50vh',
                            maxWidth: '400px', 
                            borderRadius: '50%', 
                            objectFit: 'cover',
                            border: '5px solid white',
                            marginBottom: '1rem'
                        }}
                    />
                    <h1 style={{
                        color: 'white',
                        fontSize: 'clamp(2rem, 5vw, 3rem)', // Responsive font size
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                        textAlign: 'center',
                        marginBottom: '0.5rem'
                    }}>Nathan Skibicki</h1>
                    <h4 style={{
                        color: 'white',
                        fontSize: 'clamp(1rem, 2vw, 1.5rem)', // Responsive font size
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                        textAlign: 'center',
                        marginBottom: '0.5rem'
                    }}>software engineer and cs student</h4>
                    {/* links at bottom of name */}
                    <div style={{
                        display: 'flex',
                        gap: '30px',
                        paddingTop:'15px'
                    }}>
                        <a target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="GitHub" 
                            href="https://github.com/NathanSkibicki"
                            style={{
                                color: '#c9a0ff',
                                transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#ffffff';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = '#c9a0ff';
                            }}
                            >
                            <svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="lucide lucide-github">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                                </path>
                                <path d="M9 18c-4.51 2-5-2-7-2">
                                </path>
                            </svg>
                        </a>
                        <a 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="LinkedIn" 
                            className="text-white/80 hover:text-white transition-colors" 
                            href="https://www.linkedin.com/in/nathan-skibicki-71b03b223/"
                            style={{
                                color: '#c9a0ff',
                                transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#ffffff';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = '#c9a0ff';
                            }}>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="lucide lucide-linkedin">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                        </path>
                                    <rect width="4" height="12" x="2" y="9"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                        </a>
                        <a 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Email" 
                            style={{
                                color: '#c9a0ff',
                                transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#ffffff';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = '#c9a0ff';
                            }}
                            href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=nathans.skibicki@gmail.com&amp;su=&amp;body=Hello%20Nathan!">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></a>
                    </div>
                </div>
            </div>
            <style>{`
                .rolling-text {
                    position: absolute;
                    top: 50%;
                    left: 100%;
                    transform: translateY(-50%);
                    white-space: nowrap;
                    font-size: clamp(8vw, 15vw, 20vw); /* Reduced font size */
                    font-weight: bold;
                    color: rgba(220,190,255,0.2);
                    animation: rollText 30s linear infinite;
                }
                
                @media (max-width: 768px) {
                    .rolling-text {
                        font-size: 20vw; /* Smaller on small screens */
                        opacity: 0.15; /* Reduced opacity */
                    }
                }
                
                @media (max-width: 480px) {
                    .rolling-text {
                        font-size: 25vw; /* Even smaller on very small screens */
                        opacity: 0.1; /* Further reduced opacity */
                    }
                }
                
                @keyframes rollText {
                    0% {
                        transform: translateY(-50%) translateX(0);
                    }
                    100% {
                        transform: translateY(-50%) translateX(-100%);
                    }
                }
            `}</style>
        </div>
    )
}
export default Home