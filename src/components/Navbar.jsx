import { useEffect, useState } from "react";
import logo from "../assets/isanskari logo.png";
import { Link } from "react-router-dom";
import { ContactButton } from "./ContactButton";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeItem, setActiveItem] = useState("/");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 ">
        <div className="flex justify-between items-center h-16">
          <Link to="/" onClick={() => setActiveItem("/")}>
            <img src={logo} alt="isanskari" className="h-20  w-auto invert" />
          </Link>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: "/", label: "Home" },
              {
                id: "/professional-experience",
                label: "Professional Experience",
              },
              { id: "creative-works", label: "Creative Works" },
            ].map((item) => (
              <Link
                to={item.id}
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`relative transition-colors pb-2 ${
                  activeItem === item.id ? "font-bold my-text-primary" : ""
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] my-bg-primary transition-all duration-300 ease-in-out transform ${
                    activeItem === item.id ? "w-full " : "w-0"
                  }`}
                ></span>
              </Link>
            ))}
            <ContactButton onClick={() => setActiveItem("contact")} />
          </div>
        </div>
      </div>
    </nav>
  );
};
