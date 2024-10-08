"use client";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section container my-5">
      <h2 className="text-center mb-5 animate-content animate-content-delay-1">Contact Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card bg-dark text-white animate-content animate-content-delay-2">
            <div className="card-body">
              <h3 className="mb-4 text-center">Contact Information</h3>
              <div className="contact-info">
                <p className="mb-3">
                  <FaEnvelope className="me-2" />
                  <a href="mailto:abhishek.antaram.bagde@gmail.com">abhishek.antaram.bagde@gmail.com</a>
                </p>
                <p className="mb-3">
                  <FaPhone className="me-2" />
                  <a href="tel:+447774984212">+44 (777) 4984-212</a>
                </p>
                <p className="mb-3">
                  <FaLinkedin className="me-2" />
                  <a href="https://www.linkedin.com/in/im-abhiiiiiii/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                </p>
                <p className="mb-3">
                  <FaGithub className="me-2" />
                  <a href="https://github.com/abhishekbagde" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;