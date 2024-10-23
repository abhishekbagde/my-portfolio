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
      role: "Software Engineer",
      period: "2022 - 2023",
      location: "Mumbai, India",
      responsibilities: [
        "Led cross-functional onsite and offshore teams in managing critical banking services, including core banking systems, payment processing, and regulatory compliance modules. Orchestrated daily operations addressing an average of 5 high-priority incidents, resulting in 99.9% uptime for essential banking services.",
        "Architected and developed key banking modules, including a transaction processing system and a fraud detection algorithm, utilizing Python, Django, C#, Node.js, and Express.js, alongside AWS Lambda, RDS, and S3. The integration of modern web technologies, including React.js for customer-facing interfaces, resulted in a 30% increase in transaction speed and a 25% reduction in fraudulent activities.",
        "Improved software quality, performance, and reliability by 20% through code optimization using SonarQube and introduced testing for React.js components to improve front-end reliability. Developed and executed project release plans, streamlining processes, enhancing stakeholder communication, and closely monitoring project status. Utilized MongoDB for optimizing database performance, ensuring efficient data handling for banking operations.",
        "Leveraged a full-stack approach with MERN technologies (MongoDB, Express.js, React.js, Node.js) integrated into the existing Python, Django, and C# systems to enhance both the customer experience and internal operations."
      ]
    },
    {
      logo: "/images/ibm-logo.png",
      company: "IBM",
      role: "Application Developer",
      period: "2020 - 2022",
      location: "Bangalore, India",
      responsibilities: [
        "Architected and implemented a high-performance, scalable microservices architecture for a mission-critical billing system, utilizing Node.js and Express.js for key microservices, resulting in reduced processing time and increased system capacity.",
        "Engineered robust and scalable backend systems with a diverse tech stack, including Python, Django, Node.js, AWS services, SQL, and Mainframe, seamlessly integrating legacy systems with modern cloud-based solutions and microservices. Integrated MongoDB into the billing system for optimized data storage and retrieval, enabling faster, scalable database operations, and improving overall system performance.",
        "Pioneered the adoption of DevOps practices, implementing CI/CD pipelines using Jenkins and Docker that reduced deployment time by 60% and increased release frequency from monthly to weekly cycles.",
        "Developed and implemented an automated testing framework that increased test coverage, including testing for React.js front-end components and Node.js back-end services, reducing regression testing time and significantly improving software quality and reliability. Collaborated with cross-functional Agile teams in delivering complex features, mentored junior developers, and facilitated knowledge-sharing sessions on full-stack development using MERN stack and other modern technologies."
      ]
    },
    {
      logo: "/images/persistent-logo.png",
      company: "Persistent Systems",
      role: "Project Engineer",
      period: "2019 - 2020",
      location: "Nagpur, India",
      responsibilities: [
        "Introduced Gulp.js technology to significantly optimize page loading times, designed a custom Chrome extension to streamline client-side operations, and engineered PDF-linked registration and integration processes to improve data consistency and reduce manual effort.",
        "Developed and maintained multiple web applications including a Car Rental System, Global Rewards and Incentives Platform, and Travel and Events Management Application. Utilized React.js, Node.js, .NET, C#, JavaScript, HTML/CSS, SQL, and Agile methodologies. Designed and implemented RESTful APIs for seamless data exchange and integration between front-end (React) and back-end services (Node.js).",
        "Led SQL database optimization efforts and integrated MongoDB for document-based data storage, resulting in substantial improvements in application data processing and scalability. Integrated Azure App Insight and Power BI to enhance performance monitoring, system behavior analysis, and data visualization."
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
