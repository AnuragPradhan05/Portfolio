import React from "react";
import "../styles/ProjectCard.css";

const ProjectCard = ({ title, description, tech }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="tech-stack">
        {tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
