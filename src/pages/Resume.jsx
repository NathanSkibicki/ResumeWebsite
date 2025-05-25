import React, { useEffect } from 'react';

const Resume = () => {
  useEffect(() => {
    // Only redirect if we're actually on the resume page
    if (window.location.hash === '#resume') {
      window.location.href = '/Nathan Skibicki Resume.pdf';
    }
  }, []);

  return (
    <div style={{
      background: '#2c0452',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: '1.2rem'
    }}>
      Redirecting to resume...
    </div>
  );
};

export default Resume; 