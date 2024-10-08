"use client";
import Image from 'next/image';

const ExperienceItem = ({ logo, company, role, period, location, responsibilities }) => (
  <div className="experience-item card bg-dark text-white mb-4 animate-content">
    <div className="card-body">
      <div className="d-flex align-items-center mb-3">
        <div className="company-logo-container me-3">
          {logo ? (
            <Image 
              src={logo} 
              alt={`${company} logo`} 
              layout="fill"
              objectFit="contain"
              className="company-logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/default-logo.png";
              }}
            />
          ) : (
            <div className="default-logo">{company[0]}</div>
          )}
        </div>
        <div>
          <h3 className="card-title mb-0">{role}</h3>
          <h4 className="card-subtitle">{company}</h4>
          <p className="card-text"><small>{period} | {location}</small></p>
        </div>
      </div>
      <ul className="list-unstyled">
        {responsibilities.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      logo: "/images/dxc-logo.png",
      company: "DXC Technology",
      role: "Technical Team Lead",
      period: "2022 - 2023",
      location: "Mumbai, India",
      responsibilities: [
        "Led cross-functional teams to manage core banking services, payment processing, and regulatory compliance, ensuring 99.9% uptime while addressing an average of 5 high-priority incidents daily.",
        "Designed and developed key banking modules, including transaction processing and fraud detection algorithm, using Python, Django, C#, .NET, Node.js, Express.js, AWS Lambda, RDS, and S3. This improved transaction speed by 30% and reduced fraud by 25%.",
        "Improved software quality by 20% through code optimization using SonarQube and improved front-end reliability by testing React.js components.",
        "Developed and executed project release plans, optimizing stakeholder communication and ensuring timely delivery of new features.",
        "Leveraged a full-stack approach with MERN technologies (MongoDB, Express.js, React.js, Node.js) integrated into the existing Python, Django, and C# systems to enhance both the customer experience and internal operations."
      ]
    },
    {
      logo: "/images/ibm-logo.png",
      company: "IBM",
      role: "Senior Software Developer",
      period: "2020 - 2022",
      location: "Bangalore, India",
      responsibilities: [
        "Architected and implemented a scalable microservices architecture for a critical billing system, utilizing Node.js and Express.js, which reduced processing time and increased system capacity.",
        "Developed robust backend systems with Python, Django, Node.js, AWS, and SQL, integrating legacy systems with cloud-based microservices. Integrated MongoDB for optimized storage and retrieval, improving database operations and system performance.",
        "Introduced DevOps practices, implementing Jenkins and Docker CI/CD pipelines, cutting deployment time by 60% and boosting release frequency from monthly to weekly.",
        "Built an automated testing framework, improving test coverage and reducing regression testing time, while enhancing React.js front-end and Node.js back-end reliability.",
        "Collaborated with Agile teams, mentored junior developers, and led knowledge-sharing on MERN stack and modern technologies."
      ]
    },
    {
      logo: "/images/persistent-logo.png",
      company: "Persistent Systems",
      role: "Software Developer",
      period: "2019 - 2020",
      location: "Nagpur, India",
      responsibilities: [
        "Implemented Gulp.js to optimize page loading times, designed a custom Chrome extension to streamline client operations, and developed PDF-linked registration processes to enhance data consistency and reduce manual effort.",
        "Developed and maintained web applications, including a Car Rental System and Global Rewards Platform, using React.js, Node.js, .NET, C#, JavaScript, HTML/CSS, and SQL. Designed RESTful APIs for seamless integration between front-end (React) and back-end (Node.js).",
        "Led SQL database optimization and integrated MongoDB for document-based storage, improving data processing and scalability.",
        "Used Azure App Insight and Power BI for performance monitoring and data visualization."
      ]
    }
  ];

  return (
    <section className="experience-section container my-5">
      <h2 className="text-center mb-4 animate-content animate-content-delay-1">Professional Experience</h2>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
