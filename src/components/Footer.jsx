import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Left Section */}
      <motion.h2
        className="footer-title"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        © {new Date().getFullYear()} | Designed & Built by{" "}
        <span className="footer-name">Anurag Pradhan</span>
      </motion.h2>

      {/* Right Section */}
      <motion.div
        className="footer-icons"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.a
          href="mailto:pradhananurag2005@gmail.com"
          whileHover={{ scale: 1.3, rotate: 10 }}
          className="footer-icon"
          title="Mail me"
        >
          <FaEnvelope />
        </motion.a>

        <motion.a
          href="http://www.linkedin.com/in/anurag-pradhan-5b398130a"
          target="_blank"
          whileHover={{ scale: 1.3, rotate: 10 }}
          className="footer-icon"
          title="LinkedIn"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://github.com/AnuragPradhan05"
          target="_blank"
          whileHover={{ scale: 1.3, rotate: 10 }}
          className="footer-icon"
          title="GitHub"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://www.instagram.com/ap_lucifer_05/"
          target="_blank"
          whileHover={{ scale: 1.3, rotate: 10 }}
          className="footer-icon"
          title="Instagram"
        >
          <FaInstagram />
        </motion.a>
      </motion.div>
    </footer>
  );
};

export default Footer;
