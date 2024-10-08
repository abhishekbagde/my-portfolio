"use client";
import { FaAws, FaMicrosoft, FaPython } from 'react-icons/fa';

const SkillCategory = ({ title, skills }) => (
  <div className="skill-category mb-4 animate-content">
    <h3 className="mb-3">{title}</h3>
    <div className="d-flex flex-wrap">
      {skills.map((skill, index) => (
        <span key={index} className="skill-badge me-2 mb-2">{skill}</span>
      ))}
    </div>
  </div>
);

const Certification = ({ title, icon }) => (
  <div className="certification-item d-flex align-items-center mb-3 animate-content">
    {icon}
    <span className="ms-2">{title}</span>
  </div>
);

const SkillsAndCertifications = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["Python", "Django", "Flask", "C#", ".NET", "JavaScript", "React", "Node.js", "Express.js", "LaTeX", "Machine Learning", "Computer Vision", "Natural Language Processing", "SQL", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Cloud & Web Development",
      skills: ["Docker", "Kubernetes", "Jenkins", "Git", "Terraform", "AWS Services", "HTML", "CSS", "Bootstrap", "jQuery", "RESTful APIs", "Postman", "XML", "JSON", "Power BI"]
    },
    {
      title: "Project Management & Processes",
      skills: ["Agile methodology", "Software development life-cycle (SDLC)", "Requirements gathering", "Incident management", "Release management", "Automation", "Code analysis", "Testing", "Security", "Leadership", "Collaboration", "Communication"]
    }
  ];

  const certifications = [
    { title: "AWS Certified Developer Associate", icon: <FaAws size={24} /> },
    { title: "AWS Certified Cloud Practitioner", icon: <FaAws size={24} /> },
    { title: "Microsoft Certified Azure Fundamentals", icon: <FaMicrosoft size={24} /> },
    { title: "Coursera: Machine Learning with Python", icon: <FaPython size={24} /> }
  ];

  return (
    <section className="skills-certifications-section container my-5">
      <h2 className="text-center mb-5 animate-content animate-content-delay-1">Skills & Certifications</h2>
      
      <div className="row">
        <div className="col-lg-8">
          <h2 className="mb-4 animate-content animate-content-delay-2">Technical Skills</h2>
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} title={category.title} skills={category.skills} />
          ))}
        </div>
        
        <div className="col-lg-4">
          <h2 className="mb-4 animate-content animate-content-delay-2">Certifications</h2>
          <div className="card bg-dark text-white animate-content animate-content-delay-3">
            <div className="card-body">
              {certifications.map((cert, index) => (
                <Certification key={index} title={cert.title} icon={cert.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndCertifications;
