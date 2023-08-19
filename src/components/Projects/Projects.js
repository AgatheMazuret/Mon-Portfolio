import React from "react";
import Project1 from "../images/Project1.png";
import Project2 from "../images/Project2.png";
import Project3 from "../images/Project3.png";


export default function Projects() {
  const fontStylesTitle = {
    fontFamily: "Cabin, sans-serif",
    fontSize: "6rem", 
    fontWeight: "bold", 
    letterSpacing: "-0.05em", 
    color: "#00FF00", 
  };
  const fontStyles = {
    fontFamily: "Cabin, sans-serif",
    fontSize: "2rem", 
    fontWeight: "normal", 
    letterSpacing: "-0.05em", 
    color: "#00FF00", 
  };
  return (
    <div className="flex flex-col items-center">
      <div className="text-center" style={fontStylesTitle}>
        Mes projets
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 lg:w-1/4">
          <img src={Project1} alt="Project 1" className="w-full rounded-md" />
        </div>
        <p className="md:w-2/3 lg:w-3/4 text-center md:text-left" style={fontStyles}>
          Projet Kasa
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 lg:w-1/4">
          <img src={Project2} alt="Project 2" className="w-full rounded-md" />
        </div>
        <p className="md:w-2/3 lg:w-3/4 text-center md:text-left" style={fontStyles}>
          Projet Sophie Bluel
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 lg:w-1/4">
          <img src={Project3} alt="Project 3" className="w-full rounded-md" />
        </div>
        <p className="md:w-2/3 lg:w-3/4 text-center md:text-left" style={fontStyles}>
          Projet Mon vieux grimoire
        </p>
      </div>
    </div>
  );
}






