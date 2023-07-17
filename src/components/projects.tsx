import React from "react";
import '../app/globals.css'
import Atacado from "./atacado";
import LandingPage from "./landingpage";
import TwitterHome from "./twitterhomeclone";



const Projects = () => {
    return (
        <div className="md:flex space-x-3 m-2 lg:flex mobile:flex-col mobile:max-w-100vw">
            <Atacado />
            <LandingPage />
            <TwitterHome />
        </div>
    )
}

export default Projects

