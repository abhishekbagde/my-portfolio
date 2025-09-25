import React, { useState, useEffect } from 'react';
import { FaCode, FaLaptopCode, FaServer } from 'react-icons/fa';

const Home = () => {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Abhishek Bagde";
  const roles = ['Software Engineer', 'Cloud Developer', 'Full-Stack Developer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const icons = [<FaCode key="code" />, <FaLaptopCode key="laptop" />, <FaServer key="server" />];

  // Typing effect for the name
  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [text]);

  // Role changing effect
  useEffect(() => {
    if (isTypingComplete) {
      const interval = setInterval(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isTypingComplete, roles.length]);

  useEffect(() => {
    setCurrentRole(roles[currentRoleIndex]);
  }, [currentRoleIndex, roles]);

  return (
    <section className="home-section">
      <div className="content text-center">
        <div className="typing-container">
          <h1 className="typing-text">{text}<span className="cursor"></span></h1>
        </div>
        <div className={`role-container ${isTypingComplete ? 'fade-in' : ''}`}>
          <div className="d-flex align-items-center justify-content-center">
            <span className="role-icon me-2">{icons[currentRoleIndex]}</span>
            <h3 className="role-text">{currentRole}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
