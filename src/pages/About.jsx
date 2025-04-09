import React, { useEffect, useRef } from "react";

const About = () => {
  return (
    <div style={{background: '#2c0452',
        height:'100%',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        position: 'relative',
        paddingTop: '150px'
    }}>
        <h1 style={{display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    textAlign: 'center'}}>About Me</h1>
        <p>
          I'm a passionate developer with a love for creating beautiful and
          functional web experiences. With expertise in React and modern web
          technologies, I build applications that are both visually appealing and
          performant.
        </p>
    </div> 
  );
};

export default About;