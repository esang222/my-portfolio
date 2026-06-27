import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact">
      <div className="container-custom">
        <div className="contact-card glass">
          <h2>Let's Build Something Together</h2>

          <p>
            I'm currently open to entry-level opportunities and
            freelance projects. Feel free to reach out if you'd like to
            collaborate or simply have a conversation.
          </p>

          <div className="contact-links">
            <a href="mailto:carinagajessa18@gmail.com" className="primary-btn">
              <i className="bi bi-envelope-fill"></i>
              Email Me
            </a>

            <a
              href="https://github.com/esang222"
              target="_blank"
              className="secondary-btn">
              <i className="bi bi-github"></i>
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jessa-carinaga/"
              target="_blank"
              className="secondary-btn">
              <i className="bi bi-linkedin"></i>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
