// src/pages/PortfolioPage.js
import React from "react";
import "./PortfolioPage.css";

// Import your images from the src/assets folder
import camImage from "../assets/cam.jpg";
import cameraImage from "../assets/camera.jpg";
import hsdmImage from "../assets/hsdm.jpg";
import invImage from "../assets/inv.jpg";
import ledImage from "../assets/led.jpg";
import ledeImage from "../assets/lede.jpg";
import lithiumImage from "../assets/lithium.jpg";
import panelsImage from "../assets/pannels.jpg"; // Corrected typo: 'pannels' to 'panels' based on common spelling

const projects = [
  {
    id: 1,
    title: "Rural School Solar Install",
    description:
      "Solar panels installed for a rural school's lighting and water system.",
    image: panelsImage, // Using the imported image variable
    altText:
      "Solar panels on a rural school roof for lighting and water system", // Added altText for better accessibility
  },
  {
    id: 2,
    title: "Home Backup Inverter System",
    description:
      "Complete solar and inverter system for uninterrupted home power supply.",
    image: invImage, // Using the imported image variable
    altText: "Home solar inverter system for power backup",
  },
  {
    id: 3,
    title: "Business Solar Grid Solutions",
    description:
      "Large-scale solar power for commercial and industrial applications.",
    image: hsdmImage, // Using the imported image variable
    altText: "Large-scale solar power grid for a business park",
  },
  {
    id: 4,
    title: "Integrated Solar Security Camera",
    description:
      "Solar-powered security cameras for remote monitoring and enhanced safety.",
    image: camImage, // Using the imported image variable
    altText: "Solar-powered security camera",
  },
  {
    id: 5,
    title: "Advanced Solar Monitoring Camera",
    description:
      "High-definition solar cameras for comprehensive site surveillance.",
    image: cameraImage, // Using the imported image variable
    altText: "Advanced solar monitoring camera setup",
  },
  {
    id: 6,
    title: "Energy-Efficient LED Lighting",
    description:
      "Solar-powered LED lighting solutions for streets, pathways, and commercial spaces.",
    image: ledImage, // Using the imported image variable
    altText: "Solar-powered LED street light",
  },
  {
    id: 7,
    title: "Smart LED Lighting System",
    description:
      "Integrated solar LED systems providing bright, sustainable illumination.",
    image: ledeImage, // Using the imported image variable
    altText: "Modern solar LED lighting system",
  },
  {
    id: 8,
    title: "High-Capacity Lithium-Ion Storage",
    description:
      "Robust lithium-ion battery banks for efficient energy storage and reliable backup power.",
    image: lithiumImage, // Using the imported image variable
    altText: "Lithium-ion battery storage system for solar power",
  },
];

const PortfolioPage = () => {
  return (
    <div className="portfolio-container">
      <h2 className="portfolio-heading">Our Completed Projects</h2>
      <div className="portfolio-grid">
        {projects.map((proj) => (
          <div key={proj.id} className="portfolio-card">
            <img src={proj.image} alt={proj.altText} loading="lazy" />{" "}
            {/* Added altText and lazy loading */}
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
