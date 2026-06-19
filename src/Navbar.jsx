import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import "./styles/Navbar.css";

function Navbar({ toggleDarkMode, darkMode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <nav className="navbar d-flex justify-content-between align-items-center px-4 shadow-sm fixed-top">
        <h4 className="logo-title m-0">
          JESSA <br /> CARIÑAGA
        </h4>

        {/* Desktop links */}
        <ul className="nav gap-4 fw-semibold align-items-center d-none d-md-flex" style={{ fontSize: "0.85rem" }}>
          <li className="nav-item">
            <a href="#home" className="nav-link">HOME</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">ABOUT</a>
          </li>
          <li className="nav-item">
            <a href="#works" className="nav-link">SKILLS</a>
          </li>
          <li>
            <button className="btn btn-link p-0 dark-mode-toggle" onClick={toggleDarkMode}>
              {darkMode ? <FaSun size={17} /> : <FaMoon size={17} />}
            </button>
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="d-flex d-md-none align-items-center gap-3">
          <button className="btn btn-link p-0 dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? <FaSun size={17} /> : <FaMoon size={17} />}
          </button>
          <button className="btn p-0 toggle" onClick={toggleSidebar} aria-label="Toggle menu">
            <FaBars size={22} />
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          <FaTimes size={22} />
        </button>
        <ul className="sidebar-nav">
          <li><a href="#home" onClick={toggleSidebar}>HOME</a></li>
          <li><a href="#about" onClick={toggleSidebar}>ABOUT</a></li>
          <li><a href="#works" onClick={toggleSidebar}>SKILLS</a></li>
        </ul>
        <div style={{ marginTop: "auto", fontSize: "0.8rem", color: "#c94b7b", opacity: 0.6, textAlign: "center" }}>
          made with ♡
        </div>
      </div>
    </>
  );
}

export default Navbar;