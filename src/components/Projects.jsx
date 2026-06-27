import "../styles/projects.css";

import envirocool from "../assets/images/envirocool.png";
import iaims from "../assets/images/nidec.png";
import ccscps from "../assets/images/CCS-CPS.png";
import sanrio from "../assets/images/sanrio.png";

function Projects() {
  const projects = [
    {
      title: "Internal Audit Insights Module System",
      image: iaims,
      category: "Internship Project",
      role: "Full Stack Web Developer",
      stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
      description:
        "A web-based internal auditing management system developed during my internship at Nidec Philippines Corporation. The system was successfully deployed on the company's internal server and is used within the organization to streamline audit workflows, compliance monitoring, reporting, and user management.",
      features: [
        "Role-Based Authentication",
        "Audit Dashboard",
        "Audit Checksheet Management",
        "PDF & Excel Report Generation",
        "Audit Archive",
        "Compliance Monitoring",
      ],
      status: {
        title: "Internal Production System",
        text: "Successfully deployed on the company's internal server and actively used within the organization's network. The source code and live deployment are not publicly accessible due to company confidentiality.",
      },
    },

    {
      title: "Envirocool Delivery Tracking System",
      image: envirocool,
      category: "Thesis Project",
      role: "Full Stack Developer",
      stack: ["React", "Bootstrap", "PHP", "MySQL"],
      description:
        "A role-based delivery management system developed for Envirocool that streamlines order processing, driver assignment, customer notifications, and delivery analytics.",
      features: [
        "GPS Tracking",
        "SMS Notifications",
        "PDF Reports",
        "Delivery Analytics",
        "Customer Feedback",
        "Receipt Generation",
      ],
      status: {
        title: "Confidential Client Project",
        text: "Developed as an academic thesis for a company and intended exclusively for authorized administrators and employees. The source code and live deployment are not publicly available due to project confidentiality.",
      },
    },

    {
      title: "CCS Comprehensive Profiling System",
      image: ccscps,
      category: "Academic Project",
      role: "Full Stack Developer",

      stack: ["MongoDB", "Express.js", "React", "Node.js", "Bootstrap"],

      description:
        "A comprehensive MERN-based profiling and information management system developed for the university department. The platform centralizes student, faculty, alumni, and organizational records while providing an intuitive interface for managing departmental information efficiently.",

      features: [
        "Student & Faculty Profiles",
        "Role-Based Authentication",
        "Department Records Management",
        "Advanced Search & Filtering",
        "CRUD Operations",
        "Responsive Dashboard",
      ],

      github: "https://github.com/arac880/ccs-comprehensive-profiling",
      demo: "https://ccs-cps-beta.vercel.app/login",
      internal: false,
    },

    {
      title: "Sanrio E-Commerce Website",
      image: sanrio,
      category: "Frontend Design Project",
      role: "Frontend Developer",

      stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],

      description:
        "A responsive e-commerce website concept inspired by the Sanrio brand, developed to showcase modern UI/UX design principles. The project focuses on creating an engaging shopping experience through clean layouts, intuitive navigation, and visually appealing interfaces with basic frontend interactions.",

      features: [
        "Responsive Layout",
        "Product Showcase",
        "Interactive Navigation",
        "Shopping Cart UI",
        "Product Detail Pages",
        "Modern UI/UX Design",
      ],

      github: "https://github.com/esang222/sanrio",
      demo: "https://6820588de296b81face2a703--sanrio-collections.netlify.app/",
      internal: false,
    },
  ];

  return (
    <section id="projects">
      <div className="container-custom">
        <div className="section-title">
          <span>Projects</span>

          <h2>Featured Work</h2>

          <p>
            Some of the projects I've built throughout my academic journey,
            internship, and personal development.
          </p>
        </div>

        <div className="projects-wrapper">
          {projects.map((project, index) => (
            <article className="project-card glass" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <div className="project-header">
                  <span>{project.category}</span>

                  <h3>{project.title}</h3>
                </div>

                <p className="project-role">
                  <strong>Role:</strong> {project.role}
                </p>

                <p>{project.description}</p>

                <div className="project-stack">
                  {project.stack.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <div className="feature-list">
                  {project.features.map((feature, i) => (
                    <div key={i}>
                      <i className="bi bi-check-circle-fill"></i>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="project-buttons">
                  {project.status ? (
                    <div className="project-status">
                      <i className="bi bi-shield-lock-fill"></i>

                      <div>
                        <h5>{project.status.title}</h5>

                        <p>{project.status.text}</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-btn">
                        <i className="bi bi-github"></i>
                        GitHub
                      </a>

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-btn">
                        <i className="bi bi-eye"></i>
                        View Project
                      </a>
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
