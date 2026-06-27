import React from 'react';

const Footer = () => {
  return (
    <footer className="py-5 text-center mt-5">
      <div className="container border-top pt-5">
        <a className="fw-bolder fs-4 text-dark text-decoration-none mb-3 d-inline-block" href="#home">JVC<span className="text-gradient">.</span></a>
        <p className="text-muted small mb-0">
          © {new Date().getFullYear()} Jessa V. Cariñaga. All rights reserved. Built with React & Vite.
        </p>
      </div>
    </footer>
  );
};

export default Footer;