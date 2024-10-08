"use client";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    // This is to fix an issue with the Leaflet icon
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
      iconUrl: require('leaflet/dist/images/marker-icon.png').default,
      shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
    });
  }, []);

  return (
    <section className="contact-section container my-5">
      <h2 className="text-center mb-5 animate-content animate-content-delay-1">Get in Touch</h2>
      <div className="row justify-content-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="card bg-dark text-white h-100 animate-content animate-content-delay-2">
            <div className="card-body d-flex flex-column">
              <h3 className="card-title text-center mb-4">Contact Information</h3>
              <div className="contact-info flex-grow-1">
                <div className="d-flex align-items-center mb-3">
                  <FaEnvelope className="me-3 contact-icon" />
                  <a href="mailto:abhishek.antaram.bagde@gmail.com" className="contact-link">abhishek.antaram.bagde@gmail.com</a>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <FaPhone className="me-3 contact-icon" />
                  <a href="tel:+447774984212" className="contact-link">+44 (777) 4984-212</a>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <FaLinkedin className="me-3 contact-icon" />
                  <a href="https://www.linkedin.com/in/im-abhiiiiiii/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn Profile</a>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <FaGithub className="me-3 contact-icon" />
                  <a href="https://github.com/abhishekbagde" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub Profile</a>
                </div>
                <div className="d-flex align-items-center">
                  <FaMapMarkerAlt className="me-3 contact-icon" />
                  <span>Manchester, United Kingdom</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card bg-dark text-white h-100 animate-content animate-content-delay-3">
            <div className="card-body d-flex flex-column">
              <h3 className="card-title text-center mb-4">Location</h3>
              <div className="flex-grow-1" style={{ height: '300px' }}>
                <MapContainer center={[53.4808, -2.2426]} zoom={13} style={{ height: '100%', width: '100%' }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={[53.4808, -2.2426]}>
                    <Popup>
                      Manchester, UK
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;