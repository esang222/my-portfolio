import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="fw-bolder display-6 mb-5 text-center">Featured <span className="text-gradient">Projects.</span></h2>
        <div className="row g-5">
          
          <div className="col-lg-6">
            <div className="premium-card d-flex flex-column h-100">
              <div className="project-img-placeholder">
                <i className="bi bi-image display-4"></i>
                {/* Replace this div with: <img src="project-1.jpg" className="w-100 h-100" style={{objectFit: 'cover'}} /> */}
              </div>
              <div className="p-4 p-md-5 d-flex flex-column flex-grow-1">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h3 className="fw-bold mb-0">I-AIMS Dashboard</h3>
                  <a href="#" className="text-dark fs-4"><i className="bi bi-box-arrow-up-right"></i></a>
                </div>
                <span className="text-primary fw-semibold small mb-3">Internship System Deployment</span>
                <p className="text-muted mb-4">A complete full-stack web application to manage internal audit processes and employee compliance[cite: 1]. Integrated PDF/Excel report generation and role-based access control workflows[cite: 1].</p>
                <div className="mt-auto d-flex flex-wrap gap-2">
                  {["HTML/CSS/JS", "PHP", "MySQL", "Bootstrap"].map((tech, i) => (
                    <span key={i} className="small text-muted fw-bold bg-light px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="premium-card d-flex flex-column h-100">
              <div className="project-img-placeholder">
                <i className="bi bi-image display-4"></i>
              </div>
              <div className="p-4 p-md-5 d-flex flex-column flex-grow-1">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h3 className="fw-bold mb-0">Envirocool Tracker</h3>
                  <a href="#" className="text-dark fs-4"><i className="bi bi-github"></i></a>
                </div>
                <span className="text-primary fw-semibold small mb-3">Capstone Thesis</span>
                <p className="text-muted mb-4">A robust logistics system with role-based access for operational managers and drivers[cite: 1]. Integrated GPS tracking, SMS API notifications, and comprehensive delivery analytics reporting[cite: 1].</p>
                <div className="mt-auto d-flex flex-wrap gap-2">
                  {["React", "Bootstrap", "PHP", "MySQL"].map((tech, i) => (
                    <span key={i} className="small text-muted fw-bold bg-light px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;