import { useState } from "react";
import { LoginModal } from "./LoginModal";
import { SignupModal } from "./SignUpModal";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
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
                  {[
                    { href: "#how-it-works", label: "How It Works" },
                    { href: "#crypto-cards", label: "Cryptos" },
                    { href: "#charts", label: "Charts" },
                    { href: "#news", label: "News" },
                    { href: "#about", label: "About" },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsLoginOpen(true)}
                className="bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white px-6 py-2 rounded-full font-medium transition duration-300"
              >
                Log In
              </button>
              <button
                onClick={() => setIsSignupOpen(true)}
                className="bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white px-6 py-2 rounded-full font-medium transition duration-300"
              >
                Sign Up
              </button>
            </div>
            <div className="-mr-2 flex md:hidden"></div>
          </div>
        </div>
      </nav>

      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
      {isSignupOpen && <SignupModal onClose={() => setIsSignupOpen(false)} />}
    </>
  );
};

export default Header;
