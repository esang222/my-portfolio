import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="row justify-content-between align-items-center g-5">
          <div className="col-lg-5">
            <h2 className="fw-bolder mb-4 display-6">Behind the <span className="text-gradient">Code.</span></h2>
            <p className="text-muted mb-4 line-height-lg fs-5">
              I am a detail-oriented Information Technology graduate combining technical precision with modern web technologies[cite: 1]. My background bridges the gap between complex administrative data workflows and seamless software development.
            </p>
            <div className="d-flex gap-3 mb-4">
               <a href="#" className="btn btn-light rounded-circle shadow-sm p-3"><i className="bi bi-github fs-5"></i></a>
               <a href="#" className="btn btn-light rounded-circle shadow-sm p-3"><i className="bi bi-linkedin fs-5"></i></a>
               <a href="mailto:carinagajessa18@gmail.com" className="btn btn-light rounded-circle shadow-sm p-3"><i className="bi bi-envelope-fill fs-5"></i></a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-4">
              <div className="col-sm-6">
                <div className="premium-card p-4">
                  <i className="bi bi-mortarboard fs-2 text-gradient mb-3 d-block"></i>
                  <h5 className="fw-bold">Education</h5>
                  <p className="text-muted small mb-0">BS Information Technology<br/>University of Cabuyao (2026)[cite: 1]</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="premium-card p-4">
                  <i className="bi bi-award fs-2 text-gradient mb-3 d-block"></i>
                  <h5 className="fw-bold">Certifications</h5>
                  <p className="text-muted small mb-0">CISCO NetAcad JavaScript[cite: 1]<br/>Google Analytics Certified[cite: 1]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;