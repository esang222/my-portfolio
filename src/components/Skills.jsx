import "../styles/skills.css";

function Skills() {
  return (
    <section id="skills">
      <div className="container-custom">
        <div className="section-title">
          <span>Technical Skills</span>

          <h2>Technologies I Use</h2>

          <p>
            Technologies I've used throughout my academic projects, internship,
            and personal development journey.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skill-card glass">
            <div className="skill-header">
              <i className="bi bi-window"></i>

              <h3>Frontend</h3>
            </div>

            <div className="tech-list">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>React.js</span>
              <span>Bootstrap</span>
              <span>Vue.js</span>
            </div>
          </div>

          <div className="skill-card glass">
            <div className="skill-header">
              <i className="bi bi-server"></i>

              <h3>Backend</h3>
            </div>

            <div className="tech-list">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>PHP</span>
              <span>REST APIs</span>
            </div>
          </div>

          <div className="skill-card glass">
            <div className="skill-header">
              <i className="bi bi-database"></i>

              <h3>Database</h3>
            </div>

            <div className="tech-list">
              <span>MySQL</span>
              <span>MongoDB</span>
            </div>
          </div>

          <div className="skill-card glass">
            <div className="skill-header">
              <i className="bi bi-tools"></i>

              <h3>Tools</h3>
            </div>

            <div className="tech-list">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Postman</span>
              <span>XAMPP</span>
              <span>phpMyAdmin</span>
              <span>Microsoft Office</span>
              <span>Figma</span>
              <span>Canva</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
