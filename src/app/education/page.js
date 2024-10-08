"use client";
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

const EducationItem = ({ degree, institution, period, courses }) => (
  <div className="education-item card bg-dark text-white mb-4 animate-content">
    <div className="card-body">
      <h3 className="card-title">
        <FaGraduationCap className="me-2" />
        {degree}
      </h3>
      <h4 className="card-subtitle mb-2">
        <FaUniversity className="me-2" />
        {institution}
      </h4>
      <p className="card-text"><small>{period}</small></p>
      <h5>Relevant Coursework:</h5>
      <ul className="list-unstyled">
        {courses.map((course, index) => (
          <li key={index} className="mb-1">{course}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Education = () => {
  const educationData = [
    {
      degree: "Master of Advanced Computer Science",
      institution: "University of Manchester",
      period: "2023 - 2024",
      courses: [
        "Machine Learning",
        "Representation Learning",
        "Natural Language Processing",
        "Robotics and Image Processing",
        "Modeling and Querying Data on Web"
      ]
    },
    {
      degree: "Bachelor of Computer Science and Engineering",
      institution: "Nagpur University",
      period: "2015 - 2019",
      courses: [
        "Data Structures and Program Design",
        "Advanced Web Programming",
        "Theory of Computation",
        "Design & Analysis of Algorithms",
        "Operating Systems",
        "Computer Networks",
        "DBMS",
        "Computer Organization"
      ]
    }
  ];

  return (
    <section className="education-section container my-5">
      <h2 className="text-center mb-5 animate-content animate-content-delay-1">Education</h2>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {educationData.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
