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
        <div className="project-inner">
          <div className="project-front">

            {image && (
              <div className="project-img-wrapper">
                <img src={image} alt={title} className="project-img" />
                
                {/* Overlay Links on Top */}
                <div className="project-links-overlay">
                  {github &&
                    (Array.isArray(github) ? (
                      github.map((repo, i) => (
                        <a
                          key={i}
                          className="overlay-link"
                          href={repo.url}
                          target="_blank"
                          rel="noreferrer"
                          title={repo.name || `Repo ${i + 1}`}
                        >
                          <FaGithub />
                        </a>
                      ))
                    ) : (
                      <a
                        className="overlay-link"
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        title="GitHub Repo"
                      >
                        <FaGithub />
                      </a>
                    ))}

                  {live && (
                    <a
                      className="overlay-link demo-link"
                      href={live}
                      target="_blank"
                      rel="noreferrer"
                      title="Live Site"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}

                  {isSmartBiz && (
                    <button
                      className="overlay-link demo-btn"
                      onClick={() => setShowDemo(true)}
                    >
                      Demo Access
                    </button>
                  )}
                </div>
              </div>
            )}

            <h3>{title}</h3>
            <p>{description}</p>

            <div className="tech-stack">
              {tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
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