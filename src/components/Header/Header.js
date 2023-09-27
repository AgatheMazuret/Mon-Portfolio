import React from "react";
import { Disclosure } from "@headlessui/react";

const navigation = [
  { name: "Accueil", href: "#accueil", current: false },
  { name: "Compétences", href: "#competences", current: false },
  { name: "Projets", href: "#projets", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const navBackgroundStyles = {
    background: "rgb(255, 247, 173)",
    background: "linear-gradient(90deg, rgba(255, 247, 173, 1) 39%, rgba(255, 169, 249, 1) 62%)",
    borderRadius: "20px",
  };
  return (
    <Disclosure as="nav" style={navBackgroundStyles} className="bg-black w-2/3 mx-auto">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-9xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="sm:ml-6 sm:block">
                  <div className="flex "> 
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-pink-300 hover:text-pink-400",
                          "rounded-md px-3 py-2 text-2xl font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}