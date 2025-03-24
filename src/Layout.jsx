import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        selectedItem="Home"
      />
      <main>
        <Outlet />
      </main>
    </>
  );
};
