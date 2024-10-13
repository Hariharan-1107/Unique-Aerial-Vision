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

      // Close the menu when scrolling
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo-container">
        <img src={logo} alt="Unique Aerial Vision Logo" className="logo" />
        <a href="#hero">
          <h1 className="orbitron-regular">Unique Aerial Vision</h1>
        </a>
      </div>
      <div
        className={`hamburger ${scrolled ? "scrolled" : ""}`}
        onClick={toggleMenu}
      >
        <img src="/Assets/hamburger.png" alt="hamburger"></img>
      </div>
      <div
        className={`nav-links ${menuOpen ? "active" : ""} ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <a href="#hero" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#aboutus" onClick={() => setMenuOpen(false)}>
          About Us
        </a>
        <a href="#work" onClick={() => setMenuOpen(false)}>
          Our Work
        </a>
        <a href="#services" onClick={() => setMenuOpen(false)}>
          Services
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>
    </nav>
  );
}
