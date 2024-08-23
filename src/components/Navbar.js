import React, { useEffect, useState } from "react";
import logo from "./logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo-container">
        <img src={logo} alt="Unique Aerial Vision Logo" className="logo" />
        <h1>Unique Aerial Vision</h1>
      </div>
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#hero" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#aboutus" onClick={() => setMenuOpen(false)}>
          About Us
        </a>
        <a href="#services" onClick={() => setMenuOpen(false)}>
          Services
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}
