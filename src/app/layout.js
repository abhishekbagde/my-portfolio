"use client"; // Mark this as a Client Component

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './globals.css';
import Footer from '../components/Footer'; // Adjust the import as needed
import Link from 'next/link';
import { Particles } from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from 'react';
import { usePathname } from 'next/navigation';

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Abhishek Bagde&apos;s Portfolio</title>
      </head>
      <body className={`d-flex flex-column ${isHomePage ? 'home-page' : 'min-vh-100'}`}>
        {/* Particles Background - only render on home page */}
        {isHomePage && (
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              background: {
                color: { value: "#000000" },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: { enable: true, mode: "push" },
                  onHover: { enable: true, mode: "repulse" },
                  resize: true,
                },
                modes: {
                  push: { quantity: 4 },
                  repulse: { distance: 200, duration: 0.4 },
                },
              },
              particles: {
                color: { value: "#ffffff" },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: { default: "bounce" },
                  random: false,
                  speed: 2.5,
                  straight: false,
                },
                number: {
                  density: { enable: true, area: 800 },
                  value: 80,
                },
                opacity: { value: 0.5 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 5 } },
              },
              detectRetina: true,
            }}
          />
        )}

        {/* Bootstrap Navbar */}
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'scrolled' : ''}`}>
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" href="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/projects">Projects</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/experience">Experience</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/education">Education</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/skills">Skills</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className={`flex-grow-1 ${isHomePage ? 'home-main' : ''}`}>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
