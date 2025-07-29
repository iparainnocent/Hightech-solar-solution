// src/pages/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegLightbulb, FaTools, FaHandshake } from "react-icons/fa";
import "./Home.css";
import heroBackground from "../assets/hero-background.jpg"; // <--- Import your background image

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Hero Section with Parallax Background */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {" "}
        {/* <--- Apply background image */}
        <div className="hero-overlay"></div>{" "}
        {/* Optional overlay for text readability */}
        <div className="hero-content">
          <h1 className="hero-title" data-aos="fade-up">
            Powering Your Future with Renewable Energy
          </h1>
          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
            Sustainable Solar Solutions for Homes, Businesses, and Beyond.
          </p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
            <button
              className="btn primary-btn"
              onClick={() => navigate("/products")}
            >
              Explore Products
            </button>
            <button
              className="btn secondary-btn"
              onClick={() => navigate("/contact")}
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* ... rest of your Home page content ... */}

      <section className="services-overview">
        <h2 className="section-title" data-aos="fade-up">
          Our Expertise in Solar Solutions
        </h2>
        <div className="services-grid">
          <div className="service-card" data-aos="fade-up">
            <FaRegLightbulb className="service-icon" />
            <h3>Residential Solar</h3>
            <p>
              Custom solar installations designed to maximize energy savings for
              your home.
            </p>
          </div>
          <div className="service-card" data-aos="fade-up" data-aos-delay="100">
            <FaTools className="service-icon" />
            <h3>Commercial & Industrial</h3>
            <p>
              Scalable solar solutions to power businesses and reduce
              operational costs.
            </p>
          </div>
          <div className="service-card" data-aos="fade-up" data-aos-delay="200">
            <FaHandshake className="service-icon" />
            <h3>Maintenance & Support</h3>
            <p>
              Ensuring your solar system operates at peak performance with
              expert maintenance.
            </p>
          </div>
        </div>
        <button
          className="view-all-services-btn"
          onClick={() => navigate("/services")}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          View All Services
        </button>
      </section>

      {/* New Section: Why Choose Us (Example) */}
      <section className="why-choose-us">
        <h2 className="section-title" data-aos="fade-up">
          Why Choose Hightech Solar Solution?
        </h2>
        <div className="choose-us-grid">
          <div className="choose-us-item" data-aos="fade-up">
            <h3>Expertise & Experience</h3>
            <p>
              Years of experience in delivering high-quality solar
              installations.
            </p>
          </div>
          <div
            className="choose-us-item"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3>Quality Products</h3>
            <p>
              We use only the most reliable and efficient solar technologies.
            </p>
          </div>
          <div
            className="choose-us-item"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>Customer Satisfaction</h3>
            <p>
              Our commitment to excellence ensures your complete satisfaction.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
