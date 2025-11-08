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
      {/* 🔥 Floating background icons (same as Home) */}
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

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Hey there! 👋 I'm <strong>Anurag Pradhan</strong> — a passionate web developer 
            who loves turning creative ideas into reality through clean code and bold designs.  
            My journey began with curiosity for how digital things work, and it’s evolved into 
            a full-blown obsession with crafting modern, functional, and visually engaging experiences.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            I specialize in building responsive websites using React, Node.js, and modern frameworks.  
            Beyond development, I care about design, user psychology, and how technology can 
            make ideas feel alive. Let’s build something amazing together.
          </motion.p>
        </motion.div>

        {/* ---------- Right: Floating Animated Image ---------- */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            rotate: 1,
          }}
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
