import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Produtos", href: "#" },
  { name: "Sobre", href: "#" },
  { name: "Contato", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="isolate bg-black">
      <div className="px-7 pt-6 lg:px-8">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">e-commerce</span>
                <img className="h-8" src={logo} alt=" Your Company" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-green-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Abrir Menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-bold text-green-700 hover:text-green-600"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <Link to="login">
                <a className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-green-700 shadow-sm ">
                  Login
                </a>
              </Link>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel
              focus="true"
              className="fixed inset-0 z-10 overflow-y-auto bg-black px-6 py-6 lg:hidden"
            >
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">e-comeerce</span>
                    <img className="h-8" src={logo} alt="" />
                  </a>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Fechar Menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-slate-400/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-green-800 hover:bg-slate-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-blue-800 hover:bg-green-400/10"
                    >
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
