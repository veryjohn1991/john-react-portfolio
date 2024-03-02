import React from "react";
import Project from "./Project";
import WorkDayPlanner from "../images/WorkDayPlanner.GIF";
import WebAPI from "../images/WebAPI_.GIF";
import Weather from "../images/Weather.GIF";
import ThomasChessBlog from "../images/ThomasChessBlog.GIF";
import StackDev from "../images/StackDev.JPEG";
import ThingsToDoInToronto from "../images/10ThingsToDoInToronto.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Portfolio.css";

// Portfolio component
function Portfolio() {
  return (
        // Portfolio container
    <div className="portfolio-wrapper">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="container">
        <div className="row">
          {[
            {
              title: "john's food picker",
              description: "based on my project 1",
              imgSrc: Weather,
              deployedLink:
                "https://soliske.github.io/Food-Picker-3k/",
              githubLink:
                "https://github.com/Soliske/Food-Picker-3k",
            },
            {
              title: "Carrer pal ",
              description: "Built On Advanced CSS",
              imgSrc: Weather,
              deployedLink:
                "https://career-pal-project-2-5fb6730b0a09.herokuapp.com/",
              githubLink:
                "https://github.com/Siennaxstarr/career-pal",
            },
            
            
        
            
          ].map((project, index) => (
            // Div container for each project
            <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
              {/* <h2>{project.title}</h2> */}
              <Project
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// Export Portfolio
export default Portfolio;
