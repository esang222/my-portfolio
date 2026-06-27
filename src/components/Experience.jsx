import "../styles/experience.css";

function Experience() {
  return (
    <section id="experience">
      <div className="container-custom">
        <div className="section-title">
          <span>Experience</span>

          <h2>Professional Experience</h2>

          <p>
            Practical experience gained through internship and administrative
            roles, applying both technical and organizational skills in
            real-world environments.
          </p>
        </div>

        <div className="experience-container">
          <article className="experience-card glass">
            <div className="experience-top">
              <div>
                <span className="experience-company">
                  Nidec Philippines Corporation
                </span>

                <h3>IT Intern · Full Stack Web Developer</h3>
              </div>

              <span className="experience-date">Feb 2026 — May 2026</span>
            </div>

            <p className="experience-description">
              Contributed to the development and successful deployment of an
              Internal Auditing Management System used for managing audit
              workflows, compliance monitoring, reporting, and user permissions.
            </p>

            <div className="achievement-grid">
              <div className="achievement-item">
                <i className="bi bi-check-circle-fill"></i>

                <span>
                  Built responsive frontend interfaces using HTML, CSS,
                  JavaScript, and Bootstrap.
                </span>
              </div>

              <div className="achievement-item">
                <i className="bi bi-check-circle-fill"></i>

                <span>Developed backend modules using PHP and MySQL.</span>
              </div>

              <div className="achievement-item">
                <i className="bi bi-check-circle-fill"></i>

                <span>
                  Managed over 160 audit checksheets with an optimized
                  relational database.
                </span>
              </div>

              <div className="achievement-item">
                <i className="bi bi-check-circle-fill"></i>

                <span>
                  Implemented PDF and Excel report generation, audit archiving,
                  and dashboard analytics.
                </span>
              </div>
            </div>

            <div className="tech-used">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Bootstrap</span>
              <span>PHP</span>
              <span>MySQL</span>
            </div>
          </article>

          <article className="experience-card glass">
            <div className="experience-top">
              <div>
                <span className="experience-company">
                  Barangay Health Center
                </span>

                <h3>Data Encoder</h3>
              </div>

              <span className="experience-date">April 2025</span>
            </div>

            <p className="experience-description">
              Maintained inventory records and encoded medicine data into the
              inventory management system while ensuring accuracy and
              consistency.
            </p>

            <div className="achievement-grid">
              <div className="achievement-item">
                <i className="bi bi-check-circle-fill"></i>

                <span>Maintained accurate inventory records.</span>
              </div>

              <div className="achievement-item">
                <i className="bi bi-check-circle-fill"></i>

                <span>
                  Updated medicine stock information with high attention to
                  detail.
                </span>
              </div>

              <div className="achievement-item">
                <i className="bi bi-check-circle-fill"></i>

                <span>
                  Improved data consistency through careful validation.
                </span>
              </div>
            </div>
          </article>

          <article className="experience-card glass">
            <div className="experience-top">
              <div>
                <span className="experience-company">
                  Barangay Health Center
                </span>

                <h3>Clerk Assistant</h3>
              </div>

              <span className="experience-date">May 2023</span>
            </div>

            <p className="experience-description">
              Assisted residents by processing documents, encoding confidential
              information, and preparing official records efficiently.
            </p>

            <div className="achievement-grid">
              <div className="achievement-item">
                <i className="bi bi-check-circle-fill"></i>

                <span>Processed large volumes of resident records.</span>
              </div>

              <div className="achievement-item">
                <i className="bi bi-check-circle-fill"></i>

                <span>Maintained confidentiality and document accuracy.</span>
              </div>

              <div className="achievement-item">
                <i className="bi bi-check-circle-fill"></i>

                <span>
                  Assisted with verification and document release processes.
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Experience;
