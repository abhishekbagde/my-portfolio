import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <section id="footer" className="footer-section">
      <footer className="footer">
          <div className="footer-left">@2024 Abhishek.</div>
          <div className="footer-right">
            <a href="https://www.facebook.com/abhishekbagde75/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/im_abhiiiiiiii/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/im-abhiiiiiii/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/abhishekbagde" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </footer>
    </section>
  );
};

export default Footer;