import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ toggleDarkMode, darkMode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <nav className="navbar d-flex justify-content-between align-items-center px-5 shadow-sm fixed-top">
        <h4 className="logo-title px-3 py-2 m-0">
          JESSA <br /> CARIÑAGA
        </h4>

        {/* Desktop links */}
        <ul className="nav gap-4 fw-semibold fs-5 align-items-center d-none d-md-flex">
          <li className="nav-item">
            <a href="#home" className="nav-link text-dark">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link text-dark">
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a href="#works" className="nav-link text-dark">
              WORKS
            </a>
          </li>
          <li>
            <button
              className="btn btn-link p-0 dark-mode-toggle"
              onClick={toggleDarkMode}
            >
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </li>
        </ul>

        {/* Mobile: Dark Mode + Hamburger */}
        <div className="d-flex d-md-none align-items-center gap-3">
          <button
            className="btn btn-link p-0 dark-mode-toggle"
            onClick={toggleDarkMode}
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          <button
            className="btn p-0 toggle"
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <FaBars size={24} />
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          <FaTimes size={24} />
        </button>
        <ul className="sidebar-nav">
          <li>
            <a href="#home" onClick={toggleSidebar}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleSidebar}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#works" onClick={toggleSidebar}>
              WORKS
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
