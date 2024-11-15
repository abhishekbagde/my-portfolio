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
                Hello! I&apos;m <strong>Abhishek Bagde</strong>, a passionate <strong>Full Stack Developer</strong> with over 4 years of experience, specializing in building dynamic and scalable web applications. I hold a <strong>Master&apos;s in Advanced Computer Science</strong> from the University of Manchester, where I honed my skills in <strong>Machine Learning</strong>, <strong>Natural Language Processing</strong>, and <strong>3D Digitization Systems</strong>.
              </p>
              <p className="mb-4">
                Throughout my career, I&apos;ve worked with leading companies such as <strong>DXC Technology</strong>, <strong>IBM</strong>, and <strong>Persistent Systems</strong>, where I played a pivotal role in delivering complex projects from start to finish. My expertise spans across a wide array of technologies, including:
              </p>
              <ul className="list-group list-group-flush bg-dark mb-4">
                <li className="list-group-item bg-dark text-white">Python, Django, Flask</li>
                <li className="list-group-item bg-dark text-white">MERN stack (MongoDB, Express.js, React.js, Node.js)</li>
                <li className="list-group-item bg-dark text-white">Machine Learning, Representation Learning, Natural Language Processing, Image Processing, Robotics</li>
                <li className="list-group-item bg-dark text-white">C#, .NET</li>
                <li className="list-group-item bg-dark text-white">Azure, AWS</li>
              </ul>
              <p className="mb-4">
                I thrive in fast-paced environments where I can solve intricate challenges, drive full project lifecycles, and lead cross-functional teams. My most notable achievements include:
              </p>
              <ul className="list-group list-group-flush bg-dark mb-4">
                <li className="list-group-item bg-dark text-white">Leading the development of a <strong>fraud detection algorithm</strong> that reduced fraud by 25%</li>
                <li className="list-group-item bg-dark text-white">Optimizing transaction speeds by 30%</li>
                <li className="list-group-item bg-dark text-white">Successfully implementing a <strong>microservices architecture</strong> to enhance system scalability</li>
              </ul>
              <p>
                I am constantly looking for opportunities to apply my knowledge and skills to innovate and improve software solutions. Whether it&apos;s developing robust backends, crafting engaging front-end user experiences, or integrating cloud technologies, I am committed to delivering excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
