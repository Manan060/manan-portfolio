import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Swal from 'sweetalert2'
import "./Contact.css";
import SplineScene from "../components/SplineScene";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".contact");
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "df784d83-951c-4fee-9d9c-1f2f1e6efc76");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success! Message sent",
        icon: "success",
        draggable: true
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  

  return (
    <motion.section
      className={`contact ${isVisible ? "show" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="contact-title"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
      >
        Contact Me
      </motion.h1>

      <div className="contact-container">
        {/* Earth (Spline Model) */}
        <motion.div
          className="spline-container"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SplineScene />
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onSubmit={onSubmit}
        >
          <div className="input-box">
            <label>Full Name</label>
            <input type="text" className="field" placeholder="Enter Your Name" name="name" required />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input type="email" className="field" placeholder="Enter Your Email" name="email" required />
          </div>
          <div className="input-box">
            <label>Your Message</label>
            <textarea name="message" className="field mess" placeholder="Enter Your Message" required></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#ff7b00" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
