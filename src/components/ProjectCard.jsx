import React, { useState } from "react";
import "../styles/ProjectCard.css";
import {
  FaArrowRight,
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";

const ProjectCard = ({ title, description, tech, github, live, image }) => {
  const [flipped, setFlipped] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  const isSmartBiz = title === "SmartBiz App";

  return (
    <>
      <div className={`project-card ${flipped ? "flipped" : ""}`}>
        <div className="project-inner">
          {/* ================= FRONT ================= */}
          <div className="project-front">

            {image && (
              <img src={image} alt={title} className="project-img" />
            )}

            <h3>{title}</h3>
            <p>{description}</p>

            <div className="tech-stack">
              {tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <button className="flip-btn" onClick={() => setFlipped(true)}>
              <FaArrowRight />
            </button>
          </div>

          {/* ================= BACK ================= */}
          <div className="project-back">
            <h3>{title}</h3>

            {/* ================= GitHub Links ================= */}
            {github &&
              (Array.isArray(github) ? (
                github.map((repo, i) => (
                  <a
                    key={i}
                    className="project-link"
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub /> {repo.name || `Repo ${i + 1}`}
                  </a>
                ))
              ) : (
                <a
                  className="project-link"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
              ))}

            {/* ================= Live Site ================= */}
            {live && (
              <a
                className="project-link"
                href={live}
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt /> Live Site
              </a>
            )}

            {/* ================= Demo Access ONLY SmartBiz ================= */}
            {isSmartBiz && (
              <button
                className="demo-btn"
                onClick={() => setShowDemo(true)}
              >
                Demo Access
              </button>
            )}

            <button className="flip-btn" onClick={() => setFlipped(false)}>
              <FaArrowRight style={{ transform: "rotate(180deg)" }} />
            </button>
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