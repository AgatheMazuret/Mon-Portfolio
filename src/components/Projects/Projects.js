import React from "react";
import Project1 from "../images/Project1.png";
import Project2 from "../images/Project2.png";
import Project3 from "../images/Project3.png";
import Bandeau from "../images/Bandeau.png"

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
  const fontStylesDescr = {
    fontFamily: "Cabin, sans-serif",
    fontSize: "1rem", 
    fontWeight: "normal", 
    letterSpacing: "-0.05em", 
    color: "black", 
  };

  return (
    <div className="flex flex-col">
      <div className="text-center" style={fontStylesTitle}>
        Mes projets
      </div>
      <div className="flex flex-col md:flex-row mt-20 mb-10">
        <div className="md:w-1/3 lg:w-2/4 ml-20">
          <img src={Project1} alt="Project 1" className="w-full rounded-md" />
        </div>
        <div className="md:w-2/3 lg:w-1/4 ml-4 md:ml-8 mt-4 md:mt-0">
          <p className="text-center md:text-left" style={fontStyles}>
            Projet Kasa
          </p>
          <span className="text-center md:text-left block" style={fontStylesDescr}>
            Description du projet Kasa.
          </span>
        </div>
      </div>
      <img src={Bandeau} alt="Project 2" className="h-15 " />
      <div className="flex flex-col md:flex-row mt-10 mb-10">
        <div className="md:w-1/3 lg:w-3/4 ml-20">
          <img src={Project2} alt="Project 2" className="w-full rounded-md" />
        </div>
        <div className="md:w-2/3 lg:w-3/4 ml-4 md:ml-8 mt-4 md:mt-0">
          <p className="text-center md:text-left" style={fontStyles}>
            Projet Sophie Bluel
          </p>
          <span className="text-center md:text-left block" style={fontStylesDescr}>
            Description du projet Sophie Bluel.
          </span>
        </div>
      </div>
      <img src={Bandeau} alt="Project 2" className="h-15 " />
      <div className="flex flex-col md:flex-row  mt-10 mb-10">
        <div className="md:w-1/3 lg:w-3/4 ml-20">
          <img src={Project3} alt="Project 3" className="w-full rounded-md" />
        </div>
        <div className="md:w-2/3 lg:w-3/4 ml-4 md:ml-8 mt-4 md:mt-0">
          <p className="text-center md:text-left" style={fontStyles}>
            Projet Mon vieux grimoire
          </p>
          <span className="text-center md:text-left block" style={fontStylesDescr}>
            Description du projet Mon vieux grimoire.
          </span>
        </div>
      </div>
      <img src={Bandeau} alt="Project 2" className="h-15 " />
    </div>
  );
  
  }  