import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaGlobe,
  FaBolt,
  FaPaintBrush,
  FaCode,
  FaMobileAlt,
  FaHandshake,
} from "react-icons/fa";
import FloatingIcons from "/src/components/FloatingIcons";
import "/src/styles/About.css";
import myPic from "/src/assets/pic2.jpg";
import ScrollIndicator from "/src/components/ScrollIndicator";


/* ─── Reusable scroll-reveal wrapper ─── */
const Reveal = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.75, delay, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

/* ─── Tech Stack Data ─── */
const techCategories = [
  {
    label: "Frontend",
    icon: <FaLaptopCode />,
    items: ["React", "Angular", "HTML5", "CSS3", "JavaScript"],
  },
  {
    label: "Backend",
    icon: <FaServer />,
    items: ["Spring Boot", "Java", "Python", "Fast API"],
  },
  {
    label: "Database",
    icon: <FaDatabase />,
    items: ["MySQL", "PostgreSQL", "Firebase Firestore", "SQLite"],
  },
  {
    label: "Tools",
    icon: <FaTools />,
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
];

/* ─── Services Data ─── */
const services = [
  {
    icon: <FaGlobe />,
    title: "Web Development",
    desc: "Building fast, responsive, and SEO-friendly websites using modern React & Angular frameworks with pixel-perfect UI.",
  },
  {
    icon: <FaBolt />,
    title: "Full-Stack Applications",
    desc: "End-to-end application development with Spring Boot backends, RESTful APIs, and seamless database integrations.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    desc: "Crafting intuitive, visually stunning interfaces with a focus on usability, micro-animations, and user experience.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Design",
    desc: "Designing efficient relational database schemas with MySQL and PostgreSQL, with Firebase for real-time applications.",
  },
  {
    icon: <FaCode />,
    title: "API Development",
    desc: "Creating robust, secure, and well-documented REST APIs to power web and mobile applications.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    desc: "Ensuring flawless cross-device experiences from mobile to desktop with modern CSS.",
  },
];

/* ─── Bio bullet points ─── */
const bioBullets = [
  { icon: <FaLaptopCode />, text: "Build full-stack apps with React, Angular & Spring Boot" },
  { icon: <FaBolt />, text: "Obsessed with performance, clean code & responsive UI" },
  { icon: <FaTools />, text: "Fast learner who thrives on real-world challenges" },
  { icon: <FaHandshake />, text: "Passionate about turning ideas into impactful products" },
];

const About = () => {
  return (
    <motion.section
      className="about-v2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <FloatingIcons />

      {/* ════════════════════════════════════════
          SECTION 1 — Bio / Profile
      ════════════════════════════════════════ */}
      <section className="about-bio-section">
        <div className="about-bio-inner">
          {/* Text */}
          <Reveal direction="right" delay={0.1}>
            <div className="bio-text">
              <h1 className="section-heading">
                <span>About Me</span>
              </h1>

              <p className="bio-intro">
                Hey there! I'm{" "}
                <strong className="highlight">Anurag Pradhan</strong>, a
                passionate{" "}
                <strong className="highlight">Full-Stack Developer</strong>{" "}
                who loves crafting clean, performant, and user-centred digital
                experiences.
              </p>

              <ul className="bio-points">
                {bioBullets.map((b, i) => (
                  <li key={i}>
                    <span className="bio-bullet-icon">{b.icon}</span>
                    {b.text}
                  </li>
                ))}
              </ul>

              <p className="bio-goal">
                Currently seeking opportunities as a{" "}
                <strong className="highlight">Software / Web Developer</strong>{" "}
                to contribute, grow, and build things that matter.
              </p>
            </div>
          </Reveal>

          {/* Photo */}
          <Reveal direction="left" delay={0.25}>
            <div className="bio-image-wrap">
              <div className="bio-image-glow" />
              <img src={myPic} alt="Anurag Pradhan" className="bio-photo" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 2 — Tech Stack
      ════════════════════════════════════════ */}
      <section className="about-tech-section">
        <div className="section-container">
          <Reveal direction="up" delay={0}>
            <h2 className="section-heading center">
              <span>Tech Stack</span>
            </h2>
            <p className="section-sub">
              Technologies I work with on a daily basis
            </p>
          </Reveal>

          <div className="tech-categories">
            {techCategories.map((cat, i) => (
              <Reveal key={cat.label} direction="up" delay={i * 0.1}>
                <div className="tech-cat-card">
                  <div className="tech-cat-header">
                    <span className="tech-cat-icon">{cat.icon}</span>
                    <span className="tech-cat-label">{cat.label}</span>
                  </div>
                  <div className="tech-badges">
                    {cat.items.map((item) => (
                      <span key={item} className="tech-badge">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 3 — Services
      ════════════════════════════════════════ */}
      <section className="about-services-section">
        <div className="section-container">
          <Reveal direction="up" delay={0}>
            <h2 className="section-heading center">
              <span>Services</span>
            </h2>
            <p className="section-sub">What I can do for you</p>
          </Reveal>

          <div className="services-grid">
            {services.map((srv, i) => (
              <Reveal key={srv.title} direction="up" delay={i * 0.08}>
                <div className="service-card">
                  <div className="service-icon">{srv.icon}</div>
                  <h3 className="service-title">{srv.title}</h3>
                  <p className="service-desc">{srv.desc}</p>
                  <div className="service-shine" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      <ScrollIndicator />
    </motion.section>
  );
};

export default About;