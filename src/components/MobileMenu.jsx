export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`
            fixed top-0 left-0 w-full my-bg-white z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
            ${
              menuOpen
                ? "h-screen opacity-100 pointer-events-auto"
                : "h-0 opacity-0 pointer-events-none"
            }
        `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 my-text-black text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>
      <a
        onClick={() => setMenuOpen(false)}
        href="#home"
        className={`text-2x font-semibold my-text-black my-4 transform transition transform duration-300
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }
                `}
      >
        Home
      </a>
      <a
        onClick={() => setMenuOpen(false)}
        href="#about"
        className={`text-2x font-semibold my-text-black my-4 transform transition transform duration-300
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }
                `}
      >
        About
      </a>
      <a
        onClick={() => setMenuOpen(false)}
        href="#projects"
        className={`text-2x font-semibold my-text-black my-4 transform transition transform duration-300
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }
                `}
      >
        Projects
      </a>
      <a
        onClick={() => setMenuOpen(false)}
        href="#contact"
        className={`text-2x font-semibold my-text-black my-4 transform transition transform duration-300
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }
                `}
      >
        Contact
      </a>
    </div>
  );
};
