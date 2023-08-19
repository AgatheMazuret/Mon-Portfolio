import React from "react";


const HeaderBanner = () => {
    return (
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo text-2xl font-semibold">Mon Logo</div>
          <nav className="space-x-4">
            <a href="#" className="hover:text-gray-400">Accueil</a>
            <a href="#" className="hover:text-gray-400">À propos</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </nav>
        </div>
      </header>
    );
  };
  
  export default HeaderBanner;