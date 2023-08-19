import React from "react";
import fond from "../images/Banderole-damier.webp";
import image from "../images/flammes.jpg";

export default function Description() {
  
  const fontStylesTitle = {
    fontFamily: "Cabin, sans-serif",
    fontSize: "4rem",             // Taille de police 4rem (équivalent à 4 * taille de la police de base)
    fontWeight: "bold",           // Police en gras
    letterSpacing: "-0.05em",      // Suivi du texte serré
    backgroundColor: "#00FF00" /* Fluorescent green color */,
    padding: "0.50rem" /* Add some padding to the highlight */,
    borderRadius: "0.50rem" /* Round corners */,
  };
  const fontStyles = {
      fontFamily: "Cabin, sans-serif",
      fontSize: "1rem",             // Taille de police 4rem (équivalent à 4 * taille de la police de base)
      fontWeight: "bold",           // Police en gras
      letterSpacing: "-0.03em",      // Suivi du texte serré
      backgroundColor: "#00FF00" /* Fluorescent green color */,
    padding: "0.50rem" /* Add some padding to the highlight */,
    borderRadius: "0.50rem" /* Round corners */,
    };

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src={fond}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <img
        src={image}
        alt=""
        className="absolute top right-10 transform translate-y-1 w-1/3 sm:w-1/8 md:w-1/9 lg:w-1/10 rounded-md"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      ></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 ">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
            <span style={fontStylesTitle}>Agathe Mazuret</span>
          </h2>
          <p className="mt-10 text-lg leading-8 text-black" style={fontStyles}>
            <span>
              <p>Après avoir exploré le monde de la mode à travers mes études, j'ai
              rapidement réalisé que ma véritable passion résidait ailleurs.</p>
              J'ai choisi de me reconvertir dans le développement web, une
              décision guidée par mon désir profond de créer, d'innover et de
              contribuer à l'univers numérique en constante évolution.<p>  Chaque
              ligne de code que je rédige est une toile sur laquelle je peins
              des solutions concrètes, faisant ainsi de ma passion mon métier.
              Cette reconversion m'a permis de fusionner ma créativité avec ma
              fascination pour la technologie.</p> Cependant je
              suis toujours aussi passionnée par la haute couture et la mode.
            </span>
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"></dl>
        </div>
      </div>
    </div>
  );
}
