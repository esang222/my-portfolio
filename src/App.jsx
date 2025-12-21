import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Carousel } from "react-bootstrap";
import Sanrio from "./assets/sanrio.png";
import Sanrio2 from "./assets/sanrio2.png";
import Sanrio3 from "./assets/sanrio3.png";
import Envirocool from "./assets/envirocool.png";
import IdPic from "./assets/id-pic.jpg";
import Navbar from "./Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }
  }, [darkMode]);

  return (
    <div id="home" className={darkMode ? "darkmode" : ""}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="content m-4">
        <section className="hero-section d-flex justify-content-between align-items-center m-5 p-5 mx-auto">
          <div className="intro-text w-50">
            <h2 className="fw-bold fs-1">
              Hi, I am <span className="text-primary">Jessa Cariñaga</span>!
            </h2>
            <h6 className="text-muted fw-bold mt-2">Tagline</h6>
            <a href="#" className="download btn btn-link p-0 mt-5">
              Download CV
            </a>
          </div>

          <div className="image-box d-flex align-items-center justify-content-center">
            <img
              src={IdPic}
              alt="Formal Picture"
              className="img-fluid rounded"
            />
          </div>
        </section>

        <h1 className="text-center">ABOUT ME</h1>
        <section id="about" className="about p-4 mx-auto shadow-sm">
          <p className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt,
            sed vitae et inventore voluptate maxime, dolore aliquid, deserunt
            nobis repellendus nisi a enim distinctio necessitatibus vel hic
            harum! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Eius qui, vero blanditiis, ipsum fugit corrupti deserunt officia
            consequuntur dicta harum, perferendis repellendus unde tempore
            minima. Repudiandae fugiat consequuntur temporibus culpa? Id,
            cumque.
          </p>
        </section>

        <h1 className="text-center">MY SKILLS</h1>
        <section id="works" className="mx-auto">
          <div className="d-flex flex-wrap gap-4 justify-content-center">
            <span className="skills d-flex align-items-center justify-content-center">
              HTML
            </span>
            <span className="skills outline d-flex align-items-center justify-content-center">
              CSS
            </span>
            <span className="skills d-flex align-items-center justify-content-center">
              Javascript
            </span>
            <span className="skills outline d-flex align-items-center justify-content-center">
              ReactJS
            </span>
            <span className="skills d-flex align-items-center justify-content-center">
              VueJS
            </span>
            <span className="skills outline d-flex align-items-center justify-content-center">
              NodeJS
            </span>
            <span className="skills d-flex align-items-center justify-content-center">
              PHP
            </span>
            <span className="skills outline d-flex align-items-center justify-content-center">
              MySQL
            </span>
          </div>
        </section>

        <h1 className="text-center">MY PROJECTS</h1>
        <section className="projects-carousel mt-4 px-3">
          <div className="row g-5">
            <div className="col-md-6">
              <div className="project-carousel-card">
                <h3 className="text-center mb-4">
                  Sanrio Collections E-Commerce (Front-End Only)
                </h3>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 project-carousel-img"
                      src={Sanrio}
                      alt="Sanrio Screenshot 1"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 project-carousel-img"
                      src={Sanrio2}
                      alt="Sanrio Screenshot 2"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 project-carousel-img"
                      src={Sanrio3}
                      alt="Sanrio Screenshot 3"
                    />
                  </Carousel.Item>
                </Carousel>
                <div className="text-center mt-3">
                  <a
                    href="https://6820588de296b81face2a703--sanrio-collections.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-view"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>

            {/* Second Project */}
            <div className="col-md-6">
              <div className="project-carousel-card">
                <h3 className="text-center mb-4">
                  Delivery Tracking System with Data Analytics for Envirocool
                  Corporation
                </h3>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 project-carousel-img"
                      src={Envirocool}
                      alt="Sanrio Screenshot 1"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 project-carousel-img"
                      src={Envirocool}
                      alt="Sanrio Screenshot 2"
                    />
                  </Carousel.Item>
                </Carousel>
                <div className="text-center mt-3">
                  <a
                    href="https://envirocool-delivery-tracking-web.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-view"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="text-center p-4">
          © {new Date().getFullYear()} Jessa Cariñaga. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
