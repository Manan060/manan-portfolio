import React from "react";
import { motion } from "framer-motion";
import "./ToolsTechnologies.css";


import canvaLogo from "../public/assets/tools&tech/canva-logo.png";
import cssLogo from "../public/assets/tools&tech/css3-original-wordmark.svg";
import djangoLogo from "../public/assets/tools&tech/django.svg";
import figmaLogo from "../public/assets/tools&tech/figma.png";
import googleColabLogo from "../public/assets/tools&tech/GoogleColab_Logo.png";
import hfLogo from "../public/assets/tools&tech/hf.png";
import htmlLogo from "../public/assets/tools&tech/html-5.svg";
import jsLogo from "../public/assets/tools&tech/js-official.svg";
import jupyterLogo from "../public/assets/tools&tech/jupyter.svg";
import langchainLogo from "../public/assets/tools&tech/lang-chain.svg";
import matplotlibLogo from "../public/assets/tools&tech/matplotlib.png";
import mysqlLogo from "../public/assets/tools&tech/mysql-original-wordmark.svg";
import nodejsLogo from "../public/assets/tools&tech/nodejs.svg";
import numpyLogo from "../public/assets/tools&tech/NumPy.svg";
import pandasLogo from "../public/assets/tools&tech/pandas.png";
import postgresqlLogo from "../public/assets/tools&tech/postgresql.svg";
import pythonLogo from "../public/assets/tools&tech/python-original.svg";
import pytorchLogo from "../public/assets/tools&tech/PyTorch_logo.svg";
import reactLogo from "../public/assets/tools&tech/react.svg";
import scikitLearnLogo from "../public/assets/tools&tech/scikit-learn-logo.svg";
import sqliteLogo from "../public/assets/tools&tech/sqlite.svg";
import tensorflowLogo from "../public/assets/tools&tech/TensorFlow_logo.svg";

const fullstackLogos = [
  htmlLogo, cssLogo, jsLogo, reactLogo, nodejsLogo, djangoLogo,
  postgresqlLogo, mysqlLogo, sqliteLogo, figmaLogo, canvaLogo
];

const dataScienceLogos = [
  pythonLogo, tensorflowLogo, pytorchLogo, scikitLearnLogo, numpyLogo,
  pandasLogo, matplotlibLogo, jupyterLogo, googleColabLogo, hfLogo, langchainLogo
];

const ToolsTechnologies = () => {
  return (
    <motion.section
      className="tools-technologies"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Tools & Technologies
      </motion.h1>

      <div className="grid-container">
        {/* Fullstack & Designing */}
        <motion.div
          className="grid"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h3>Fullstack & Designing</h3>
          <div className="scrolling-wrapper">
            <div className="grid-items">
              {[...fullstackLogos, ...fullstackLogos].map((logo, index) => (
                <img key={index} src={logo} alt="Tech Logo" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Data Science & AI */}
        <motion.div
          className="grid"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h3>Data Science & AI</h3>
          <div className="scrolling-wrapper reverse">
            <div className="grid-items">
              {[...dataScienceLogos, ...dataScienceLogos].map((logo, index) => (
                <img key={index} src={logo} alt="Tech Logo" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ToolsTechnologies;
