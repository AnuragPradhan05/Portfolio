import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import FloatingIcons from "../components/FloatingIcons";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <motion.section
      className="not-found-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "4rem 2rem",
        position: "relative",
        color: "#ffffff",
      }}
    >
      <SEO
        title="404 - Page Not Found"
        description="The page you requested could not be found."
        path="/404"
        noindex={true}
      />

      <FloatingIcons />

      <div className="not-found-container" style={{ zIndex: 2, maxWidth: "600px" }}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "4rem",
            color: "#ff8c00",
            marginBottom: "1rem",
            display: "inline-block",
          }}
        >
          <FaExclamationTriangle />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "1rem" }}
        >
          404 - Page Not Found
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ fontSize: "1.1rem", color: "#cccccc", marginBottom: "2rem", lineHeight: "1.6" }}
        >
          Oops! The page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            to="/"
            className="btn-modern primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.8rem 1.8rem",
              borderRadius: "30px",
              background: "linear-gradient(135deg, #ff8c00, #e65c00)",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "600",
              boxShadow: "0 4px 15px rgba(255, 140, 0, 0.4)",
            }}
          >
            <FaHome /> Back to Home
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NotFound;
