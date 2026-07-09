import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import "../styles/ScrollIndicator.css";

const ScrollIndicator = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY <= 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      className="global-scroll-indicator"
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
        y: [0, 12, 0],
      }}
      transition={{
        y: {
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        },
      }}
    >
      <span>SCROLL</span>
      <FaChevronDown />
    </motion.div>
  );
};

export default ScrollIndicator;