import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGithub } from "react-icons/fa";
import "/src/styles/FloatingIcons.css";

const floatingIcons = [
  { icon: <FaReact />, className: "icon react" },
  { icon: <FaHtml5 />, className: "icon html" },
  { icon: <FaCss3Alt />, className: "icon css" },
  { icon: <FaJsSquare />, className: "icon js" },
  { icon: <FaNodeJs />, className: "icon node" },
  { icon: <FaGithub />, className: "icon github" },
];

const FloatingIcons = () => {
  return (
    <div className="floating-icons">
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={item.className}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
