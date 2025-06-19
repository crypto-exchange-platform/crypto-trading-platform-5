
import { FC, useState } from "react";
import { LoginModal } from "./LoginModal";
import { SignupModal } from "./SignUpModal";

const NAV_ITEMS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Cryptos", href: "#crypto-cards" },
  { label: "Charts", href: "#charts" },
  { label: "News", href: "#news" },
  { label: "About", href: "#about" },
];

const Header: FC = () => {
  const [modal, setModal] = useState<"login" | "signup" | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

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
                  {NAV_ITEMS.map((item) => (
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
                onClick={() => setModal("login")}
                className="bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white px-6 py-2 rounded-full font-medium transition duration-300"
              >
                Log In
              </button>
              <button
                onClick={() => setModal("signup")}
                className="bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white px-6 py-2 rounded-full font-medium transition duration-300"
              >
                Sign Up
              </button>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button onClick={toggleMenu} className="p-2 text-gray-300 hover:text-white">
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {modal === "login" && <LoginModal onClose={() => setModal(null)} />}
      {modal === "signup" && (
        <SignupModal
          onClose={() => setModal(null)}
          onSignupSuccess={() => setModal("login")}
        />
      )}
    </>
  );
};

export default Header;

