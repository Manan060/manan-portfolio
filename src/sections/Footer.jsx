import { FaLinkedin, FaXTwitter, FaFacebook,FaGithub,} from "react-icons/fa6";
import { SiHuggingface } from "react-icons/si";

import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">Copyright © 2025 Manan, All Rights Reserved.</p>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/mananpathak28" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://github.com/Manan060" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://huggingface.co/Manan28" target="_blank" rel="noopener noreferrer">
          <SiHuggingface />
        </a>

      </div>
    </footer>
  );
};

export default Footer;