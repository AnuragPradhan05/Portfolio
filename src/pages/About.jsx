import React from "react";
import { motion } from "framer-motion";
import FloatingIcons from "/src/components/FloatingIcons";
import "/src/styles/About.css";
import myPic from "/src/assets/pic2.jpg";

const About = () => {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Floating background icons */}
      <FloatingIcons />

      <div className="about-container">
        {/* ---------- Left: About Text ---------- */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span>About Me</span>
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Hey there 👋 I'm <strong>Anurag Pradhan</strong>, a passionate Web Developer who loves building
            clean, responsive, and user-focused digital experiences.
          </motion.p>

          {/* What I Do */}
          <motion.ul
            className="about-points"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <li>💻 Build full-stack applications using React, Angular & Spring Boot</li>
            <li>⚡ Focus on performance, clean code & responsive UI</li>
            <li>🚀 Fast learner who enjoys solving real-world problems</li>
            <li>🎯 Passionate about turning ideas into working products</li>
          </motion.ul>

          {/* Tech Stack Badges */}
          <motion.div
            className="tech-stack"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <span>React</span>
            <span>Angular</span>
            <span>Spring Boot</span>
            <span>JavaScript</span>
            <span>Java</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Firebase</span>
            <span>PostgreSQL</span>
            <span>Python</span>
            <span>MySQL</span>

          </motion.div>

          {/* Goal */}
          <motion.p
            className="about-goal"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
          >
            Currently seeking opportunities as a <strong>Software / Web Developer</strong>
            to contribute, grow, and build impactful digital solutions.
          </motion.p>
        </motion.div>

        {/* ---------- Right: Image ---------- */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 1 }}
        >
          <motion.img
            src={myPic}
            alt="Anurag Pradhan"
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;