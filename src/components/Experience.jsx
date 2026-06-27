import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="fw-bolder display-6 mb-5 text-center">Professional <span className="text-gradient">Journey.</span></h2>
            
            <div className="premium-card p-4 p-md-5">
              {/* Item 1 */}
              <div className="timeline-item">
                <div className="d-flex flex-wrap justify-content-between align-items-center mb-2">
                  <h4 className="fw-bold mb-0">IT Intern - Web Developer</h4>
                  <span className="badge bg-light text-dark border px-3 py-2 rounded-pill">Feb 2026 - May 2026</span>
                </div>
                <h6 className="text-muted fw-bold mb-3">Nidec Philippines Corporation</h6>
                <p className="text-muted">Developed and fully deployed a full-stack Internal Auditing Management System featuring role-based authentication and audit archiving workflows[cite: 1]. Designed a MySQL database supporting 160+ audit checksheets and complex data relationships[cite: 1].</p>
              </div>

              {/* Item 2 */}
              <div className="timeline-item">
                <div className="d-flex flex-wrap justify-content-between align-items-center mb-2">
                  <h4 className="fw-bold mb-0">Data Encoder</h4>
                  <span className="badge bg-light text-dark border px-3 py-2 rounded-pill">April 2025</span>
                </div>
                <h6 className="text-muted fw-bold mb-3">Barangay Health Center</h6>
                <p className="text-muted">Encoded medicine inventories into the internal Inventory Management system[cite: 1]. Maintained strict data accuracy to ensure correct stock counts and minimized entry errors[cite: 1].</p>
              </div>

              {/* Item 3 */}
              <div className="timeline-item mb-0 border-left-0">
                <div className="d-flex flex-wrap justify-content-between align-items-center mb-2">
                  <h4 className="fw-bold mb-0">Clerk Assistant</h4>
                  <span className="badge bg-light text-dark border px-3 py-2 rounded-pill">May 2023</span>
                </div>
                <h6 className="text-muted fw-bold mb-3">Barangay Health Center</h6>
                <p className="text-muted">Encoded resident information securely to verify official document clearance requests[cite: 1]. Managed printing, verification, and high-volume document releasing workflows[cite: 1].</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;