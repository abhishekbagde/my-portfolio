import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="footer-text">
              © {new Date().getFullYear()} Abhishek Bagde
            </p>
          </div>
          <div className="col-md-6 text-md-end social-icons">
            <a href="https://github.com/abhishekbagde" target="_blank" rel="noopener noreferrer" className="me-3" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/im-abhiiiiiii/" target="_blank" rel="noopener noreferrer" className="me-3" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:abhishek.antaram.bagde@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;