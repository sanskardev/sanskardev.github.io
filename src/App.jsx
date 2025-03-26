import "./App.css";
import "./index.css";
import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/pages/Home";
import { ProfessionalExperience } from "./components/pages/ProfessionalExperience";
import { CreativeWorks } from "./components/pages/CreativeWorks";
import { Contact } from "./components/pages/Contact";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout.jsx";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen absolute transition-opacity duration-700 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      ></div>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/professional-experience"
              element={<ProfessionalExperience />}
            />
            <Route path="creative-works" element={<CreativeWorks />} />
            <Route path="contact-me" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
