import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ background: 'rgba(250, 249, 249, 0.8)', backdropFilter: 'blur(10px)' }}>
      <div className="container py-2">
        <a className="navbar-brand fw-bolder fs-4" href="#home">JVC<span className="text-gradient">.</span></a>
        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navLinks">
          <i className="bi bi-grid-3x3-gap-fill fs-2 text-dark"></i>
        </button>
        <div className="collapse navbar-collapse" id="navLinks">
          <ul className="navbar-nav ms-auto gap-3 fw-semibold">
            <li className="nav-item"><a className="nav-link text-dark" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link text-dark" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link text-dark" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link text-dark" href="#projects">Work</a></li>
            <li className="nav-item"><a className="nav-link text-dark" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;