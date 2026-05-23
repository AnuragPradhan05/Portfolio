import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion, useInView } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import FloatingIcons from "/src/components/FloatingIcons";
import "/src/styles/Contact.css";

/* ─── Reusable scroll-reveal wrapper ─── */
const Reveal = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  const variants = {
    hidden: {
      opacity: 0,
      y:
        direction === "up"
          ? 50
          : direction === "down"
          ? -50
          : 0,
      x:
        direction === "left"
          ? 50
          : direction === "right"
          ? -50
          : 0,
    },

    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="reveal-wrapper"
    >
      {children}
    </motion.div>
  );
};

const Contact = () => {

  /* FORM REF */
  const form = useRef();

  /* SEND EMAIL FUNCTION */
  const sendEmail = (e) => {
    e.preventDefault();

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      background: "#1b1b1b", // matching the contact form bg
      color: "#f2f2f2",
      iconColor: "#ff8c00",
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });

    emailjs
      .sendForm(
        "service_blya6s3",
        "template_dvnpb7i",
        form.current,
        "2mZE7f79yMebsK5iQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          Toast.fire({
            icon: "success",
            title: "Message Sent Successfully!"
          });
        },
        (error) => {
          console.log(error.text);
          Toast.fire({
            icon: "error",
            title: "Failed to send message"
          });
        }
      );

    e.target.reset();
  };

  return (
    <motion.section
      className="contact-page-v2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <FloatingIcons />

      <div className="contact-container">

        {/* HEADER */}
        <header className="contact-header">

          <Reveal direction="down" delay={0.1}>
            <h1 className="contact-super-title">
              CONTACT ME
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="contact-header-subtitle">
              Have a project in mind or just want to say hi?
              Feel free to reach out. I am always open to
              discussing new projects, creative ideas,
              or opportunities to be part of your visions.
            </p>
          </Reveal>

        </header>

        {/* INFO TITLE */}
        <div className="contact-info-section">

          <div className="info-title-area">

            <Reveal direction="up" delay={0.3}>
              <h2 className="info-main-title">
                GET IN TOUCH
              </h2>
            </Reveal>

          </div>

        </div>

        {/* FORM SECTION */}
        <Reveal direction="up" delay={0.7}>

          <div className="contact-form-block">

            {/* LEFT FORM */}
            <div className="contact-form-area">

              <form ref={form} onSubmit={sendEmail}>

                <div className="input-group">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="What's your Name?"
                    required
                  />
                </div>

                <div className="input-group">
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="input-group">
                  <textarea
                    rows="4"
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="send-msg-btn"
                >
                  Send Message
                </button>

              </form>

            </div>

            {/* RIGHT TEXT */}
            <div className="contact-form-text">

              <span className="small-query-label">
                Have any query?
              </span>

              <h2 className="form-right-title">
                CONTACT ME
              </h2>

              <p className="form-right-desc">
                Whether you need a complete web application
                built from scratch, a redesign of an existing
                platform, or robust backend APIs, I'm here
                to help turn your concepts into reliable
                working software. Drop a message!
              </p>

            </div>

          </div>

        </Reveal>

        {/* FOOTER */}
        <footer className="contact-footer">

          <div className="footer-left">

            <h2>Let's talk</h2>

            <div className="footer-socials">

              <a href="mailto:pradhananurag2005@gmail.com">
                <FaEnvelope />
              </a>

              <a
                href="http://www.linkedin.com/in/anurag-pradhan-5b398130a"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/AnuragPradhan05"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

            </div>

          </div>

          <div className="footer-right">

            <p>
              Bhubaneswar, Odisha
              <br />
              India, 751024
            </p>

            <p className="highlight-text">
              pradhananurag2005@gmail.com
              <br />
              +91 82606 89967
            </p>

          </div>

        </footer>

      </div>
    </motion.section>
  );
};

export default Contact;