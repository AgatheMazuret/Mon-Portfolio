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
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
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