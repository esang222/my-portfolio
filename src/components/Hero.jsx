import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center pt-5">
      <div className="container mt-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-7 order-2 order-lg-1">
            <span className="badge bg-white text-dark shadow-sm rounded-pill px-3 py-2 mb-4 border fw-medium d-inline-flex align-items-center gap-2">
              <i className="bi bi-stars text-warning"></i> Available for Full-Time Roles
            </span>
            <h1 className="display-3 fw-bolder mb-3 line-height-sm">
              Building digital <br />
              systems with <span className="text-gradient">precision.</span>
            </h1>
            <h2 className="h4 text-muted fw-normal mb-4">
              Hi, I'm Jessa V. Cariñaga[cite: 1] — A Full-Stack Web Developer based in Laguna[cite: 1].
            </h2>
            <p className="lead text-muted mb-5 pe-lg-5" style={{ fontSize: '1.1rem' }}>
              I specialize in robust data management, secure REST API integrations, and crafting responsive user interfaces ensuring zero entry errors under tight deadlines[cite: 1].
            </p>
            <div className="d-flex flex-wrap gap-4 align-items-center">
              <a href="#projects" className="btn btn-gradient text-decoration-none">Explore My Work</a>
              <a href="#contact" className="text-dark fw-bold text-decoration-none d-flex align-items-center gap-2">
                Let's Talk <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 text-center">
            {/* Replace this div with an actual <img> tag of yourself */}
            <div className="premium-card p-2 shadow-lg mx-auto" style={{ maxWidth: '400px', aspectRatio: '4/5' }}>
              <div className="w-100 h-100 rounded-4 d-flex align-items-center justify-content-center" style={{ background: '#e2e8f0' }}>
                <i className="bi bi-person-bounding-box display-1 text-muted"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;