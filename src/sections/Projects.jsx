import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Projects.css";

const projects = [
  {
    projectImg: "src/assets/projects_img/qr.png",
    projectName: "QR-Code-Feedback-System (for Gujarat Police)",
    description: "A QR-based feedback system designed for Gujarat Police, enabling citizens to provide quick and structured feedback on services.",
    githubUrl: "https://github.com/Manan060/QR-Code-Feedback-System",
  },
  {
    projectImg: "src/assets/projects_img/q-a.png",
    projectName: "Charusat Quora",
    description: "A Q&A platform for Charusat University students to ask, answer, and engage in academic discussions.",
    githubUrl: "https://github.com/Manan060/Q-A-Website",
  },
  {
    projectImg: "src/assets/projects_img/movie_recommender.png",
    projectName: "Movie Recommender System",
    description: "A recommendation system that suggests movies based on user preferences and viewing history using ML algorithms.",
    githubUrl: "https://github.com/Manan060/Movie-Recommender-System",
  },
  {
    projectImg: "src/assets/projects_img/dds.png",
    projectName: "Driver Drowsiness Detection",
    description: "An AI-based system that detects driver fatigue in real-time using facial recognition and alerts to prevent accidents.",
    githubUrl: "https://github.com/Manan060/Driver-Drowsiness-Detection",
  },
  {
    projectImg: "src/assets/projects_img/cms.png",
    projectName: "Clinic Management System",
    description: "A web-based system for clinics to manage patient records, appointments, and doctor schedules efficiently.",
    githubUrl: "https://github.com/Manan060/Clinic-Management-System",
  },
  {
    projectImg: "src/assets/projects_img/bms.png",
    projectName: "Delta (Blood Bank Management System)",
    description: "A platform for blood banks to manage donors, inventory, and requests, ensuring efficient blood distribution.",
    githubUrl: "https://github.com/Manan060/Delta",
  },
];


const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".bg_projects");
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
    <div className="Projects">
      <motion.section
        className={`bg_projects ${isVisible ? "show" : ""}`}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="projects_container">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
          >
            Projects
          </motion.h1>
          <div className="project_cards">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className="project_card"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={project.projectImg} alt={project.projectName} className="project_img" />
                <h3>{project.projectName}</h3>
                <p>{project.description}</p>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github_link">
                  <FaGithub /> GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Projects;
