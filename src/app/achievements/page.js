"use client";
import React from "react";
import Image from "next/image";
import { FaTrophy, FaHackerrank, FaRocket, FaSun, FaGraduationCap } from "react-icons/fa";

const AwardsAndAchievements = () => {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: "Lenovo Recognition - BlindPad Project",
      description: "Won recognition from Lenovo India at the Entrepreneurship Summit 2016 for the \"BlindPad\" project, an innovative concept aimed at making technology more accessible to the visually impaired.",
      details: [
        "Presented \"BlindPad\" at the National Entrepreneurship Challenge (NEC) at IIT Bombay.",
        "The project demonstrated a commitment to social change by offering tools and empowerment to the visually impaired.",
        "This early achievement marked the beginning of my career in computer science and ignited my entrepreneurial spirit.",
        "The experience highlighted the importance of clear communication and marketing skills in entrepreneurship."
      ],
      link: "https://x.com/Lenovo_in/status/693683631097708544",
      image: "/images/achievement_1.png"
    },
    {
      icon: <FaGraduationCap />,
      title: "Master's Thesis: Advanced 3D Digitization Pipeline for Cultural Heritage",
      description: "Developed an innovative open-source photogrammetry pipeline for the digitization of cultural heritage artifacts at the John Rylands Library, University of Manchester.",
      details: [
        "Implemented advanced Structure-from-Motion (SfM) techniques and high-performance computing integration for efficient 3D model generation.",
        "Optimized the pipeline for batch processing in supercomputing environments, significantly improving processing efficiency.",
        "Developed a robust command-line interface (CLI) for streamlined workflow management of large-scale digitization tasks.",
        "Explored the potential of Neural Radiance Fields (NeRF) to enhance 3D reconstruction accuracy for complex geometries and lighting conditions.",
        "Contributed to the democratization of advanced 3D digitization technologies for cultural institutions."
      ],
      link: "https://github.com/abhishekbagde/NeRO_UoM",
      image: "/images/UoM-thesis.png"
    },
    {
      icon: <FaHackerrank />,
      title: "Manchester StudentHack 2024",
      description: "Participated in a 24-hour coding event, developing two innovative projects:",
      image: "/images/hackathon_1.jpeg",
      projects: [
        {
          icon: <FaRocket />,
          name: "Celestial Escapes",
          description: "A space journey booking website offering detailed information on various space expeditions.",
          technologies: "Django, HTML, CSS, Python, SQLite",
          link: "https://devpost.com/software/celestial-escapes"
        },
        {
          icon: <FaSun />,
          name: "Solar Tales",
          description: "An educational website that offers engaging stories about the solar system for elementary school students.",
          technologies: "HTML, CSS, JavaScript",
          link: "https://devpost.com/software/solar-tales"
        }
      ]
    }
  ];

  return (
    <section className="awards-achievements-section container my-5">
      <h2 className="text-center mb-5 animate-content animate-content-delay-1">Awards and Achievements</h2>
      <div className="row justify-content-center">
        {achievements.map((achievement, index) => (
          <div key={index} className="col-lg-6 mb-4">
            <div className="card bg-dark text-white h-100 animate-content animate-content-delay-2">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <span className="achievement-icon me-3">{achievement.icon}</span>
                  <h3 className="card-title mb-0">{achievement.title}</h3>
                </div>
                <div className="achievement-image-container mb-3">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    width={500}
                    height={300}
                    layout="responsive"
                    objectFit="cover"
                    className="achievement-image"
                  />
                </div>
                <p className="card-text">{achievement.description}</p>
                {achievement.details && (
                  <ul className="achievement-details mt-3">
                    {achievement.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="mb-2">{detail}</li>
                    ))}
                  </ul>
                )}
                {achievement.link && (
                  <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mt-3">Learn More</a>
                )}
                {achievement.projects && (
                  <div className="mt-4">
                    <h4 className="mb-3">Projects:</h4>
                    {achievement.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="card bg-secondary mb-3">
                        <div className="card-body">
                          <h5 className="card-title d-flex align-items-center">
                            <span className="project-icon me-2">{project.icon}</span>
                            {project.name}
                          </h5>
                          <p className="card-text">{project.description}</p>
                          <p className="card-text"><small>Technologies: {project.technologies}</small></p>
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm">View Project</a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsAndAchievements;