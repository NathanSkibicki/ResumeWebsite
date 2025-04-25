import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:nathans.skibicki@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
        window.location.href = mailtoLink;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="contact-container">
            <div className="contact-content">
                <h1 className="contact-title">Contact Me</h1>
                
                <div className="contact-info">
                    <div className="contact-method">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        <span>+1 (647) 568-7892</span>
                    </div>
                    
                    <div className="contact-method">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="20" height="16" x="2" y="4" rx="2"/>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                        </svg>
                        <a href="mailto:nathans.skibicki@gmail.com">nathans.skibicki@gmail.com</a>
                    </div>
                    
                    <div className="contact-method">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                            <rect width="4" height="12" x="2" y="9"/>
                            <circle cx="4" cy="4" r="2"/>
                        </svg>
                        <a href="https://www.linkedin.com/in/nathan-skibicki-71b03b223/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>

            <style jsx>{`
                .contact-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    width: 100%;
                    background-color: #2c0452;
                    color: white;
                    padding: 120px 20px 40px;
                }
                
                .contact-content {
                    max-width: 600px;
                    width: 100%;
                    margin: 0 auto;
                }
                
                .contact-title {
                    font-size: 2.5rem;
                    margin-bottom: 2rem;
                    text-align: center;
                    color: white;
                }
                
                .contact-info {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    margin-bottom: 3rem;
                }
                
                .contact-method {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1rem;
                    background-color: rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    transition: background-color 0.3s ease;
                }
                
                .contact-method:hover {
                    background-color: rgba(255, 255, 255, 0.2);
                }
                
                .contact-method svg {
                    color: #c9a0ff;
                }
                
                .contact-method a {
                    color: white;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                
                .contact-method a:hover {
                    color: #c9a0ff;
                }
                
                .contact-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                
                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                
                .form-group label {
                    font-size: 1rem;
                    color: white;
                }
                
                .form-group input,
                .form-group textarea {
                    padding: 0.75rem;
                    border-radius: 8px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    background-color: rgba(255, 255, 255, 0.1);
                    color: white;
                    font-size: 1rem;
                }
                
                .form-group textarea {
                    min-height: 120px;
                    resize: vertical;
                }
                
                .submit-button {
                    padding: 1rem;
                    border-radius: 8px;
                    border: none;
                    background-color: #c9a0ff;
                    color: white;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                
                .submit-button:hover {
                    background-color: #a87fd9;
                }
                
                @media (max-width: 768px) {
                    .contact-title {
                        font-size: 2rem;
                    }
                    
                    .contact-method {
                        padding: 0.75rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Contact;