import "../styles/footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container-custom">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Jessa Cariñaga</h3>

            <p>
              Information Technology Graduate passionate about developing
              modern, responsive, and user-friendly web applications.
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>

            <a href="#about">About</a>

            <a href="#projects">Projects</a>

            <a href="#contact">Contact</a>
          </div>

          <div className="footer-socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <i className="bi bi-github"></i>
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>

            <a href="mailto:carinagajessa18@gmail.com">
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Jessa Cariñaga. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
