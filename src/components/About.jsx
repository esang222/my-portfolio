import "../styles/about.css";

function About() {
  return (
    <section id="about">
      <div className="container-custom">
        <div className="section-title">
          <span>About Me</span>

          <h2>
            Turning Ideas Into
            <span className="gradient-text"> Digital Solutions</span>
          </h2>

          <p>
            Passionate about creating modern web applications, solving
            real-world problems, and continuously learning new technologies.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-info glass">
            <div className="info-item">
              <i className="bi bi-person-circle"></i>

              <div>
                <h5>Name</h5>

                <p>Jessa Cariñaga</p>
              </div>
            </div>

            <div className="info-item">
              <i className="bi bi-mortarboard-fill"></i>

              <div>
                <h5>Education</h5>

                <p>BS Information Technology</p>
              </div>
            </div>

            <div className="info-item">
              <i className="bi bi-geo-alt-fill"></i>

              <div>
                <h5>Location</h5>

                <p>Santa Rosa City, Laguna</p>
              </div>
            </div>

            <div className="info-item">
              <i className="bi bi-briefcase-fill"></i>

              <div>
                <h5>Status</h5>

                <p>Open to Work</p>
              </div>
            </div>
          </div>

          <div className="about-content">
            <h3>
              Building practical, scalable, and user-focused web applications.
            </h3>

            <p>
              I recently graduated with a Bachelor of Science in Information
              Technology and enjoy developing responsive web applications that
              combine clean user interfaces with reliable backend functionality.
              Throughout my internship and academic projects, I gained hands-on
              experience building full-stack systems, designing databases,
              integrating APIs, and improving user experiences.
            </p>

            <p>
              Beyond development, I value writing clean code, learning modern
              technologies, collaborating with teams, and continuously improving
              my skills to build software that delivers meaningful solutions.
            </p>

            <div className="about-highlights">
              <div>
                <i className="bi bi-check-circle-fill"></i>
                Responsive Web Development
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                Full Stack Development
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                Database Design
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                REST API Integration
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                UI/UX Design
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                Data Management
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
