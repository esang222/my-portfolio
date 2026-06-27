import "../styles/hero.css";
import profile from "../assets/images/id-pic2.png";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container-custom">
        <div className="hero-wrapper">
          <div className="hero-content fade-up">
            <span className="hero-subtitle">WELCOME TO MY PORTFOLIO</span>

            <h1>
              Hi, I'm <span className="gradient-text">Jessa Cariñaga</span>
            </h1>

            <div className="typing-text">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "IT Graduate",
                  2000,
                ]}
                speed={45}
                repeat={Infinity}
              />
            </div>

            <p>
              Information Technology graduate passionate about building modern,
              responsive, and user-focused web applications. I enjoy
              transforming ideas into clean, scalable solutions while
              continuously learning new technologies to create better digital
              experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                <i className="bi bi-grid"></i>
                View Projects
              </a>

              <a href="/resume.pdf" download className="secondary-btn">
                <i className="bi bi-download"></i>
                Download Resume
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/esang222" target="_blank">
                <i className="bi bi-github"></i>
              </a>

              <a href="https://www.linkedin.com/in/jessa-carinaga/" target="_blank">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="mailto:carinagajessa18@gmail.com">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>

          <div className="hero-image fade-up">
            <div className="profile-card">
              <img src={profile} alt="Jessa Cariñaga" />
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="glass stat-box">
            <h2>2+</h2>

            <span>Major Projects</span>
          </div>

          <div className="glass stat-box">
            <h2>3</h2>

            <span>Certifications</span>
          </div>

          <div className="glass stat-box">
            <h2>1</h2>

            <span>Internship</span>
          </div>

          <div className="glass stat-box">
            <h2>2026</h2>

            <span>IT Graduate</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
