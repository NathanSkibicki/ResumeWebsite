import React from "react"


const Project= () => {
    return (
        
        <div style={{display:"flex", color: "white", flexDirection:"column"}}> 
            {/*Pet Projects */}
            <h2 style={{display:"flex", justifyContent:"center", textDecoration:"underline"}}>Personal Projects</h2>
            <div style={{
                display:"flex", 
                flexDirection:"row",
                justifyContent: "center", 
                alignItems: "center", 
                width: "100%", 
                gap: "40px"}}>
                <p>
                    <span>Resume Tailoring Assistant</span>
                </p>
                <p>
                    <span>Vector Clock</span>
                </p>
                <p>
                    <span>Tutoring Signup Website</span>
                </p>
            </div>

            <div style={{
                display:"flex", 
                flexDirection:"row",
                justifyContent: "center", 
                alignItems: "center", 
                width: "100%", 
                gap: "40px"}}>
                
                <p>
                    <span>Inventory Management Service</span>
                </p>
                <p>
                <span>Primary Backup Server</span>
                </p>
                <p>
                    <span>Public Tennis Court Booking Platform</span>
                </p>
            </div>
            <div style={{
                display:"flex", 
                flexDirection:"row",
                justifyContent: "center", 
                alignItems: "center", 
                width: "100%", 
                gap: "40px"}}>
                <p>
                    <span>Wordle Game</span>
                </p>
                <p>
                    <span>Spotify Clone</span>
                </p>
                <p>
                    <span>Tinder Clone</span>
                </p>
            </div>

            {/* Hackathon Projects */}
            <h2 style={{display:"flex", justifyContent:"center", textDecoration:"underline"}}>Hackathons</h2>
            <div>
                <div style={{
                    display:"flex", 
                    flexDirection:"row",
                    justifyContent: "center", 
                    alignItems: "center", 
                    width: "100%", 
                    gap: "40px"}}>
                        <p>
                            <span>Healthmate</span>
                        </p>
                        <p>
                            <span>Sustainify</span>
                        </p>
                </div>
            </div>

        </div>
    )
}
export default Project