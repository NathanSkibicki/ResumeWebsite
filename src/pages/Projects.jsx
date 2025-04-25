import React from "react";
import resumeSwap from '../assets/resumeswap.png';
import vectorClock from '../assets/vectorclock.png';
import tutorImage from '../assets/tutor.png';
import grpcImage from '../assets/grpc.png';
import primaryBackup from '../assets/primarybackup.png'
import sportek from '../assets/sportek.png'
import wordle from '../assets/wordle.png'
import spotify from '../assets/spotify.webp'

const Project = () => {
    const personalProjects = [
        {
            title: "Resume Tailoring Assistant",
            description: "A tool that customizes resume content based on job descriptions, optimizing keyword matching for ATS systems.",
            image: resumeSwap,
            languages: ["React", "Node.js"],
            github: "https://github.com/NathanSkibicki/R-swap"
        },
        {
            title: "Vector Clock",
            description: "Interactive vector clock system for managing causal events between servers.",
            image: vectorClock,
            languages: ["Rust"],
            github: "https://github.com/NathanSkibicki/vector_clock"
        },
        {
            title: "Prodigy Programmers",
            description: "Full stack tutoring service website",
            image: tutorImage,
            languages: ["React", "Javascript", "Mongodb","Vercel"],
            github: "https://github.com/NathanSkibicki/Tutoring-signup-website"
        },
        {
            title: "Inventory Management Service",
            description: "gRPC client for an inventory management service with functionality for adding, retrieving, updating, and deleting products.",
            image: grpcImage,
            languages: ["gRPC", "C++"],
            github: "https://github.com/NathanSkibicki/Inventory-Management-Service"
        },
        {
            title: "Primary Backup Server",
            description: "Server implementation with primary-backup replication for fault tolerance.",
            image: primaryBackup,
            languages: ["gRPC", "C++"],
            github: "https://github.com/NathanSkibicki/Primary-Backup-Server"
        },
        {
            title: "Sportek",
            description: "Online platform for booking public tennis courts, with Geolocation.",
            image: sportek,
            languages: ["React", "Node.js"],
            github: "https://github.com/NathanSkibicki/sportek"
        },
        {
            title: "Wordle Game",
            description: "Recreation of the popular word guessing game in C++.",
            image: wordle,
            languages: ["C++"],
            github: "https://github.com/NathanSkibicki/Wordle-Game"
        },
        {
            title: "Spotify Clone",
            description: "A clone of the Spotify music streaming service interface.",
            image: spotify,
            languages: ["Javascript", "Spotify API"],
            github: "https://github.com/NathanSkibicki/spotify-clone-app"
        }
    ];

    const ProjectCard = ({ project }) => (
        <div className="project-card">
            {project.image && (
                <div className="project-image-container">
                    <img src={project.image} alt={`${project.title} Screenshot`} className="project-image" />
                </div>
            )}
            <div className="project-languages">
                {project.languages.map((lang, index) => (
                    <span key={index} className="project-language">{lang}</span>
                ))}
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
                <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="github-link"
                >
                    View on GitHub
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12"
                        height="12"
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="github-icon"
                    >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                </a>
            </div>
        </div>
    );

    const ProjectSection = ({ title, projects }) => (
        <div className="project-section">
            <h2 className="section-title">{title}</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );

    return (
        <div className="projects-container">
            <div className="projects-content">
                <div className="projects-header">
                    <h1 className="page-title">Projects</h1>
                    <div className="github-profile-container">
                        <p className="github-note">
                            Source code on 
                            <a 
                                href="https://github.com/NathanSkibicki"
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="github-profile-link"
                            >
                                GitHub
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
                                    className="github-profile-icon"
                                >
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                </svg>
                            </a>
                        </p>
                    </div>
                </div>
                
                <ProjectSection projects={personalProjects} />
            </div>
           
            <style jsx>{`
                .projects-container {
                    display: flex;
                    flex-direction: column;
                    color: white;
                    min-height: 100vh;
                    width: 100%;
                    padding-top: 80px;
                    padding-bottom: 40px;
                    box-sizing: border-box;
                }
                
                .projects-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                    width: 100%;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                }
                
                .projects-header {
                    margin-bottom: 20px;
                    padding-top: 20px;
                    position: relative;
                    z-index: 1;
                }
                
                .page-title {
                    font-size: clamp(1.5rem, 4vw, 2rem);
                    margin-bottom: 1rem;
                    text-decoration: underline;
                    padding-top: 0px;
                    color: white;
                }
                
                .github-profile-container {
                    margin-bottom: 2rem;
                }
                
                .github-note {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    color: rgba(156, 163, 175, 1);
                    margin: 0;
                    padding: 0;
                    font-size: clamp(0.875rem, 2vw, 1rem);
                }
                
                .github-profile-link {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    color: #c9a0ff;
                    text-decoration: none;
                    transition: color 0.3s ease;
                    margin-left: 5px;
                }
                
                .github-profile-link:hover {
                    color: #ffffff;
                }
                
                .github-profile-icon {
                    height: 16px;
                    width: 16px;
                }
                
                .section-title {
                    text-align: center;
                    margin: 2rem 0;
                    text-decoration: underline;
                    font-size: clamp(1.25rem, 3vw, 1.5rem);
                    color: white;
                }
                
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 20px;
                    padding: 20px 0;
                }
                
                .project-card {
                    background-color: #1a1a1a;
                    border-radius: 12px;
                    padding: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    transition: transform 0.3s ease;
                    cursor: pointer;
                    height: auto;
                    display: flex;
                    flex-direction: column;
                }
                
                .project-card:hover {
                    transform: translateY(-5px);
                }
                
                .project-image-container {
                    border-radius: 8px;
                    overflow: hidden;
                    margin-bottom: 8px;
                    border: 1px solid #333;
                    height: 120px;
                }
                
                .project-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }
                
                .project-languages {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 4px;
                    margin-bottom: 4px;
                }
                
                .project-language {
                    color: #8A2BE2;
                    font-size: 10px;
                    font-weight: 500;
                }
                
                .project-title {
                    color: white;
                    font-size: 13px;
                    font-weight: bold;
                    margin-bottom: 4px;
                }
                
                .project-description {
                    color: #aaa;
                    font-size: 11px;
                    line-height: 1.2;
                    margin-bottom: 8px;
                    flex-grow: 1;
                }
                
                .project-links {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    margin-top: auto;
                }
                
                .github-link {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    color: #c9a0ff;
                    transition: color 0.3s ease;
                    text-decoration: none;
                    font-size: 12px;
                }
                
                .github-link:hover {
                    color: #ffffff;
                }
                
                .github-icon {
                    height: 12px;
                    width: 12px;
                }
            `}</style>
        </div>
    );
}

export default Project;