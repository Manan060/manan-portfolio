import React, { useEffect, useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import "./About.css";
import profilePic from "../assets/me.jpeg"; 

const skills = [
  { name: "SQL", percentage: 90 },
  { name: "Python", percentage: 85 },
  { name: "C/C++", percentage: 85 },
  { name: "Data Visualization & Statistical Analysis", percentage: 85 },
  { name: "Machine Learning & AI", percentage: 95 },
];

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector(".about");
      if (!aboutSection) return;
      const top = aboutSection.getBoundingClientRect().top;
      const isVisible = top < window.innerHeight - 100;
      if (isVisible) setVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`about ${visible ? "fade-in" : ""}`}>
      <div className="about-container">
        {/* Left Side */}
        <div className="about-left">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className="personal-info">
            <p><strong>Name:</strong> Manan Pathak</p>
            <p><strong>Job Role:</strong> Freelancer</p>
            <p><strong>Experience:</strong> 1 year</p>
            <p><strong>Address:</strong> Gujarat, India</p>
          </div>
          <h3>Skills</h3>
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <p>{skill.name} {skill.percentage}%</p>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ width: visible ? `${skill.percentage}%` : "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="about-right">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
          I’m a passionate and results-driven software developer with expertise in crafting custom software solutions, web development, 
          and enterprise software applications. With a strong background in AI & Machine Learning, Data Analytics, and IT Consulting, 
          I help businesses optimize their operations, enhance decision-making, and drive innovation. Whether it’s building scalable
          websites, implementing AI-driven automation, or designing data-driven strategies, I bring a problem-solving mindset to every 
          project. Let’s collaborate to turn your vision into reality!
          </p>
          <div className="info-list">
            <p><strong>Profile:</strong> Freelancer</p>
            <p><strong>Domain:</strong> Retail, Ecommerce, Finance, Security, Edtech, & Medtech</p>
            <p><strong>Education:</strong> Bachelor of Technology</p>
            <p><strong>Languages:</strong> English, Hindi, Gujarati</p>
            <p><strong>Other Skills:</strong> Cloud, PySpark, Excel, Git, JIRA, Google Analytics & SEO</p>
            <p><strong>Interests:</strong> Sports, Gaming, Finance</p>
          </div>
          <div className="projects">
            <span className="highlight">10+</span> Projects completed
          </div>
          <a href="https://www.linkedin.com/in/mananpathak28" target="_blank" rel="noopener noreferrer" className="linkedin-btn">
            <AiFillLinkedin className="linkedin-icon" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
