import React from "react";
import Project1 from "../images/Project1.png";
import Project2 from "../images/Project2.png";
import Project3 from "../images/Project3.png";
import Project4 from "../images/Project4.png";
import Project5 from "../images/Project5.png";
import Bandeau from "../images/Bandeau.png";
import logoReact from "../images/reactJS.svg";
import logoCSS from "../images/css.svg";
import logoHTML from "../images/html5.svg";
import logoTailwind from "../images/tailwindCSS.svg";
import logoMongoDb from "../images/mongodb.svg";
import logoJavaScript from "../images/javascript.svg";

const fontStylesTitre = {
  fontFamily: "Cabin, sans-serif",
  fontWeight: "bold",
  fontSize: "4rem",
  letterSpacing: "-0.05em",
  color: "#00FF00",
};
const fontStyles = {
  fontFamily: "Cabin, sans-serif",
  fontWeight: "bold",
  fontSize: "2rem",
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

const containerStyles = {
  backgroundColor: "#f4fefe", 
}

export default function Projects() {
  const renderSkill = (logo, name) => (
    <div className="flex items-center ml-6">
      <img src={logo} alt={`Logo ${name}`} className="w-16 h-16 mr-4" />
      <p className="text-lg font-semibold">{name}</p>
    </div>
  );

  const renderProject = (projectImage, projectName, projectDescription, projectLink) => (
    <div className="flex flex-col md:flex-row  mt-10 mb-10">
      <div className="md:w-1/3 lg:w-3/4 ml-4 md:ml-20">
        <img src={projectImage} alt={projectName} className="w-full rounded-md" />
      </div>
      <div className="md:w-2/3 lg:w-3/4 ml-4 md:ml-8 mt-4 md:mt-0">
        <p className="text-center md:text-left " style={fontStyles}>
          {projectName}
        </p>
        <span className="text-center md:text-left block" style={fontStylesDescr}>
          {projectDescription}
          <br />
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            Lien vers le projet
          </a>
        </span>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col" style={containerStyles}>
      <div className="text-center text-8xl font-bold tracking-tight sm:text-6xl py-20" style={fontStylesTitre}>
        Mes compétences
      </div>
      <div className="flex flex-wrap justify-center items-center mb-10">
        {renderSkill(logoReact, "React JS")}
        {renderSkill(logoHTML, "HTML5")}
        {renderSkill(logoCSS, "CSS")}
        {renderSkill(logoTailwind, "Tailwind CSS")}
        {renderSkill(logoMongoDb, "MongoDB")}
        {renderSkill(logoJavaScript, "JavaScript")}
      </div>
      <div className="text-center text-8xl font-bold tracking-tight sm:text-6xl py-20" style={fontStylesTitre}>
        Mes projets
      </div>
      {renderProject(
        Project5,
        "Projet Mon vieux grimoire",
        "Développement du back-end d'un site de notation de livres. Mise en place d'un système de notation de livre, de création, modification et suppression de fiche sur des livres. Création d'un système d'authentification et de création de compte sécurisé.",
        "https://github.com/AgatheMazuret/Book-Notation"
      )}
      <img src={Bandeau} alt="Project Separator" className="h-15" />
      {renderProject(
        Project4,
        "Projet Sophie Bluel",
        "Création d'une page web dynamique avec JavaScript pour une designer.",
        "https://github.com/AgatheMazuret/SophieBluel"
      )}
      <img src={Bandeau} alt="Project Separator" className="h-15" />
      {renderProject(
        Project3,
        "Projet Kasa",
        "Création d'une application web de location immobilière avec React JS.",
        "https://kasa-rcsnn48hc-aagathemazuret-gmailcom.vercel.app"
      )}
      <img src={Bandeau} alt="Project Separator" className="h-15" />
      {renderProject(
        Project2,
        "Projet Nina Carducci",
        "Création d'une application web de location immobilière avec React JS.",
        "https://agathemazuret.github.io/NinaCarducci/"
      )}
      <img src={Bandeau} alt="Project Separator" className="h-15" />
      {renderProject(
        Project1,
        "Projet Booki",
        "Création d'une application web de location immobilière avec React JS.",
        "https://agathemazuret.github.io/Booki/"
      )}
      <img src={Bandeau} alt="Project Separator" className="h-15" />
    </div>
  );
}
