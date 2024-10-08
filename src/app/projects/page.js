"use client";
import { useState, useEffect } from 'react';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/abhishekbagde/repos');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        setRepos(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <div className="text-center mt-5">Loading projects...</div>;
  if (error) return <div className="text-center mt-5 text-danger">Error: {error}</div>;

  return (
    <section className="projects-section container my-5">
      <h2 className="text-center mb-5 animate-content animate-content-delay-1">My Projects</h2>
      <div className="row">
        {repos.map((repo) => (
          <div key={repo.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 bg-dark text-white animate-content animate-content-delay-2">
              <div className="card-body">
                <h5 className="card-title">{repo.name}</h5>
                <p className="card-text">{repo.description || 'No description available'}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="me-3"><FaStar /> {repo.stargazers_count}</span>
                    <span><FaCodeBranch /> {repo.forks_count}</span>
                  </div>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                    <FaGithub className="me-2" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
