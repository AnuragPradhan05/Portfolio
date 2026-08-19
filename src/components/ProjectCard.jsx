import React, { useState } from "react";
import "../styles/ProjectCard.css";
import {
  FaArrowRight,
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";

const ProjectCard = ({ title, description, tech, github, live, image }) => {
  const [showDemo, setShowDemo] = useState(false);

  const isSmartBiz = title === "SmartBiz App";

  return (
    <>
      <div className="project-card">
        <div className="project-front">
          {image && (
            <div className="project-img-wrapper">
              <img src={image} alt={title} className="project-img" />
            </div>
          )}

          <div className="project-content">
            <h3>{title}</h3>
            <p>{description}</p>

            <div className="tech-stack">
              {tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <div className="project-links">
              {github && (
                Array.isArray(github) ? (
                  github.map((repo, i) => (
                    <a
                      key={i}
                      className="project-btn project-btn-primary"
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub /> {repo.name || `Repo ${i + 1}`}
                    </a>
                  ))
                ) : (
                  <a
                    className="project-btn project-btn-primary"
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub /> Code
                  </a>
                )
              )}

              {live && (
                <a
                  className="project-btn project-btn-accent"
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}

              {isSmartBiz && (
                <button
                  className="project-btn project-btn-accent"
                  onClick={() => setShowDemo(true)}
                >
                  Demo Access
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= DEMO POPUP ================= */}
      {showDemo && (
        <div className="demo-modal" onClick={() => setShowDemo(false)}>
          <div className="demo-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="demo-close"
              onClick={() => setShowDemo(false)}
            >
              <FaTimes />
            </button>

            <h3>SmartBiz Demo Login</h3>

            <div className="demo-cred">
              <b>Admin</b>
              <p>Username: admin</p>
              <p>Password: admin123</p>
            </div>

            <div className="demo-cred">
              <b>Employee</b>
              <p>Username: ravi</p>
              <p>Password: ravi123</p>
            </div>

            <div className="demo-cred">
              <b>Employee</b>
              <p>Username: sita</p>
              <p>Password: sita123</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;