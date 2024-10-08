import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">© 2023 Abhishek Bagde. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="https://github.com/abhishekbagde" target="_blank" rel="noopener noreferrer" className="me-3">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/abhishekbagde75/" target="_blank" rel="noopener noreferrer" className="me-3">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/im_abhiiiiiiii/" target="_blank" rel="noopener noreferrer" className="me-3">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/im-abhiiiiiii/" target="_blank" rel="noopener noreferrer" className="me-3">
              <FaLinkedin />
            </a>
            <a href="mailto:abhishek.antaram.bagde@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;