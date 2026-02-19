import React, { useState } from "react";
import "../styles/Projects.css";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import FloatingIcons from "/src/components/FloatingIcons";
import smartbizImg from "/src/assets/smartbiz.jpg";
import jrtransportImg from "/src/assets/JrTransport.png";
import snakeImg from "/src/assets/SnakeGame.jpg";
import pythonImg from "/src/assets/PP.jpg";
import { FaTimes } from "react-icons/fa";

import cert2 from "/src/assets/certificate/certificate1.jpg";
import cert1 from "/src/assets/certificate/certificate2.jpg";

const Projects = () => {
  const [activeCert, setActiveCert] = useState(null);

    const projects = [
      {
        title: "SmartBiz App",
        desc: "A modern business management platform with role-based dashboards.",
        tech: ["Angular", "TypeScript"],
        github: "https://github.com/AnuragPradhan05/smartbiz",
        live: "https://smartbiz-zhej.onrender.com/",
        image: smartbizImg,
      },
      {
        title: "JR Transport",
        desc: "Driver & Transport Management System with clean UI.",
        tech: ["Angular", "Spring Boot"],
        github: [
          {
            name: "Frontend (Angular)",
            url: "https://github.com/Motuitionapplication/JrTransportManagement-Frontend-Angular",
          },
          {
            name: "Backend (Spring Boot)",
            url: "https://github.com/Motuitionapplication/JrTransportManagement-BackEnd-Spring",
          },
        ],
        image: jrtransportImg,
      },
      {
        title: "Snake Game",
        desc: "Classic snake game built using Python pygame.",
        tech: ["Python"],
        github: "https://github.com/AnuragPradhan05/Snake_game",
        live: "",
        image: snakeImg,
      },
      {
        title: "Python Mini Projects",
        desc: "KBC, Tic Tac Toe, Rock Paper Scissor, Book Store, etc.",
        tech: ["Python"],
        github:
          "https://github.com/AnuragPradhan05/python_projects/tree/main/projects",
        live: "",
        image: pythonImg,
      },
    ];

  const certificates = [
    {
      title: "Spring Boot + Angular Full Stack Training",
      image: cert1,
    },
    {
      title: "Full Stack Developer Internship – AayraTechX",
      image: cert2,
    },
  ];

  return (
    <motion.section
      className="projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <FloatingIcons />

      {/* ================= Projects ================= */}
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.12 }}
            viewport={{ once: true }}
          >
          <ProjectCard
            title={p.title}
            description={p.desc}
            tech={p.tech}
            github={p.github}
            live={p.live}
            image={p.image}
          />
          </motion.div>
        ))}
      </div>

      {/* ================= Certificates ================= */}
      <h2 className="certificates-title">
        <span className="cert-line"></span>
        My Certifications
        <span className="cert-line"></span>
      </h2>


      <div className="cert-grid">
        {certificates.map((c, i) => (
          <motion.div
            key={i}
            className="cert-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.12 }}
            viewport={{ once: true }}
          >
            <img src={c.image} alt={c.title} className="cert-img" />
            <h3>{c.title}</h3>

            <button
              className="cert-btn"
              onClick={() => setActiveCert(c.image)}
            >
              View Certificate
            </button>
          </motion.div>
        ))}
      </div>

      {/* ================= Popup Modal ================= */}
      {activeCert && (
        <div
          className="cert-modal"
          onClick={() => setActiveCert(null)}
        >
          <motion.div
            className="cert-popup-container"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ❌ Close Button */}
          <button
            className="cert-close"
            onClick={() => setActiveCert(null)}
          >
            <FaTimes />
          </button>


            <img
              src={activeCert}
              alt="Certificate"
              className="cert-popup-img"
            />
          </motion.div>
        </div>
      )}
    </motion.section>
  );
};

export default Projects;
