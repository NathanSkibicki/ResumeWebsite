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
            height: '100%', 
            width: '100%', 
            position: 'relative',
            overflow: 'hidden'
        }}> 
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                pointerEvents: 'none',
                opacity: 0.2
            }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '100%',
                    transform: 'translateY(-50%)',
                    whiteSpace: 'nowrap',
                    fontSize: '20vw',
                    fontWeight: 'bold',
                    color: 'rgba(220,190,255,0.2)',
                    animation: 'rollText 30s linear infinite'
                }}>
                    {titles.concat(titles).map((title, index) => (
                        <span key={index} style={{ marginRight: '50px' }}>
                            {title}
                        </span>
                    ))}
                </div>
            </div>
                    
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', 
                alignItems: 'start', 
                height: '100vh',
                width: '100%', 
                paddingLeft: '5vw',
                paddingRight: '5vw',
                position: 'relative',
                zIndex: 10
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
                        fontSize: '3rem',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                        textAlign: 'center',
                        marginBottom: '0.5rem'
                    }}>Nathan Skibicki</h1>
                    
                </div>
            </div>
            <style>{`
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