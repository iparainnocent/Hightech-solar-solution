// src/pages/ServicesPage.js
import React from "react";
import "./ServicesPage.css"; 

const ServicesPage = () => {
  return (
    <div className="services-page-container">
      <h1>Our Comprehensive Solar Services</h1>
      <p>
        Hightech Solar Solution offers a wide range of services to meet your
        energy needs...
      </p>
      {/* Add more detailed service information here */}
      <section className="service-details-grid">
        <div className="service-detail-card">
          <h3>Residential Solar Installation</h3>
          <p>
            Custom-designed solar systems for your home, providing clean energy
            and significant savings.
          </p>
        </div>
        <div className="service-detail-card">
          <h3>Commercial & Industrial Solutions</h3>
          <p>
            Scalable solar installations for businesses, enhancing
            sustainability and reducing operational costs.
          </p>
        </div>
        <div className="service-detail-card">
          <h3>Off-Grid Power Systems</h3>
          <p>
            Reliable and independent power solutions for remote areas or
            properties not connected to the main grid.
          </p>
        </div>
        <div className="service-detail-card">
          <h3>Solar Water Pumping</h3>
          <p>
            Efficient and sustainable water pumping solutions for agriculture,
            livestock, and domestic use.
          </p>
        </div>
        <div className="service-detail-card">
          <h3>System Maintenance & Support</h3>
          <p>
            Regular maintenance, monitoring, and technical support to ensure
            optimal performance and longevity of your solar system.
          </p>
        </div>
        <div className="service-detail-card">
          <h3>Battery Storage Solutions</h3>
          <p>
            Advanced battery backup systems to store excess solar energy for use
            during the night or power outages.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
