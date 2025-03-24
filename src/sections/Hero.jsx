import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; 
import "./Hero.css";
import heroImage from "../assets/hero.png";

const roles = ["Software Developer", "Data Scientist", "CS Graduate"];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && typedText === currentRole) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }

    const timeout = setTimeout(() => {
      setTypedText((prevText) =>
        isDeleting ? prevText.slice(0, -1) : currentRole.slice(0, prevText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentRoleIndex]);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hello! <span className="waving-hand">👋🏻</span></h1>
        <h2>
          I'm <span className="highlight">Manan Pathak</span>
        </h2>
        <h2 className="typing-text">{typedText}</h2>

        <Link to="about" smooth={true} duration={800} offset={-70} className="btn">
          Know more
        </Link>
      </div>

      <div className="hero-image-container">
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
