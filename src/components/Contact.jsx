import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="premium-card p-5 p-md-5 text-center shadow-lg" style={{ background: 'linear-gradient(135deg, #1f2937, #111827)', color: 'white' }}>
          <div className="row justify-content-center">
            <div className="col-lg-8 py-5">
              <h2 className="display-5 fw-bolder mb-4">Ready to collaborate?</h2>
              <p className="lead text-white-50 mb-5">
                I am actively looking for full-time opportunities where I can contribute my web development and database management skills.
              </p>
              <a href="mailto:carinagajessa18@gmail.com" className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold shadow">
                Send an Email <i className="bi bi-send ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;