import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "/src/styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="navbar-container">
        {/* Animated Logo */}
        <motion.h2
          className={`logo ${isMobile ? "mobile" : ""}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="full-name">Anurag Pradhan</span>
          <span className="short-name">AP</span>
        </motion.h2>

        {/* Menu Icon */}
        <motion.div
          className="menu-icon"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? (
            <FaTimes className="icon active" />
          ) : (
            <FaBars className="icon" />
          )}
        </motion.div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {[
            { path: "/", icon: <FaHome />, label: "Home" },
            { path: "/about", icon: <FaUser />, label: "About" },
            { path: "/projects", icon: <FaCode />, label: "Projects" },
            { path: "/contact", icon: <FaEnvelope />, label: "Contact" },
          ].map((item, index) => (
            <motion.li
              key={item.path}
              className={location.pathname === item.path ? "active" : ""}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Link to={item.path} onClick={closeMenu} className="nav-item">
                {item.icon}
                <span className="nav-label">{item.label}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
