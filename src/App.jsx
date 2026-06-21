import React, { useEffect, useState } from "react";
import "./styles/App.css";
import Navbar from "./Navbar.jsx";
import IdPic from "./assets/id-pic2.png";
import Sanrio from "./assets/sanrio2.png";
import CCS from "./assets/CCS-CPS.png";
import Envirocool from "./assets/envirocool2.png";
import Nidec from "./assets/nidec.png";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.body.classList.toggle("darkmode", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const skillGroups = [
    { label: "Frontend Development", icon: "fa-solid fa-code", items: ["HTML5", "CSS", "JavaScript", "React.js", "Vue.js", "Bootstrap"] },
    { label: "Backend Development", icon: "fa-solid fa-server", items: ["PHP", "Node.js", "Express.js", "REST APIs"] },
    { label: "Database", icon: "fa-solid fa-database", items: ["MySQL", "MongoDB"] },
    { label: "Tools & Platforms", icon: "fa-solid fa-toolbox", items: ["Git & GitHub", "VS Code", "Postman", "XAMPP"] },
    { label: "UI/UX Design", icon: "fa-solid fa-pen-ruler", items: ["Figma", "Canva"] },
  ];

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="container portfolio-container py-5 mt-5">
        {/* ── HERO SECTION ── */}
        <header
          id="home"
          className="sticker-card p-4 p-md-5 mb-5"
          style={{ background: "var(--pink-pastel)" }}>
          <div className="row align-items-center text-center text-md-start gap-4 gap-md-0">
            <div className="col-12 col-md-7">
              <p className="accent-text mb-2" style={{ fontSize: "1.5rem" }}>
                Hello! I'm...
              </p>
              <h1
                className="mb-3"
                style={{
                  fontSize: "clamp(3rem, 8vw, 4.5rem)",
                  lineHeight: "1",
                }}>
                Jessa <br className="d-none d-md-block" /> Cariñaga
              </h1>
              <p className="fw-bold mb-3" style={{ fontSize: "1.2rem" }}>
                Full-Stack Web Developer & Fresh IT Graduate.{" "}
                <br className="d-none d-md-block" />
                Building reliable systems with clean, intentional interfaces.
              </p>
              <div className="d-flex justify-content-center justify-content-md-start mb-4">
                <span className="status-pill">
                  <span className="status-dot"></span> Open to Work
                </span>
              </div>
              <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
                <a href="#work" className="btn-retro third">
                  <i className="fa-solid fa-folder-open me-2"></i> View Work
                </a>
                <a
                  href="/resume.pdf"
                  download="Jessa-Carinaga-Resume.pdf"
                  className="btn-retro secondary">
                  <i className="fa-solid fa-file-arrow-down me-2"></i> Get
                  Resume
                </a>
              </div>
            </div>
            <div className="col-12 col-md-5 d-flex justify-content-center">
              <img src={IdPic} alt="Jessa Cariñaga" className="hero-image" />
            </div>
          </div>
        </header>

        {/* ── ABOUT SECTION ── */}
        <section id="about" className="mb-5">
          <div className="row g-4">
            <div className="col-12 col-md-7">
              <div
                className="sticker-card p-4 p-md-5 h-100"
                style={{ background: "var(--card-bg)" }}>
                <p className="section-eyebrow mb-2">About Me</p>
                <h2 className="accent-text mb-4" style={{ fontSize: "2rem" }}>
                  A bit about my story
                </h2>
                <p className="mb-3" style={{ lineHeight: "1.7" }}>
                  I'm an Information Technology graduate from the University of
                  Cabuyao with a strong foundation in both full-stack web
                  development and precise data management. On the development
                  side, I have hands-on experience building applications from
                  the ground up, recently taking a corporate internal auditing
                  platform from a blank database all the way to a live
                  production deployment.
                </p>
                <p className="mb-0" style={{ lineHeight: "1.7" }}>
                  Beyond writing clean code, I bring a meticulous approach to
                  high-volume data entry and inventory management. Having
                  processed sensitive records with zero entry errors, I care
                  deeply about data integrity. Whether I'm designing a tidy
                  React component or encoding critical system records, I am
                  looking for a team where I can contribute reliable, error-free
                  work that people actually depend on.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-5">
              <div
                className="sticker-card p-4 p-md-5 h-100"
                style={{ background: "var(--yellow-butter)" }}>
                <h3 className="mb-4" style={{ fontSize: "1.3rem" }}>
  Quick Facts
</h3>
<ul className="list-unstyled d-flex flex-column gap-3 mb-0">
  <li className="d-flex gap-3">
    <i className="fa-solid fa-graduation-cap mt-1"></i>
    <span>
      BS Information Technology
      <br />
      <span className="text-soft">
        University of Cabuyao, 2026
      </span>
    </span>
  </li>
  <li className="d-flex gap-3">
    <i className="fa-solid fa-location-dot mt-1"></i>
    <span>
      Based in Sta. Rosa City
      <br />
      <span className="text-soft">Laguna, Philippines</span>
    </span>
  </li>
  <li className="d-flex gap-3">
    <i className="fa-solid fa-briefcase mt-1"></i>
    <span>
      Open to opportunities as a:
      <br />
      <span className="text-soft">
        Web Developer (Frontend / Full-Stack), Software Engineer, or Data Encoder
      </span>
    </span>
  </li>

  <li className="d-flex gap-3">
    <i className="fa-solid fa-layer-group mt-1"></i>
    <span>
      Core Ecosystems
      <br />
      <span className="text-soft">
        MERN Stack & Custom PHP/MySQL Systems
      </span>
    </span>
  </li>
  
  <li className="d-flex gap-3">
    <i className="fa-solid fa-desktop mt-1"></i>
    <span>
      Work Environment
      <br />
      <span className="text-soft">
        Thrives both independently and in team settings. Open to remote, hybrid, or on-site setups.
      </span>
    </span>
  </li>
</ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── SKILLS SECTION ── */}
        <section id="skills" className="mb-5 pb-3">
          <p className="section-eyebrow text-center mb-2">Skills & Tools</p>
          <h2 className="text-center mb-5" style={{ fontSize: "2.5rem" }}>
            What I Work With
          </h2>

          <div
            className="sticker-card p-2 p-md-5 mb-4"
            style={{ background: "var(--card-bg)" }}>
            <div className="d-flex flex-column gap-2">
              {skillGroups.map((group, gIndex) => (
                <div key={group.label}>
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <span
                      className="d-inline-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "12px",
                        border: "2.5px solid var(--text-main)",
                        background: [
                          "var(--pink-pastel)",
                          "var(--green-sage)",
                          "var(--yellow-butter)",
                        ][gIndex % 3],
                        boxShadow: "3px 3px 0px var(--text-main)",
                      }}>
                      <i
                        className={group.icon}
                        style={{
                          fontSize: "1.1rem",
                          color: "var(--text-main)",
                        }}></i>
                    </span>
                    <h3 className="mb-0 fw-bold" style={{ fontSize: "1.2rem" }}>
                      {group.label}
                    </h3>
                  </div>
                  <p
                    className="mb-0 text-dark"
                    style={{
                      paddingLeft: "calc(42px + 0.75rem)",
                      lineHeight: "1",
                    }}>
                    {group.items.join(" · ")}
                  </p>
                  {gIndex < skillGroups.length - 1 && (
                    <hr
                      className="mt-1 mb-0"
                      style={{
                        border: "none",
                        borderTop: "2px dashed var(--grid-line)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="row g-4">
            {/* Card 1: Frontend */}
            <div className="col-12 col-md-4">
              <div
                className="sticker-card p-4 text-center h-100"
                style={{ background: "var(--green-sage)" }}>
                <i
                  className="fa-solid fa-wand-magic-sparkles mb-3"
                  style={{ fontSize: "3rem", color: "#D66D92" }}></i>
                <h3 className="mb-3" style={{ fontSize: "1.4rem" }}>
                  Frontend & UI
                </h3>
                <p
                  className="mb-0"
                  style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                  Crafting responsive, accessible interfaces. I turn Figma
                  designs into pixel-attentive, interactive web experiences.
                </p>
                <p className="accent-text mt-3 mb-0">HTML, CSS, React, UI/UX</p>
              </div>
            </div>

            {/* Card 2: Backend */}
            <div className="col-12 col-md-4">
              <div
                className="sticker-card p-4 text-center h-100"
                style={{ background: "var(--card-bg)" }}>
                <i
                  className="fa-solid fa-database mb-3"
                  style={{ fontSize: "3rem", color: "var(--text-main)" }}></i>
                <h3 className="mb-3" style={{ fontSize: "1.4rem" }}>
                  Backend & Databases
                </h3>
                <p
                  className="mb-0"
                  style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                  Building the engines behind web apps — schema design, secure
                  server-side logic, and REST API integration.
                </p>
                <p className="accent-text mt-3 mb-0">PHP, MySQL, Node.js</p>
              </div>
            </div>

            {/* Card 3: Systems & Auditing */}
            <div className="col-12 col-md-4">
              <div
                className="sticker-card p-4 text-center h-100"
                style={{ background: "var(--yellow-butter)" }}>
                <i
                  className="fa-solid fa-chart-pie mb-3"
                  style={{ fontSize: "3rem", color: "var(--text-main)" }}></i>
                <h3 className="mb-3" style={{ fontSize: "1.4rem" }}>
                  Systems & Data
                </h3>
                <p
                  className="mb-0"
                  style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                  Developing internal tools and reporting dashboards that
                  streamline workflows and keep data accurate.
                </p>
                <p className="accent-text mt-3 mb-0">
                  Data Analytics, Reporting
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WORK SECTION ── */}
        <section id="work" className="mb-5 pb-5">
          <p className="section-eyebrow text-center mb-2">Portfolio</p>
          <h2 className="text-center mb-5" style={{ fontSize: "2.8rem" }}>
            Completed Works
          </h2>

          <div className="d-flex flex-column gap-5">
            {/* Project 1 */}
            <div
              className="sticker-card p-4 p-md-5"
              style={{ background: "var(--card-bg)" }}>
              <div className="row align-items-center g-4">
                <div className="col-12 col-md-6 order-2 order-md-1">
                  <h3 className="mb-2" style={{ fontSize: "1.7rem" }}>
                    I-AIMS: Internal Audit Insights Module System
                  </h3>
                  <p
                    className="accent-text mb-3"
                    style={{ fontSize: "1.1rem" }}>
                    Nidec Philippines Corporation · Internship Project ·
                    Full-Stack Development
                  </p>
                  <p>
                    A full-stack system for managing internal audit processes
                    and employee compliance, with role-based access,
                    self-assessment workflows, and a MySQL database supporting
                    160+ audit checksheets.
                    <br />
                    <br />
                    <span
                      className="text-muted"
                      style={{ fontSize: "0.95rem" }}>
                      <em>
                        <i className="fa-solid fa-lock me-1"></i> Note: This
                        system is deployed securely on the company's internal
                        servers for proprietary use, so a public live link is
                        unavailable.
                      </em>
                    </span>
                  </p>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    <span
                      className="skill-tag"
                      style={{
                        background: "var(--card-bg)",
                        padding: "0.3rem 1rem",
                        fontSize: "0.8rem",
                      }}>
                      <i className="fa-brands fa-html5 me-1"></i> HTML
                    </span>
                    <span
                      className="skill-tag"
                      style={{
                        background: "var(--card-bg)",
                        padding: "0.3rem 1rem",
                        fontSize: "0.8rem",
                      }}>
                      <i className="fa-brands fa-css3-alt me-1"></i> CSS
                    </span>
                    <span
                      className="skill-tag"
                      style={{
                        background: "var(--card-bg)",
                        padding: "0.3rem 1rem",
                        fontSize: "0.8rem",
                      }}>
                      <i className="fa-brands fa-js me-1"></i> JavaScript
                    </span>
                    <span
                      className="skill-tag"
                      style={{
                        background: "var(--card-bg)",
                        padding: "0.3rem 1rem",
                        fontSize: "0.8rem",
                      }}>
                      <i className="fa-brands fa-bootstrap me-1"></i> Bootstrap
                    </span>
                    <span
                      className="skill-tag"
                      style={{
                        background: "var(--card-bg)",
                        padding: "0.3rem 1rem",
                        fontSize: "0.8rem",
                      }}>
                      <i className="fa-brands fa-php me-1"></i> PHP
                    </span>
                    <span
                      className="skill-tag"
                      style={{
                        background: "var(--card-bg)",
                        padding: "0.3rem 1rem",
                        fontSize: "0.8rem",
                      }}>
                      <i className="fa-solid fa-database me-1"></i> MySQL
                    </span>
                  </div>
                </div>
                <div className="col-12 col-md-6 order-1 order-md-2">
                  <div
                    className="project-img"
                    style={{ background: "var(--pink-pastel)" }}>
                    <img src={Nidec} alt="I-AIMS Auditing System" />
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div
              className="sticker-card p-4 p-md-5"
              style={{ background: "var(--green-sage)" }}>
              <div className="row align-items-center g-4">
                <div className="col-12 col-md-6">
                  <div
                    className="project-img"
                    style={{ background: "var(--card-bg)" }}>
                    <img src={Envirocool} alt="Delivery Tracking System" />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <h3 className="mb-2" style={{ fontSize: "1.7rem" }}>
                    {" "}
                    Delivery Tracking System & Data Analytics
                  </h3>
                  <p
                    className="accent-text mb-3"
                    style={{ fontSize: "1.1rem" }}>
                    Envirocool Corporation · Thesis Project · Full-Stack
                    Development
                  </p>
                  <p>
                    A delivery tracking system with role-based access for
                    admins, managers, drivers, and customers — featuring GPS
                    tracking, SMS notifications, and an analytics dashboard with
                    PDF export.
                  </p>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    <span
                      className="skill-tag"
                      style={{
                        background: "var(--card-bg)",
                        padding: "0.3rem 1rem",
                        fontSize: "0.8rem",
                      }}>
                      <i className="fa-brands fa-react me-1"></i> React
                    </span>
                    <span
                      className="skill-tag"
                      style={{
                        background: "var(--card-bg)",
                        padding: "0.3rem 1rem",
                        fontSize: "0.8rem",
                      }}>
                      <i className="fa-brands fa-php me-1"></i> PHP
                    </span>
                    <span
                      className="skill-tag"
                      style={{
                        background: "var(--card-bg)",
                        padding: "0.3rem 1rem",
                        fontSize: "0.8rem",
                      }}>
                      <i className="fa-solid fa-database me-1"></i> MySQL
                    </span>
                    <span
                      className="skill-tag"
                      style={{
                        background: "var(--card-bg)",
                        padding: "0.3rem 1rem",
                        fontSize: "0.8rem",
                      }}>
                      <i className="fa-brands fa-bootstrap me-1"></i> Bootstrap
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div
              className="sticker-card p-4 p-md-5"
              style={{ background: "var(--card-bg)" }}>
              <div className="row align-items-center g-4">
                <div className="col-12 col-md-6 order-2 order-md-1">
                  <h3 className="mb-2" style={{ fontSize: "1.7rem" }}>
                    Sanrio Collections E-Commerce
                  </h3>
                  <p
                    className="accent-text mb-3"
                    style={{ fontSize: "1.1rem" }}>
                    School Project · Front-End Development
                  </p>
                  <p>
                    A fully responsive e-commerce storefront focused on UI/UX,
                    with engaging product carousels and a playful, on-brand
                    design.
                  </p>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    <span
                      className="skill-tag"
                      style={{
                        background: "var(--card-bg)",
                        padding: "0.3rem 1rem",
                        fontSize: "0.8rem",
                      }}>
                      <i className="fa-brands fa-html5 me-1"></i> HTML
                    </span>
                    <span
                      className="skill-tag"
                      style={{
                        background: "var(--card-bg)",
                        padding: "0.3rem 1rem",
                        fontSize: "0.8rem",
                      }}>
                      <i className="fa-brands fa-css3-alt me-1"></i> CSS
                    </span>
                    <span
                      className="skill-tag"
                      style={{
                        background: "var(--card-bg)",
                        padding: "0.3rem 1rem",
                        fontSize: "0.8rem",
                      }}>
                      <i className="fa-brands fa-bootstrap me-1"></i> Bootstrap
                    </span>
                  </div>
                  <a
                    href="https://6820588de296b81face2a703--sanrio-collections.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-retro mt-4"
                    style={{ fontSize: "0.9rem" }}>
                    <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>{" "}
                    View Live Site
                  </a>
                </div>
                <div className="col-12 col-md-6 order-1 order-md-2">
                  <div
                    className="project-img"
                    style={{ background: "var(--card-bg)" }}>
                    <img src={Sanrio} alt="Sanrio Collections" />
                  </div>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div
              className="sticker-card p-4 p-md-5"
              style={{ background: "var(--green-sage)" }}>
              <div className="row align-items-center g-4">
                <div className="col-12 col-md-6">
                  <div
                    className="project-img"
                    style={{ background: "var(--card-bg)" }}>
                    <img src={CCS} alt="" />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <h3 className="mb-2" style={{ fontSize: "1.7rem" }}>
                    CCS Comprehensive Profiling System
                  </h3>
                  <p
                    className="accent-text mb-3"
                    style={{ fontSize: "1.1rem" }}>
                    School Project · Full-Stack Development
                  </p>
                  <p>
                    A centralized university department profiling system built
                    to securely manage student and faculty records. It features
                    role-based access control, streamlined data organization,
                    and a responsive administrative dashboard to support
                    academic operations.
                  </p>
                  <div>
                    {/* Tech Stack (MERN + Bootstrap) */}
                    <div className="d-flex flex-wrap gap-2 mt-3">
                      <span
                        className="skill-tag"
                        style={{
                          background: "var(--card-bg)",
                          padding: "0.3rem 1rem",
                          fontSize: "0.8rem",
                        }}>
                        <i className="fa-solid fa-database me-1"></i> MongoDB
                      </span>
                      <span
                        className="skill-tag"
                        style={{
                          background: "var(--card-bg)",
                          padding: "0.3rem 1rem",
                          fontSize: "0.8rem",
                        }}>
                        <i className="fa-solid fa-server me-1"></i> Express.js
                      </span>
                      <span
                        className="skill-tag"
                        style={{
                          background: "var(--card-bg)",
                          padding: "0.3rem 1rem",
                          fontSize: "0.8rem",
                        }}>
                        <i className="fa-brands fa-react me-1"></i> React
                      </span>
                      <span
                        className="skill-tag"
                        style={{
                          background: "var(--card-bg)",
                          padding: "0.3rem 1rem",
                          fontSize: "0.8rem",
                        }}>
                        <i className="fa-brands fa-node-js me-1"></i> Node.js
                      </span>
                      <span
                        className="skill-tag"
                        style={{
                          background: "var(--card-bg)",
                          padding: "0.3rem 1rem",
                          fontSize: "0.8rem",
                        }}>
                        <i className="fa-brands fa-bootstrap me-1"></i>{" "}
                        Bootstrap
                      </span>
                    </div>

                    {/* Live Site Button Aligned Right */}
                    <div className="d-flex justify-content-end mt-4">
                      <a
                        href="https://ccs-cps-beta.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-retro"
                        style={{ fontSize: "0.9rem" }}>
                        <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>{" "}
                        View Live Site
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ACHIEVEMENTS & MILESTONES ── */}
        <section id="achievements" className="mb-5 pb-5">
          <div
            className="sticker-card p-4 p-md-5"
            style={{ background: "var(--green-sage)" }}>
            <h2
              className="mb-4 text-center text-md-start"
              style={{ fontSize: "2.2rem" }}>
              <i className="fa-solid fa-trophy me-2"></i> Milestones &
              Certifications
            </h2>

            <div className="d-flex flex-column gap-3">
              <div
                className="d-flex flex-column flex-md-row align-items-md-center gap-3 p-3 p-md-4 rounded-3"
                style={{
                  background: "var(--card-bg)",
                  border: "3px solid var(--text-main)",
                }}>
                <div
                  className="d-inline-flex justify-content-center align-items-center fw-bold rounded-circle"
                  style={{
                    background: "var(--pink-pastel)",
                    width: "60px",
                    height: "60px",
                    border: "2px solid var(--text-main)",
                    flexShrink: 0,
                  }}>
                  2026
                </div>
                <div>
                  <h4 className="mb-1" style={{ fontSize: "1.1rem" }}>
                    Deployed I-AIMS Auditing System
                  </h4>
                  <p className="mb-0 text-soft" style={{ fontSize: "0.95rem" }}>
                    Took Nidec's internal auditing system from development to a
                    live production deployment during a 3-month internship.
                  </p>
                </div>
              </div>

              <div
                className="d-flex flex-column flex-md-row align-items-md-center gap-3 p-3 p-md-4 rounded-3"
                style={{
                  background: "var(--card-bg)",
                  border: "3px solid var(--text-main)",
                }}>
                <div
                  className="d-inline-flex justify-content-center align-items-center fw-bold rounded-circle"
                  style={{
                    background: "var(--yellow-butter)",
                    width: "60px",
                    height: "60px",
                    border: "2px solid var(--text-main)",
                    flexShrink: 0,
                  }}>
                  2026
                </div>
                <div>
                  <h4 className="mb-1" style={{ fontSize: "1.1rem" }}>
                    Iskolar ng Laguna Merit Scholar
                  </h4>
                  <p className="mb-0 text-soft" style={{ fontSize: "0.95rem" }}>
                    Passed competitive examinations to secure the provincial
                    scholarship grant.
                  </p>
                </div>
              </div>

              <div
                className="d-flex flex-column flex-md-row align-items-md-center gap-3 p-3 p-md-4 rounded-3"
                style={{
                  background: "var(--card-bg)",
                  border: "3px solid var(--text-main)",
                }}>
                <div
                  className="d-inline-flex justify-content-center align-items-center fw-bold rounded-circle"
                  style={{
                    background: "var(--pink-pastel)",
                    width: "60px",
                    height: "60px",
                    border: "2px solid var(--text-main)",
                    flexShrink: 0,
                  }}>
                  ×3
                </div>
                <div>
                  <h4 className="mb-1" style={{ fontSize: "1.1rem" }}>
                    Industry Certifications
                  </h4>
                  <p className="mb-0 text-soft" style={{ fontSize: "0.95rem" }}>
                    JavaScript Essentials 1 & 2 (Cisco NetAcad) and Google
                    Analytics Certification (Google Skillshop).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CAREER JOURNEY TIMELINE ── */}
        <section id="experience" className="mb-5 pb-5">
          <p className="section-eyebrow text-center mb-2">Timeline</p>
          <h2 className="text-center mb-5" style={{ fontSize: "2.8rem" }}>
            My Journey So Far
          </h2>

          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="d-flex flex-column gap-4">
                {/* Timeline Item 1 (Now) */}
                <div
                  className="sticker-card p-4 d-flex gap-4 align-items-start"
                  style={{ background: "var(--card-bg)" }}>
                  <div
                    className="d-none d-md-flex justify-content-center align-items-center fw-bold rounded-circle"
                    style={{
                      background: "var(--pink-pastel)",
                      width: "70px",
                      height: "70px",
                      border: "3px solid var(--text-main)",
                      flexShrink: 0,
                    }}>
                    Now
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ fontSize: "1.4rem" }}>
                      Full-Stack Developer
                    </h3>
                    <p
                      className="accent-text mb-2"
                      style={{ fontSize: "1.1rem" }}>
                      Seeking New Opportunities
                    </p>
                    <p className="mb-0 text-soft">
                      Fresh IT graduate ready to bring hands-on experience in
                      full-stack development, database design, and systems
                      auditing to a team that builds real things.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 2 (Nidec Internship) */}
                <div
                  className="sticker-card p-4 d-flex gap-4 align-items-start"
                  style={{ background: "var(--yellow-butter)" }}>
                  <div
                    className="d-none d-md-flex justify-content-center align-items-center fw-bold rounded-circle"
                    style={{
                      background: "var(--card-bg)",
                      width: "70px",
                      height: "70px",
                      border: "3px solid var(--text-main)",
                      flexShrink: 0,
                    }}>
                    '26
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ fontSize: "1.4rem" }}>
                      Full-Stack IT Intern
                    </h3>
                    <p
                      className="accent-text mb-2"
                      style={{ fontSize: "1.1rem" }}>
                      Nidec Philippines Corporation · Feb – May 2026
                    </p>
                    <p className="mb-0 text-soft">
                      Built and deployed a full-stack Internal Auditing
                      Management System — from MySQL schema design supporting
                      160+ audit checksheets to role-based dashboards and
                      PDF/Excel reporting.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 3 (Degree) */}
                <div
                  className="sticker-card p-4 d-flex gap-4 align-items-start"
                  style={{ background: "var(--green-sage)" }}>
                  <div
                    className="d-none d-md-flex justify-content-center align-items-center fw-bold rounded-circle"
                    style={{
                      background: "var(--card-bg)",
                      width: "70px",
                      height: "70px",
                      border: "3px solid var(--text-main)",
                      flexShrink: 0,
                    }}>
                    '26
                  </div>
                  <div>
                    <h3 className="mb-1 fw-bold" style={{ fontSize: "1.4rem" }}>
                      BS Information Technology
                    </h3>
                    <p
                      className="accent-text mb-2"
                      style={{ fontSize: "1.1rem" }}>
                      University of Cabuyao
                    </p>
                    <p className="mb-0 text-soft">
                      Graduated with a focus on web technologies, systems
                      development, and data analytics. Iskolar ng Laguna merit
                      scholarship recipient.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 4 (Early experience) */}
                <div
                  className="sticker-card p-4 d-flex gap-4 align-items-start opacity-75"
                  style={{ background: "var(--card-bg)" }}>
                  <div
                    className="d-none d-md-flex justify-content-center align-items-center fw-bold rounded-circle"
                    style={{
                      background: "var(--grid-line)",
                      width: "70px",
                      height: "70px",
                      border: "3px dashed var(--text-main)",
                      flexShrink: 0,
                    }}>
                    Past
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ fontSize: "1.25rem" }}>
                      Data Encoder & Clerk Assistant
                    </h3>
                    <p
                      className="accent-text mb-2"
                      style={{ fontSize: "1rem" }}>
                      Barangay Health Center · 2023 – 2025
                    </p>
                    <p
                      className="mb-0 text-soft"
                      style={{ fontSize: "0.9rem" }}>
                      Handled medicine inventory records, resident intake data,
                      and official document processing — encoding high volumes
                      of sensitive information with zero entry errors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── LET'S CONNECT (CONTACT SECTION) ── */}
        <section id="contact" className="mb-4">
          <div
            className="sticker-card p-4 p-md-5 text-center"
            style={{ background: "var(--pink-pastel)" }}>
            <h2
              className="mb-3"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>
              <i className="fa-solid fa-rocket me-2"></i> Let's Build Something!
            </h2>
            <p className="fw-bold mb-2" style={{ fontSize: "1.15rem" }}>
              Got a system to develop or just want to say hello? My inbox is
              always open.
            </p>
            <p className="text-soft mb-5">
              Sta. Rosa City, Laguna, Philippines
            </p>

            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a
                href="mailto:carinagajessa18@gmail.com"
                className="btn-retro"
                style={{ background: "var(--card-bg)", fontSize: "1.1rem" }}>
                <i className="fa-solid fa-envelope me-2"></i> Email Me
              </a>
              <a
                href="https://github.com/esang222"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-retro secondary"
                style={{ fontSize: "1.1rem" }}>
                <i className="fa-brands fa-github me-2"></i> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jessa-cariñaga-b8a670354/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-retro"
                style={{
                  background: "var(--yellow-butter)",
                  fontSize: "1.1rem",
                }}>
                <i className="fa-brands fa-linkedin me-2"></i> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;