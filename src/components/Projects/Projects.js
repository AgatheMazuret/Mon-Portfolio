import React from "react";
import Project1 from "../images/Project1.png";
import Project2 from "../images/Project2.png";
import Project3 from "../images/Project3.png";
import Project4 from "../images/Project4.png";
import Project5 from "../images/Project5.png";
import logoReact from "../images/reactJS.svg";
import logoCSS from "../images/css.svg";
import logoHTML from "../images/html5.svg";
import logoTailwind from "../images/tailwindCSS.svg";
import logoMongoDb from "../images/mongodb.svg";
import logoJavaScript from "../images/javascript.svg";

const fontStylesTitre = {
  fontFamily: "Cabin, sans-serif",
  fontWeight: "bold",
  fontSize: "3rem",
  letterSpacing: "-0.05em",
  background: "rgb(255, 169, 249)",
  background: "linear-gradient(90deg, rgba(255, 169, 249, 1) 39%, rgba(255, 247, 173, 1) 62%)",
  borderRadius: "20px",
  color:"white"
  
};
const fontStyles = {
  fontFamily: "Cabin, sans-serif",
  fontWeight: "bold",
  fontSize: "2rem",
  letterSpacing: "-0.05em",
  color: "pink",
};

const fontStylesDescr = {
  fontFamily: "Cabin, sans-serif",
  fontSize: "1.5rem",
  fontWeight: "normal",
  letterSpacing: "-0.05em",
  color: "#606060",
};

export default function Projects() {
  const renderSkill = (logo, name) => (
    <div className="flex items-center ml-6">
      <img src={logo} alt={`Logo ${name}`} className="w-16 h-16 mr-4" />
      <p className="text-lg font-semibold">{name}</p>
    </div>
  );

  const renderProject = (
    projectImage,
    projectName,
    projectDescription,
    projectLink
  ) => (
    <div className="flex flex-col md:flex-row  mt-10 mb-10">
      <div className="md:w-1/3 lg:w-3/4 ml-4 md:ml-20">
        <img
          src={projectImage}
          alt={projectName}
          className="w-full rounded-md"
        />
      </div>
      <div className="md:w-2/3 lg:w-3/4 ml-4 md:ml-8 mt-4 md:mt-0">
        <h2 className="text-center md:text-left" style={fontStyles}>
          {projectName}
        </h2>
        <span
          className="text-center md:text-left text-base md:text-1rem block"
          style={fontStylesDescr}
        >
          {projectDescription}
          <br />
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-yellow-300 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded mt-4">
              Lien vers le projet
            </button>
          </a>
        </span>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col">
      <div
        id="competences"
        className="text-center  font-bold tracking-tight sm:text-4xl md:text-6xl lg:text-8xl py-5 w-2/3 mx-auto"
        style={fontStylesTitre}
      >
        Mes compétences
      </div>
      <div className="flex flex-wrap justify-center items-center mt-10 mb-10">
        {renderSkill(logoReact, "React JS")}
        {renderSkill(logoHTML, "HTML5")}
        {renderSkill(logoCSS, "CSS")}
        {renderSkill(logoTailwind, "Tailwind CSS")}
        {renderSkill(logoMongoDb, "MongoDB")}
        {renderSkill(logoJavaScript, "JavaScript")}
      </div>
      <div className="text-center mt-4 mb-10">
        <a
          href="https://miro.com/app/board/uXjVMv_eRkw=/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-yellow-300 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded">
  Lien vers le projet
            Ma carte mentale
          </button>
        </a>
      </div>
      <div
        id="projets"
        className="text-center font-bold tracking-tight  sm:text-4xl md:text-6xl lg:text-8xl py-5 w-2/3 mx-auto"
        style={fontStylesTitre}
      >
        Mes projets
      </div>
      {renderProject(
        Project5,
        "Projet Mon vieux grimoire",
        "Développement du back-end d'un site de notation de livres. Mise en place d'un système de notation de livre, de création, modification et suppression de fiche sur des livres. Création d'un système d'authentification et de création de compte sécurisé et utilisation de SCSS. L'entièreté du projet a été un défi pour moi, ce sont les cours de la plateforme Openclassrooms qui m'ont le plus aider avec les conseils de mon mentor. J'ai beaucoup aimé utiliser le SCSS.(Soutenance Validée le 25 août 2023 )",
        "https://github.com/AgatheMazuret/Book-Notation"
      )}
      <hr style={{ borderWidth: "3px", borderColor: "#ffa9f9", width: "70%",margin: "0 auto",  }} /> 
      {renderProject(
        Project4,
        "Projet Kasa",
        "Création d'une application web de location immobilière avec React. Ma plus grosse difficulté pour ce projet ont été les props et l'apprentissage de react. En parcourant internet et les cours j'ai pu comprendre les props et react. (Soutenance Validée le 2 août 2023 )",
        "https://kasa-rcsnn48hc-aagathemazuret-gmailcom.vercel.app"
      )}
      <hr style={{ borderWidth: "3px", borderColor: "#ffa9f9", width: "70%",margin: "0 auto",  }} /> 
      {renderProject(
        Project3,
        "Projet Nina Carducci",
        "Débuggage et optimisation du site de la photographe Nina Carducci. Le plus difficile pour moi a été de débugguer le carrousel, j'ai réussi grâce à une vidéo youtube. (Soutenance Validée le 19 juin 2023 ) ",
        "https://agathemazuret.github.io/NinaCarducci/"
      )}
      <hr style={{ borderWidth: "3px", borderColor: "#ffa9f9", width: "70%",margin: "0 auto",  }} /> 
      {renderProject(
        Project2,
        "Projet Sophie Bluel",
        "Création d'une page web dynamique avec JavaScript. Ma plus grosse difficulté a été de manipuler le DOM mais grâce aux cours et à des vidéos youtube j'ai pu venir à bout du projet. (Soutenance Validée le 19 mai 2023 )",
        "https://github.com/AgatheMazuret/SophieBluel"
      )}
  <hr style={{ borderWidth: "3px", borderColor: "#ffa9f9", width: "70%",margin: "0 auto",  }} /> 
      {renderProject(
        Project1,
        "Projet Booki ",
        "Création d'une page d'accueil d'une agence de voyage avec HTML & CSS. Ce qui a été le plus difficile dans ce 1er projet c'est qu'il fallait qu'il soit responsive. J'ai pu résoudre ces lacunes avec les cours fournis par la plateforme Openclassrooms, des vidéos youtubes et mdn Web Doc. (Soutenance Validée le 15 février 2023 )",
        "https://agathemazuret.github.io/Booki/"
      )}
      <hr style={{ borderWidth: "3px", borderColor: "#ffa9f9", width: "70%",margin: "0 auto", }} /> 
    </div>
  );
}
