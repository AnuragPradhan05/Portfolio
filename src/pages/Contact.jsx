import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import "/src/styles/Contact.css";
import FloatingIcons from "/src/components/FloatingIcons";


const Contact = () => {
  return (
    <section className="contact">

      {/* 🔥 Floating background icons */}
      <FloatingIcons />
      <div className="contact-container">


        {/* Title Animation */}
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>

        {/* Subtitle Animation */}
        <motion.p
          className="contact-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          I’d love to connect! Whether you want to discuss a project, ask a question, 
          or just say hi — feel free to reach out.
        </motion.p>

        {/* Icons with Floating Animation */}
        <div className="contact-icons">
          <motion.a
            href="mailto:pradhananurag2005@gmail.com"
            className="contact-icon email"
            whileHover={{ scale: 1.2, rotate: 10 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FaEnvelope />
          </motion.a>

          <motion.a
            href="tel:+918260689967"
            className="contact-icon phone"
            whileHover={{ scale: 1.2, rotate: -10 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2.2 }}
          >
            <FaPhoneAlt />
          </motion.a>

          <motion.a
            href="http://www.linkedin.com/in/anurag-pradhan-5b398130a"
            target="_blank"
            className="contact-icon linkedin"
            whileHover={{ scale: 1.2, rotate: 10 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2.4 }}
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://github.com/AnuragPradhan05"
            target="_blank"
            className="contact-icon github"
            whileHover={{ scale: 1.2, rotate: -10 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2.6 }}
          >
            <FaGithub />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
