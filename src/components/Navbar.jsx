import { useEffect, useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="container-custom">
        <nav className="portfolio-navbar">
          <a href="#home" className="logo">
            JC
          </a>

          <ul className={menuOpen ? "nav-links active" : "nav-links"}>
            <li>
              <a
                href="#home"
                className={activeSection === "home" ? "active" : ""}
                onClick={closeMenu}>
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className={activeSection === "about" ? "active" : ""}
                onClick={closeMenu}>
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className={activeSection === "skills" ? "active" : ""}
                onClick={closeMenu}>
                Skills
              </a>
            </li>

            <li>
              <a
                href="#experience"
                className={activeSection === "experience" ? "active" : ""}
                onClick={closeMenu}>
                Experience
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className={activeSection === "projects" ? "active" : ""}
                onClick={closeMenu}>
                Projects
              </a>
            </li>

            <li>
              <a
                href="#certifications"
                className={activeSection === "certifications" ? "active" : ""}
                onClick={closeMenu}>
                Certifications
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className={activeSection === "contact" ? "active" : ""}
                onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>

          <div className="navbar-actions">
            <a href="/src/assets/J. Cariñaga - Resume.pdf" className="resume-btn" download>
              <i className="bi bi-download"></i>
              Resume
            </a>

            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
