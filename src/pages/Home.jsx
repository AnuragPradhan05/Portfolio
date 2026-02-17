import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";   // ✅ Added
import FloatingIcons from "/src/components/FloatingIcons";
import "/src/styles/Home.css";
import myPic from "/src/assets/pic2.jpg";
import resume from "/src/assets/Anurag_Pradhan_Resume_pdf.pdf";

const Home = () => {
  return (
    <motion.section
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* 🔥 Floating background icons */}
      <FloatingIcons />

      <div className="home-container">
        {/* ---------- Left: Animated Image ---------- */}
        <motion.div
          className="home-image"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src={myPic}
            alt="Anurag Pradhan"
            whileHover={{
              scale: 1.08,
              rotate: 1,
              boxShadow: "0 0 30px rgba(255,140,0,0.6)",
            }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        {/* ---------- Right: Intro Text ---------- */}
        <motion.div
          className="home-content"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Hello, I'm <span>Anurag Pradhan</span>
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Web Developer | Designer | Dream Builder
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.9 }}
          >
            I’m passionate about creating clean, interactive, and modern web experiences.
            I focus on blending design with logic to bring ideas to life.
          </motion.p>

          {/* ---------- Social Icons ---------- */}
          <motion.div 
            className="social-icons"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <motion.a
              href="https://github.com/AnuragPradhan05"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, boxShadow: "0 0 15px rgba(255,140,0,0.8)" }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="http://www.linkedin.com/in/anurag-pradhan-5b398130a"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, boxShadow: "0 0 15px rgba(255,140,0,0.8)" }}
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, boxShadow: "0 0 15px rgba(255,140,0,0.8)" }}
            >
              <FaFileAlt />
            </motion.a>
          </motion.div>

          {/* ---------- Buttons ---------- */}
          <motion.div
            className="home-buttons"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.9 }}
          >
            {/* ✅ Changed from <a> to <Link> */}
            <Link to="/projects" className="btn">
              <motion.span
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 25px rgba(255,140,0,0.9)",
                }}
                whileTap={{ scale: 0.95 }}
                style={{ display: "inline-block" }}
              >
                View My Work
              </motion.span>
            </Link>

            {/* ✅ Changed from <a> to <Link> */}
            <Link to="/contact" className="btn-outline">
              <motion.span
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 25px rgba(255,140,0,0.7)",
                }}
                whileTap={{ scale: 0.95 }}
                style={{ display: "inline-block" }}
              >
                Contact Me
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;