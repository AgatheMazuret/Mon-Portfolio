import React from "react";
import imageProfile from "../images/Me.jpg";

export default function Description() {
  const fontStylesTitle = {
    color: "#00FF00",
  };
  
  const imageStyles = {
    width: "360px", // Ajustez la taille de l'image selon vos préférences
    height: "360px",
    borderRadius: "10px", // Coins arrondis
    objectFit: "cover", // Pour s'assurer que l'image conserve son aspect
    marginRight: "150px", // Ajoute une marge à droite de 50px
    marginLeft: "60px"
  };

  return (
    <div className="bg-black px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-10 max-w-6xl text-center lg:flex lg:items-center lg:justify-center">
        <img src={imageProfile} alt="Profile" style={imageStyles} />
        <div className="mt-4 lg:mt-0">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl" style={fontStylesTitle}>Agathe Mazuret</h2>
          <p className="mt-6 text-lg leading-8 text-white">
        <p>
                Après avoir exploré le monde de la mode à travers mes études,
                j'ai rapidement réalisé que ma véritable passion résidait
                ailleurs.
              </p>
              J'ai choisi de me reconvertir dans le développement web, une
              décision guidée par mon désir profond de créer, d'innover et de
              contribuer à l'univers numérique en constante évolution.
              <p>
                {" "}
                Chaque ligne de code que je rédige est une toile sur laquelle je
                peins des solutions concrètes, faisant ainsi de ma passion mon
                métier. Cette reconversion m'a permis de fusionner ma créativité
                avec ma fascination pour la technologie.
              </p>{" "}
              Cependant je suis toujours aussi passionnée par la haute couture
              et la mode.
              </p>
        </div>
      </div>
    </div>
  );
}
