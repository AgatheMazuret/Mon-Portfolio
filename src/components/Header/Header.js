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
  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-black">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://downloadwap.com/thumbs2/wallpapers/p2ls/2019/abstract/45/f435d39a13506800.jpg"
                      alt="Profile"
                    />
                  </div>
                </div>
                <div className=" sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-green-fluorescent hover:text-black",
                          "rounded-md px-3 py-2 text-sm font-medium"
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
