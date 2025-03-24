import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { FaCode, FaLaptopCode, FaBrain, FaChartBar, FaLightbulb, FaProjectDiagram } from "react-icons/fa";
import "./Services.css"; 

const cards = [
  {
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to meet specific business needs, ensuring efficiency and scalability.",
    icon: <FaCode />,
  },
  {
    title: "Web Development",
    description:
      "Building responsive and scalable websites and web applications with modern technologies.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Enterprise Software Development",
    description:
      "Comprehensive solutions like ERP, CRM, and HRM to streamline business operations and enhance productivity.",
    icon: <FaProjectDiagram />,
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Implementing AI-driven solutions to automate processes, enhance decision-making, and optimize business performance.",
    icon: <FaBrain />,
  },
  {
    title: "Data Analytics & Business Intelligence",
    description:
      "Leveraging big data to provide actionable insights, improve strategies, and drive business growth.",
    icon: <FaChartBar />,
  },
  {
    title: "IT Consulting & Strategy",
    description:
      "Expert guidance on digital transformation, IT infrastructure, and business process optimization.",
    icon: <FaLightbulb />,
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".bg_services");
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

  return (
    <div className="Services">
      <motion.section
        className={`bg_services ${isVisible ? "show" : ""}`}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="services_container"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
          >
            Services
          </motion.h1>
          <motion.div
            className="cards"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className="card"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3>
                  <span className="icon">{card.icon}</span> {card.title}
                </h3>
                <p>{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Services;
