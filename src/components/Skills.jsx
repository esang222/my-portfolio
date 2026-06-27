import React from 'react';

const Skills = () => {
  const categories = [
    { title: "Frontend", icon: "bi-window-sidebar", skills: ["React.js", "Vue.js", "JavaScript", "HTML5/CSS", "Bootstrap", "Figma"] },
    { title: "Backend", icon: "bi-server", skills: ["PHP", "Node.js", "Express.js", "REST APIs"] },
    { title: "Database & Tools", icon: "bi-database", skills: ["MySQL", "MongoDB", "Git/GitHub", "Postman", "XAMPP"] }
  ];

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
           <h2 className="fw-bolder display-6">Technical <span className="text-gradient">Arsenal.</span></h2>
        </div>
        <div className="row g-4">
          {categories.map((cat, idx) => (
            <div className="col-lg-4" key={idx}>
              <div className="premium-card p-5">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="p-3 bg-light rounded-circle text-dark">
                    <i className={`bi ${cat.icon} fs-4`}></i>
                  </div>
                  <h4 className="fw-bold mb-0">{cat.title}</h4>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="badge bg-white text-dark border shadow-sm py-2 px-3 fw-medium rounded-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;