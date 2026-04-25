"use client";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.3s ease",
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
          padding: "0 1.5rem",
        }}
      >
        <div
          className="container-max"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "68px",
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "1.25rem",
              color: "var(--text-primary)",
              textDecoration: "none",
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "var(--accent)" }}>S</span>abut
            <span style={{ color: "var(--accent)" }}>.</span>
          </a>

          {/* Desktop links */}
          <div
            className="hidden md:flex"
            style={{ gap: "2rem", alignItems: "center" }}
          >
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "8px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.1rem",
                transition: "all 0.2s ease",
                color: "var(--text-primary)",
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* Resume button - desktop */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden md:inline-flex"
              style={{ padding: "8px 20px", fontSize: "0.8rem" }}
            >
              Resume ↗
            </a>

            {/* Hamburger - mobile */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "8px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <span
                style={{
                  width: "18px",
                  height: "2px",
                  background: "var(--text-primary)",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
                }}
              />
              <span
                style={{
                  width: "18px",
                  height: "2px",
                  background: "var(--text-primary)",
                  borderRadius: "2px",
                  opacity: menuOpen ? 0 : 1,
                  transition: "all 0.3s ease",
                }}
              />
              <span
                style={{
                  width: "18px",
                  height: "2px",
                  background: "var(--text-primary)",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? "open" : ""}`}
        onClick={closeMenu}
      />

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            color: "var(--text-muted)",
            marginBottom: "1rem",
          }}
        >
          {/* navigation */}
        </p>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={closeMenu}
            style={{
              display: "block",
              padding: "12px 16px",
              color: "var(--text-secondary)",
              textDecoration: "none",
              borderRadius: "8px",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: "0.95rem",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "var(--accent-light)";
              e.target.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "var(--text-secondary)";
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ marginTop: "1rem", justifyContent: "center" }}
        >
          Download Resume ↗
        </a>
      </div>
    </>
  );
}
