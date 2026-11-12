import React, { useState } from "react";
import "../styles/Projects.css";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import FloatingIcons from "/src/components/FloatingIcons";
import patientHistoryImg from "/src/assets/patientHistory.png";
import jrtransportImg from "/src/assets/JrTransport.png";
import snakeImg from "/src/assets/SnakeGame.jpg";
import pythonImg from "/src/assets/PP.jpg";
import bloomifyImg from "/src/assets/bloomify.png"
import { FaTimes } from "react-icons/fa";
import ScrollIndicator from "../components/ScrollIndicator";

import cert2 from "/src/assets/certificate/certificate1.jpg";
import cert1 from "/src/assets/certificate/certificate2.jpg";

import SEO from "../components/SEO";

const projectsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://anuragsite-five.vercel.app/projects#webpage",
      "url": "https://anuragsite-five.vercel.app/projects",
      "name": "Projects & Software Portfolio - Anurag Pradhan",
      "description": "Featured software projects, full-stack web applications, REST APIs, and open-source contributions by Anurag Pradhan.",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Bloomify",
            "url": "https://bloomify-ashen.netlify.app/" 
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Patient History Management API",
            "url": "https://github.com/AnuragPradhan05/patient-history-management-api"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "JR Transport Management System",
            "url": "https://github.com/Motuitionapplication/JrTransportManagement-Frontend-Angular"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Snake Game",
            "url": "https://github.com/AnuragPradhan05/Snake_game"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Python Mini Projects",
            "url": "https://github.com/AnuragPradhan05/python_projects"
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://anuragsite-five.vercel.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Projects",
          "item": "https://anuragsite-five.vercel.app/projects"
        }
      ]
    }
  ]
};

const Projects = () => {
  const [activeCert, setActiveCert] = useState(null);

  const projects = [
    {
      title: "Bloomify",
      desc: "Where emotions bloom into petals. A beautiful platform to transform feelings into digital flowers.",
      tech: ["React", "Firebase"],
      github: "https://github.com/AnuragPradhan05/Bloomify",
      live: "https://bloomify-ashen.netlify.app/",
      image: bloomifyImg,
    },
    {
      title: "Patient History Management API",
      desc: "A secure RESTful API for managing patient records and medical history with CRUD operations, validation, and a scalable Fast API architecture.",
      tech: ["Fast API", "Python", "SQLite", "REST API"],
      github: "https://github.com/AnuragPradhan05/patient-history-management-api",
      live: "",
      image: patientHistoryImg,
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
      <SEO
        title="Projects & Software Portfolio | Anurag Pradhan"
        description="Explore full-stack projects, REST APIs, and software applications built by Anurag Pradhan using React, Fast API, Angular, Spring Boot, and Python."
        path="/projects"
        schema={projectsSchema}
      />

      <FloatingIcons />

      {/* ================= Projects ================= */}
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">
        {projects.map((p, i) => {
          // Entrance logic: 0 = Left, 1 = Right, 2 = Bottom
          const direction = i % 3;
          let initialX = 0;
          let initialY = 0;

          if (direction === 0) initialX = -100;
          else if (direction === 1) initialX = 100;
          else if (direction === 2) initialY = 100;

          return (
            <motion.div
              key={i}
              className="project-grid-item"
              initial={{ opacity: 0, x: initialX, y: initialY }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1], // Premium snappy ease
                delay: 0.1,
              }}
              viewport={{ margin: "-50px", once: true }}
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
          );
        })}
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
            <img
              src={c.image}
              alt={`${c.title} Certificate`}
              className="cert-img"
              loading="lazy"
              decoding="async"
            />
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

      <ScrollIndicator />
    </motion.section>
  );
};

export default Projects;
