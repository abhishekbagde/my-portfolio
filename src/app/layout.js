"use client"; // Mark this as a Client Component

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './globals.css';
import Footer from '../components/Footer'; // Adjust the import as needed
import Link from 'next/link';
import Script from 'next/script';
import { useCallback } from 'react';
import { usePathname } from 'next/navigation';

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [vantaEffect, setVantaEffect] = useState(null);
  
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    // Load Bootstrap JS
    require('bootstrap/dist/js/bootstrap.bundle.min.js');

    // Initialize Vanta.js Birds effect
    if (!vantaEffect && typeof window !== 'undefined') {
      // We'll initialize it when both scripts are loaded
      const initVanta = () => {
        if (window.VANTA && window.THREE) {
          setVantaEffect(
            window.VANTA.BIRDS({
              el: '#vanta-background',
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              backgroundColor: 0x120824, // Deeper dark purple background
              color1: 0xd99c93, // More subtle mid purple
              color2: 0x520a8c, // Deeper purple
              colorMode: 'lerpGradient',
              birdSize: 1, // Slightly smaller birds
              wingSpan: 40.00, // Smaller wingspan for subtlety
              speedLimit: 5, // Slower movement for elegance
              separation: 20,
              alignment: 22,
              cohesion: 22,
              quantity: 4 // Even fewer birds for a clean look
            })
          );
        }
      };

      // Check if VANTA and THREE are already loaded
      if (window.VANTA && window.THREE) {
        initVanta();
      }
      // Otherwise wait for script load
      else {
        window.initVantaBirds = initVanta;
      }
    }

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('scroll', handleScroll);
      // Clean up Vanta effect when component unmounts
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [scrolled, vantaEffect]);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Abhishek Bagde&apos;s Portfolio</title>
      </head>
      <body className="d-flex flex-column min-vh-100 position-relative">
        {/* Required scripts for Vanta.js Birds effect */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
          strategy="beforeInteractive"
          onLoad={() => {
            if (window.VANTA && typeof window.initVantaBirds === 'function') {
              window.initVantaBirds();
            }
          }}
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"
          strategy="beforeInteractive"
          onLoad={() => {
            if (window.THREE && typeof window.initVantaBirds === 'function') {
              window.initVantaBirds();
            }
          }}
        />
        
        {/* Vanta Background Container */}
        <div id="vanta-background" className="vanta-background"></div>

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
                  <Link className="nav-link" href="/achievements">Achievements</Link>
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
