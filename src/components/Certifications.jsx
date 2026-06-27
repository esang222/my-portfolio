import "../styles/certifications.css";

function Certifications() {
  return (
    <section id="certifications">
      <div className="container-custom">
        <div className="section-title">
          <span>Certifications</span>

          <h2>Learning Never Stops</h2>

          <p>
            Certifications that strengthened my programming, analytics, and web
            development knowledge while continuously improving my technical
            skills.
          </p>
        </div>

        <div className="certification-grid">
          <article className="certificate glass">
            <div className="certificate-icon">
              <i className="bi bi-award-fill"></i>
            </div>

            <div>
              <h3>JavaScript Essentials 1</h3>

              <p>CISCO Networking Academy</p>

              <span>2026</span>
            </div>
          </article>

          <article className="certificate glass">
            <div className="certificate-icon">
              <i className="bi bi-award-fill"></i>
            </div>

            <div>
              <h3>JavaScript Essentials 2</h3>

              <p>CISCO Networking Academy</p>

              <span>2026</span>
            </div>
          </article>

          <article className="certificate glass">
            <div className="certificate-icon">
              <i className="bi bi-bar-chart-fill"></i>
            </div>

            <div>
              <h3>Google Analytics Certification</h3>

              <p>Google Skillshop</p>

              <span>2026</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
