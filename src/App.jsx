import React from "react";
import "./styles/App.css"; // Ensure your new CSS is linked
import IdPic from "./assets/id-pic2.png";

function App() {
  const skills = ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "PHP", "MySQL", "UI/UX Design"];

  return (
    <div className="container portfolio-container py-5">
      
      {/* ── HERO SECTION ── */}
      <header className="sticker-card p-4 p-md-5 mb-5" style={{ background: "var(--pink-pastel)" }}>
        <div className="row align-items-center text-center text-md-start gap-4 gap-md-0">
          <div className="col-12 col-md-7">
            <p className="accent-text mb-2" style={{ fontSize: "1.5rem" }}>
              Hello! I'm...
            </p>
            <h1 className="mb-3" style={{ fontSize: "clamp(3rem, 8vw, 4.5rem)", lineHeight: "1" }}>
              Jessa <br className="d-none d-md-block" /> Cariñaga
            </h1>
            <p className="fw-bold mb-4" style={{ fontSize: "1.2rem" }}>
              Full-Stack Web Developer & UI Enthusiast. <br className="d-none d-md-block" />
              Crafting impactful systems and distinct digital experiences.
            </p>
            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
              <a href="#projects" className="btn-retro third">
                <i className="fa-solid fa-folder-open me-2"></i> View Work
              </a>
              <a href="/src/assets/J. Cariñaga - Resume.pdf" download className="btn-retro secondary">
                <i className="fa-solid fa-file-arrow-down me-2"></i> Get Resume
              </a>
            </div>
          </div>
          <div className="col-12 col-md-5 d-flex justify-content-center">
            <img src={IdPic} alt="Jessa Cariñaga" className="hero-image" />
          </div>
        </div>
      </header>

      {/* ── SKILLS & EDUCATION GRID ── */}
      <div className="row g-4 mb-5">
        <section className="col-12 col-md-6">
          <div className="sticker-card p-4 p-md-5 h-100" style={{ background: "white" }}>
            <h2 className="accent-text mb-4" style={{ fontSize: "2rem" }}>My Skills</h2>
            <div className="d-flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="col-12 col-md-6">
          <div className="sticker-card p-4 p-md-5 h-100" style={{ background: "var(--yellow-butter)" }}>
            <h2 className="accent-text mb-4" style={{ fontSize: "2rem" }}>Experience</h2>
            <div className="mb-4">
              <h3 className="mb-1" style={{ fontSize: "1.2rem" }}>Full-Stack IT Intern</h3>
              <p className="mb-0 fw-bold">Nidec Philippines Corporation</p>
              <p className="mb-0 text-muted" style={{ fontSize: "0.9rem" }}>Jan 2026 - Present</p>
            </div>
            <div>
              <h3 className="mb-1" style={{ fontSize: "1.2rem" }}>BS Information Technology</h3>
              <p className="mb-0 fw-bold">Pamantasan ng Cabuyao</p>
            </div>
          </div>
        </section>
      </div>

      {/* ── PROJECTS SECTION ── */}
      <section id="projects" className="mb-5 pb-5">
        <h1 className="text-center mb-5" style={{ fontSize: "3rem" }}>Selected Projects</h1>
        
        <div className="d-flex flex-column gap-5">
          
          {/* Project 1 */}
          <div className="sticker-card p-4 p-md-5" style={{ background: "white" }}>
            <div className="row align-items-center g-4">
              <div className="col-12 col-md-6 order-2 order-md-1">
                <h2 className="mb-2" style={{ fontSize: "2rem" }}>I-AIMS: Internal Audit Insights Module System</h2>
                <p className="accent-text mb-3" style={{ fontSize: "1.2rem" }}>Nidec Philippines Corporation</p>
                <p>A comprehensive system designed for internal audit management, featuring dynamic database schema design, UI enhancements, and robust Excel/PDF reporting features.</p>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  <span className="skill-tag" style={{ background: "white", padding: "0.3rem 1rem", fontSize: "0.8rem" }}><i className="fa-brands fa-php me-1"></i> PHP</span>
                  <span className="skill-tag" style={{ background: "white", padding: "0.3rem 1rem", fontSize: "0.8rem" }}><i className="fa-solid fa-database me-1"></i> MySQL</span>
                </div>
              </div>
              <div className="col-12 col-md-6 order-1 order-md-2">
                <div className="project-img" style={{ background: "var(--pink-pastel)" }}></div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="sticker-card p-4 p-md-5" style={{ background: "var(--green-sage)" }}>
             <div className="row align-items-center g-4">
              <div className="col-12 col-md-6">
                 <div className="project-img" style={{ background: "white" }}></div>
              </div>
              <div className="col-12 col-md-6">
                <h2 className="mb-2" style={{ fontSize: "2rem" }}>Delivery Tracking Analytics</h2>
                <p className="accent-text mb-3" style={{ fontSize: "1.2rem" }}>Envirocool Corporation</p>
                <p>Developed a tracking system with data analytics integration to monitor delivery routes, user roles, and logistical efficiency.</p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="sticker-card p-4 p-md-5" style={{ background: "white" }}>
             <div className="row align-items-center g-4">
              <div className="col-12 col-md-6 order-2 order-md-1">
                <h2 className="mb-2" style={{ fontSize: "2rem" }}>Sanrio Collections E-Commerce</h2>
                <p className="accent-text mb-3" style={{ fontSize: "1.2rem" }}>Front-End Development</p>
                <p>A fully responsive e-commerce storefront layout focusing on UI/UX principles, engaging product carousels, and playful design.</p>
                <a href="https://6820588de296b81face2a703--sanrio-collections.netlify.app/" target="_blank" rel="noreferrer" className="btn-retro mt-3" style={{ fontSize: "0.9rem" }}>
                  <i className="fa-solid fa-arrow-up-right-from-square me-2"></i> View Live Site
                </a>
              </div>
              <div className="col-12 col-md-6 order-1 order-md-2">
                 <div className="project-img" style={{ background: "var(--yellow-butter)" }}></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── CORE IT COMPETENCIES ── */}
      <section id="competencies" className="mb-5 pb-5">
        <h2 className="text-center mb-5" style={{ fontSize: "3rem" }}>What I Do</h2>
        
        <div className="row g-4">
          {/* Card 1: Frontend */}
          <div className="col-12 col-md-4">
            <div className="sticker-card p-4 text-center h-100" style={{ background: "white" }}>
              <i className="fa-solid fa-wand-magic-sparkles mb-3" style={{ fontSize: "3rem", color: "var(--pink-pastel)" }}></i>
              <h3 className="mb-3" style={{ fontSize: "1.5rem" }}>Frontend & UI</h3>
              <p className="mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                Crafting responsive, accessible, and playful user interfaces. I turn Figma designs into pixel-perfect, interactive web experiences.
              </p>
              <p className="accent-text mt-3 mb-0">HTML, CSS, ReactJS, UI/UX</p>
            </div>
          </div>

          {/* Card 2: Backend */}
          <div className="col-12 col-md-4">
            <div className="sticker-card p-4 text-center h-100" style={{ background: "var(--pink-pastel)" }}>
              <i className="fa-solid fa-database mb-3" style={{ fontSize: "3rem", color: "var(--yellow-butter)" }}></i>
              <h3 className="mb-3" style={{ fontSize: "1.5rem" }}>Backend & DBs</h3>
              <p className="mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                Building the invisible engines that power web apps. From database schema design to secure server-side logic and API integration.
              </p>
              <p className="accent-text mt-3 mb-0" style={{ color: "#2b2b2b" }}>PHP, MySQL, NodeJS</p>
            </div>
          </div>

          {/* Card 3: Systems & Auditing */}
          <div className="col-12 col-md-4">
             <div className="sticker-card p-4 text-center h-100" style={{ background: "var(--yellow-butter)" }}>
              <i className="fa-solid fa-chart-pie mb-3" style={{ fontSize: "3rem", color: "white" }}></i>
              <h3 className="mb-3" style={{ fontSize: "1.5rem" }}>System Analytics</h3>
              <p className="mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                Developing internal tools, management systems, and data analytics dashboards to streamline corporate workflows and auditing.
              </p>
              <p className="accent-text mt-3 mb-0" style={{ color: "#2b2b2b" }}>Data Analytics, Reporting</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS & MILESTONES ── */}
      <section id="achievements" className="mb-5 pb-5">
        <div className="sticker-card p-4 p-md-5" style={{ background: "var(--green-sage)" }}>
          <h2 className="mb-4 text-center text-md-start" style={{ fontSize: "2.5rem" }}>
            <i className="fa-solid fa-trophy me-2"></i> Milestones & Certs
          </h2>
          
          <div className="d-flex flex-column gap-3">
            <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 bg-white p-3 p-md-4 rounded-3" style={{ border: "3px solid #2b2b2b" }}>
              <div className="d-inline-flex justify-content-center align-items-center fw-bold rounded-circle" style={{ background: "var(--pink-pastel)", width: "60px", height: "60px", border: "2px solid #2b2b2b", flexShrink: 0 }}>2026</div>
              <div>
                <h4 className="mb-1" style={{ fontSize: "1.2rem" }}>Deployed IMS Internal Auditing System</h4>
                <p className="mb-0 text-muted" style={{ fontSize: "0.95rem" }}>Successfully transitioned Nidec's auditing system from development to deployment phase.</p>
              </div>
            </div>

            <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 bg-white p-3 p-md-4 rounded-3" style={{ border: "3px solid #2b2b2b" }}>
              <div className="d-inline-flex justify-content-center align-items-center fw-bold rounded-circle" style={{ background: "var(--yellow-butter)", width: "60px", height: "60px", border: "2px solid #2b2b2b", flexShrink: 0 }}>2026</div>
              <div>
                <h4 className="mb-1" style={{ fontSize: "1.2rem" }}>Iskolar ng Laguna Merit</h4>
                <p className="mb-0 text-muted" style={{ fontSize: "0.95rem" }}>Passed the competitive examinations to secure the provincial scholarship grant.</p>
              </div>
            </div>

            <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 bg-white p-3 p-md-4 rounded-3" style={{ border: "3px dashed #2b2b2b" }}>
               <div className="d-inline-flex justify-content-center align-items-center fw-bold rounded-circle" style={{ background: "#e2dfd8", width: "60px", height: "60px", border: "2px dashed #2b2b2b", flexShrink: 0 }}>WIP</div>
              <div>
                <h4 className="mb-1" style={{ fontSize: "1.2rem" }}>Upcoming IT Certifications</h4>
                <p className="mb-0 text-muted" style={{ fontSize: "0.95rem" }}>Currently exploring courses in Ethical Hacking, AI, or IT Customer Support.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── CAREER JOURNEY TIMELINE ── */}
      <section id="experience" className="mb-5 pb-5">
        <h2 className="text-center mb-5" style={{ fontSize: "3rem" }}>My Journey So Far</h2>
        
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="d-flex flex-column gap-4">
              
              {/* Timeline Item 1 (Most Recent / Future Job) */}
              <div className="sticker-card p-4 bg-white d-flex gap-4 align-items-start">
                <div className="d-none d-md-flex justify-content-center align-items-center fw-bold rounded-circle" style={{ background: "var(--pink-pastel)", width: "70px", height: "70px", border: "3px solid #2b2b2b", flexShrink: 0 }}>Now</div>
                <div>
                  <h3 className="mb-1" style={{ fontSize: "1.5rem" }}>Full-Stack Developer</h3>
                  <p className="accent-text mb-2" style={{ fontSize: "1.1rem" }}>Seeking New Opportunities</p>
                  <p className="mb-0 text-muted">Ready to bring my experience in systems auditing, UI/UX, and backend architecture to a forward-thinking tech team.</p>
                </div>
              </div>

              {/* Timeline Item 2 (Nidec Internship) */}
              <div className="sticker-card p-4 d-flex gap-4 align-items-start" style={{ background: "var(--yellow-butter)" }}>
                <div className="d-none d-md-flex justify-content-center align-items-center fw-bold rounded-circle" style={{ background: "white", width: "70px", height: "70px", border: "3px solid #2b2b2b", flexShrink: 0 }}>2026</div>
                <div>
                  <h3 className="mb-1" style={{ fontSize: "1.5rem" }}>Full-Stack IT Intern</h3>
                  <p className="accent-text mb-2" style={{ fontSize: "1.1rem" }}>Nidec Philippines Corporation</p>
                  <p className="mb-0 text-muted">Completed a 400-hour practicum focused on developing and deploying an Integrated Management System (IMS) for internal auditing.</p>
                </div>
              </div>

              {/* Timeline Item 3 (Degree) */}
              <div className="sticker-card p-4 d-flex gap-4 align-items-start" style={{ background: "var(--green-sage)" }}>
                 <div className="d-none d-md-flex justify-content-center align-items-center fw-bold rounded-circle" style={{ background: "white", width: "70px", height: "70px", border: "3px solid #2b2b2b", flexShrink: 0 }}>2026</div>
                <div>
                  <h3 className="mb-1" style={{ fontSize: "1.5rem" }}>BS Information Technology</h3>
                  <p className="accent-text mb-2" style={{ fontSize: "1.1rem" }}>Pamantasan ng Cabuyao</p>
                  <p className="mb-0 text-muted">Graduated with a focus on web technologies, systems development, and data analytics. Proud Iskolar ng Laguna merit recipient.</p>
                </div>
              </div>

              {/* Timeline Item 4 (Early Hustle / SPES) */}
              <div className="sticker-card p-4 bg-white d-flex gap-4 align-items-start opacity-75">
                 <div className="d-none d-md-flex justify-content-center align-items-center fw-bold rounded-circle" style={{ background: "#e2dfd8", width: "70px", height: "70px", border: "3px dashed #2b2b2b", flexShrink: 0 }}>Past</div>
                <div>
                  <h3 className="mb-1" style={{ fontSize: "1.3rem" }}>Office Encoder (SPES)</h3>
                  <p className="accent-text mb-2" style={{ fontSize: "1rem" }}>Local Barangay Hall</p>
                  <p className="mb-0 text-muted" style={{ fontSize: "0.9rem" }}>Developed early administrative and data-handling skills through the Special Program for Employment of Students.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>      

      {/* ── LET'S CONNECT (CONTACT SECTION) ── */}
      <section id="contact" className="mb-4">
        <div className="sticker-card p-4 p-md-5 text-center" style={{ background: "var(--pink-pastel)" }}>
          <h2 className="mb-3" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>
            <i className="fa-solid fa-rocket me-2"></i> Let's Build Something! 
          </h2>
          <p className="fw-bold mb-5" style={{ fontSize: "1.2rem", color: "var(--text-main)" }}>
            Got a system to develop or just want to say hello? My inbox is always open.
          </p>
          
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="mailto:jessa@example.com" className="btn-retro" style={{ background: "white", fontSize: "1.1rem" }}>
              <i className="fa-solid fa-envelope me-2"></i> Email Me
            </a>
            <a href="https://github.com/esang222" target="_blank" rel="noopener noreferrer" className="btn-retro secondary" style={{ fontSize: "1.1rem" }}>
              <i className="fa-brands fa-github me-2"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/jessa-cariñaga-b8a670354/" target="_blank" rel="noopener noreferrer" className="btn-retro" style={{ background: "var(--yellow-butter)", fontSize: "1.1rem" }}>
              <i className="fa-brands fa-linkedin me-2"></i> LinkedIn
            </a>
          </div>
        </div>
      </section>


    </div>
  );
}

export default App;