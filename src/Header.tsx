import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gray-900/80 backdrop-blur-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-teal-300 bg-clip-text text-transparent">
                CryptoVerse
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#how-it-works" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  How It Works
                </a>
                <a href="#crypto-cards" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Cryptos
                </a>
                <a href="#charts" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Charts
                </a>
                <a href="#news" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  News
                </a>
                <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-gradient-to-r from-indigo-500 to-teal-300 text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition duration-300">
                Get Started
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#how-it-works" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            How It Works
          </a>
          <a href="#crypto-cards" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Cryptos
          </a>
          <a href="#charts" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Charts
          </a>
          <a href="#news" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            News
          </a>
          <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            About
          </a>
          <button className="bg-gradient-to-r from-indigo-500 to-teal-300 text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition duration-300 w-full mt-2">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header; 