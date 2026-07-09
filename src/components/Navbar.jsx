import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaEnvelope, FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "/src/styles/navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showNav, setShowNav] = useState(true);

  const location = useLocation();
  const wrapperRef = useRef();

  /* ---------------- Screen Resize ---------------- */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ---------------- Close Mobile Menu ---------------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ---------------- Hide Navbar on Scroll Down ---------------- */
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show near top
      if (currentScrollY <= 20) {
        setShowNav(true);
      } else {
        // Show when scrolling up
        if (currentScrollY < lastScrollY) {
          setShowNav(true);
        }
        // Hide when scrolling down
        else {
          setShowNav(false);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      path: "/",
      icon: <FaHome />,
      label: "Home",
    },
    {
      path: "/about",
      icon: <FaUser />,
      label: "About",
    },
    {
      path: "/projects",
      icon: <FaCode />,
      label: "Projects",
    },
    {
      path: "/contact",
      icon: <FaEnvelope />,
      label: "Contact",
    },
  ];

  return (
    <div className="floating-nav-wrapper" ref={wrapperRef}>
      {/* ================= MOBILE ================= */}

      {isMobile ? (
        <>
          <motion.div
            className="ap-tab"
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
          >
            <FaBars />
          </motion.div>

          <AnimatePresence>
            {open && (
              <motion.div
                className="floating-nav-panel"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
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
        </>
      ) : (
        /* ================= DESKTOP ================= */

        <motion.nav
          className="desktop-nav"
          initial={{ y: -80, opacity: 0 }}
          animate={{
            y: showNav ? 0 : -90,
            opacity: showNav ? 1 : 0,
          }}
          transition={{
            duration: 0.35,
            ease: "easeInOut",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`desktop-nav-item ${
                location.pathname === item.path ? "active" : ""
              }`}
            >
              {item.icon}

              <span className="desktop-tooltip">
                {item.label}
              </span>
            </Link>
          ))}
        </motion.nav>
      )}
    </div>
  );
};

export default Navbar;