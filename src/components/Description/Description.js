import React from "react";
import imageProfile from "../images/Me.jpg";

const fontStylesTitle = {
  background: "linear-gradient(90deg, rgba(255, 247, 173, 1) 19%, rgba(255, 169, 249, 1) 82%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent", // Pour rendre le texte transparent
};

const imageStyles = {
  width: "360px",
  height: "360px",
  borderRadius: "20px",
  objectFit: "cover",
};

export default function Description() {
  return (
    <div
      id="accueil"
      className="bg-white px-6 py-24 sm:py-32 lg:px-8 flex justify-center items-center"
    >
      <div className="max-w-6xl mx-auto lg:flex lg:items-center">
        <div className="text-center lg:text-left ml-auto">
          <h1
            className="text-4xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl pb-10"
            style={fontStylesTitle}
          >
            Agathe Mazuret
          </h1>
          <p className="mt-5 text-sm md:text-base lg:text-lg leading-7 text-gray-500 lg:mt-10">
            Après avoir exploré le monde de la mode à travers mes études, j'ai
            rapidement réalisé que ma véritable passion résidait ailleurs. J'ai
            choisi de me reconvertir dans le développement web en suivant une
            formation developpeur wev avec Openclassrooms, une décision guidée
            par mon désir profond de créer, d'innover et de contribuer à
            l'univers numérique en constante évolution. Chaque ligne de code que
            je rédige est une toile sur laquelle je peins des solutions
            concrètes, faisant ainsi de ma passion mon métier. Cette
            reconversion m'a permis de fusionner ma créativité avec ma
            fascination pour la technologie.
          </p>
        </div>
        <img
          src={imageProfile}
          alt="Profile"
          style={imageStyles}
          className="mt-5 md:mt-10 sm:mt-5 mb-4 lg:mb-0 lg:ml-10"
        />
      </div>
    </div>
  );
}
