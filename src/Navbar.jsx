import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import "./styles/Navbar.css";

const NAV_LINKS = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#skills", label: "SKILLS" },
  { href: "#work", label: "WORK" },
  { href: "#contact", label: "CONTACT" },
];

function Navbar({ toggleDarkMode, darkMode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <nav className="navbar d-flex justify-content-between align-items-center px-4 shadow-sm fixed-top">
        <a href="#home" className="text-decoration-none">
          <h4 className="logo-title m-0">
            JESSA <br /> CARIÑAGA
          </h4>
        </a>

        {/* Desktop links */}
        <ul className="nav gap-4 fw-semibold align-items-center d-none d-md-flex" style={{ fontSize: "0.85rem" }}>
          {NAV_LINKS.map((link) => (
            <li className="nav-item" key={link.href}>
              <a href={link.href} className="nav-link">{link.label}</a>
            </li>
          ))}
          <li>
            <button
              className="btn btn-link p-0 dark-mode-toggle"
              onClick={toggleDarkMode}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <FaSun size={17} /> : <FaMoon size={17} />}
            </button>
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="d-flex d-md-none align-items-center gap-3">
          <button
            className="btn btn-link p-0 dark-mode-toggle"
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FaSun size={17} /> : <FaMoon size={17} />}
          </button>
          <button className="btn p-0 toggle" onClick={toggleSidebar} aria-label="Open menu">
            <FaBars size={22} />
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar} aria-label="Close menu">
          <FaTimes size={22} />
        </button>
        <ul className="sidebar-nav">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={toggleSidebar}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: "auto", fontSize: "0.8rem", color: "#c94b7b", opacity: 0.6, textAlign: "center" }}>
          made with ♡
        </div>
      </div>
    </>
  );
}

export default Navbar;
