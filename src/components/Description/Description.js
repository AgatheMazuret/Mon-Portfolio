import React from "react";
import imageProfile from "../images/Me.jpg";

const fontStylesTitle = {
  color: "#00FF00",
};

const imageStyles = {
  width: "360px",
  height: "360px",
  borderRadius: "10px",
  objectFit: "cover",
  marginLeft: "auto",  
  marginRight: "auto",
};

export default function Description() {
  return (
    <div id="accueil" className="bg-black px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-20  max-w-6xl text-center lg:flex lg:items-center lg:justify-center">
        <img src={imageProfile} alt="Profile" style={imageStyles} />
        <div className="mt-4 lg:mt-0 ">
          <h1 className="text-4xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl" style={fontStylesTitle}>
            Agathe Mazuret
          </h1>
          <p className="mt-6 text-sm md:text-base lg:text-lg leading-7 text-white">
  Après avoir exploré le monde de la mode à travers mes études, j'ai rapidement réalisé que ma véritable passion résidait ailleurs.
  {" "}
  J'ai choisi de me reconvertir dans le développement web, une décision guidée par mon désir profond de créer, d'innover et de contribuer à l'univers numérique en constante évolution.
  {" "}
  Chaque ligne de code que je rédige est une toile sur laquelle je peins des solutions concrètes, faisant ainsi de ma passion mon métier. Cette reconversion m'a permis de fusionner ma créativité avec ma fascination pour la technologie.
</p>


        </div>
      </div>
    </div>
  );
}
