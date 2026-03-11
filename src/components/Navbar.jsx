import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaEnvelope, FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "/src/styles/navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const location = useLocation();
  const wrapperRef = useRef();

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { path: "/", icon: <FaHome />, label: "Home" },
    { path: "/about", icon: <FaUser />, label: "About" },
    { path: "/projects", icon: <FaCode />, label: "Projects" },
    { path: "/contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  return (
    <div
      className="floating-nav-wrapper"
      ref={wrapperRef}
      onMouseLeave={!isMobile ? () => setOpen(false) : undefined}
    >

      {/* AP Floating Button */}
      <motion.div
        className="ap-tab"
        onMouseEnter={!isMobile ? () => setOpen(true) : undefined}
        onClick={isMobile ? () => setOpen(!open) : undefined}
        whileTap={{ scale: 0.9 }}
        animate={{ scale: open ? 1.05 : 1 }}
      >
       {isMobile ? <FaBars /> : "AP"}
      </motion.div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="floating-nav-panel"
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`floating-nav-item ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;