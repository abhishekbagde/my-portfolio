"use client";

const About = () => {
  return (
    <section className="about-section container my-5">
      <h2 className="text-center mb-4 animate-content animate-content-delay-1">About Me</h2>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card bg-dark text-white shadow-lg animate-content animate-content-delay-2">
            <div className="card-body">
              <p className="lead mb-4">
                Hello! I&apos;m <strong>Abhishek Bagde</strong>, a passionate <strong>Cloud Software Engineer</strong> with over 5 years of experience, specializing in building dynamic, scalable web applications and cloud infrastructure. I hold a <strong>Master&apos;s in Advanced Computer Science</strong> from the University of Manchester, where I honed my skills in <strong>Machine Learning</strong>, <strong>Natural Language Processing</strong>, and <strong>3D Digitization Systems</strong>.
              </p>
              <p className="mb-4">
                Throughout my career, I&apos;ve worked with leading organizations such as <strong>London Stock Exchange Group</strong>, <strong>DXC Technology</strong>, <strong>IBM</strong>, and <strong>Persistent Systems</strong>, where I played a pivotal role in delivering complex projects from start to finish. My expertise spans across a wide array of technologies, including:
              </p>
              <ul className="list-group list-group-flush bg-dark mb-4">
                <li className="list-group-item bg-dark text-white">C# & .NET Core, Python, JavaScript</li>
                <li className="list-group-item bg-dark text-white">Azure Cloud Platform, Terraform, Kubernetes, Docker</li>
                <li className="list-group-item bg-dark text-white">CI/CD Pipelines, DevOps Practices</li>
                <li className="list-group-item bg-dark text-white">React, Node.js, Modern Web Development</li>
                <li className="list-group-item bg-dark text-white">Machine Learning, NLP, Computer Vision</li>
              </ul>
              <p className="mb-4">
                I thrive in fast-paced environments where I can solve intricate challenges, drive full project lifecycles, and lead cross-functional teams. My most notable achievements include:
              </p>
              <ul className="list-group list-group-flush bg-dark mb-4">
                <li className="list-group-item bg-dark text-white">Developing an <strong>enterprise platform orchestrator</strong> for subscription onboarding, identity management, and firewall rules across Azure environments</li>
                <li className="list-group-item bg-dark text-white">Automating infrastructure provisioning with <strong>Terraform</strong>, reducing manual effort and improving deployment consistency</li>
                <li className="list-group-item bg-dark text-white">Leading the development of a <strong>fraud detection algorithm</strong> that reduced fraud incidents by 25%</li>
                <li className="list-group-item bg-dark text-white">Successfully implementing <strong>cloud-native architectures</strong> to enhance system scalability and resilience</li>
              </ul>
              <p>
                I am constantly looking for opportunities to apply my knowledge and skills to innovate and improve software solutions. Whether it&apos;s architecting cloud infrastructure, developing robust backend systems, crafting engaging front-end user experiences, or implementing DevOps practices, I am committed to delivering excellence and driving digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
