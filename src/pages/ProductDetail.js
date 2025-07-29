// src/pages/ProductDetail.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaSun,
  FaBolt,
  FaLightbulb,
  FaCheckCircle,
  FaTools,
} from "react-icons/fa";
import "./ProductDetail.css";

// Import the specific images from your assets folder
import panelsDetailImage from "../assets/pannels.jpg";
import inverterDetailImage from "../assets/inv.jpg";
import ledLightsDetailImage from "../assets/lede.jpg";

// This data MUST match the slugs in ProductPage.js exactly
const productsData = [
  {
    id: 1,
    name: "Solar Panel Kit",
    description: "Efficient panels for homes and schools.",
    icon: <FaSun size={32} color="#fdd835" />,
    slug: "solar-panel-kit", // Make sure this is IDENTICAL to ProductPage.js
    longDescription:
      "Our high-efficiency solar panel kits are designed to provide maximum energy output for residential and commercial applications. They are durable, easy to install, and come with a comprehensive warranty. Ideal for new installations and expanding existing systems. Each kit includes premium-grade monocrystalline solar panels, ensuring optimal performance even in challenging weather conditions.",
    features: [
      "High-efficiency monocrystalline cells (21%+)",
      "Durable, corrosion-resistant aluminum frame",
      "25-year performance warranty (80% output)",
      "Easy and flexible installation options",
      "Certified to international safety standards",
    ],
    detailedImage: panelsDetailImage,
    benefits: [
      "Significant reduction in electricity bills",
      "Increased energy independence",
      "Reduced carbon footprint",
      "Low maintenance requirements",
    ],
    installationOverview:
      "Our certified technicians handle the entire installation process with precision and care. From initial site assessment and custom design to secure mounting and electrical wiring, we ensure a seamless and efficient setup with minimal disruption to your daily routine. We use specialized tools and adhere to strict safety protocols.",
  },
  {
    id: 2,
    name: "Inverter System",
    description: "Stable power backup for your home or office.",
    icon: <FaBolt size={32} color="#ff5722" />,
    slug: "inverter-system", // Make sure this is IDENTICAL to ProductPage.js
    longDescription:
      "Our advanced inverter systems convert DC power from solar panels into usable AC power for your home or business. They are designed for reliability, efficiency, and seamless integration with battery storage solutions. Available in various capacities to suit your needs, with smart features for monitoring and control.",
    features: [
      "Pure sine wave output for sensitive electronics",
      "Integrated MPPT charge controller",
      "Multiple protection features (overload, short circuit, etc.)",
      "LCD display and remote monitoring via app",
      "Compatible with various battery types",
    ],
    detailedImage: inverterDetailImage,
    benefits: [
      "Uninterrupted power supply",
      "Optimized energy conversion",
      "E nhanced system safety",
      "Real-time performance tracking",
    ],
    installationOverview:
      "Inverter installation is performed by our expert electricians. We ensure secure mounting, proper ventilation, and precise wiring to connect seamlessly with your solar panels and electrical grid. Post-installation, we calibrate the system and provide a thorough walkthrough of its monitoring features.",
  },
  {
    id: 3,
    name: "Solar LED Lights",
    description: "Bright, energy-saving outdoor lighting.",
    icon: <FaLightbulb size={32} color="#ffc107" />,
    slug: "solar-led-lights", // Make sure this is IDENTICAL to ProductPage.js
    longDescription:
      "Illuminate your outdoors sustainably with our solar LED lights. Perfect for pathways, gardens, security, and public spaces, these lights are completely self-sufficient, charging during the day and providing bright illumination at night. They are built to withstand harsh weather conditions.",
    features: [
      "Automatic dusk-to-dawn operation",
      "IP65 weatherproof rating",
      "High-brightness, long-lasting LED technology",
      "Easy, wire-free installation",
      "Integrated motion sensor models available",
    ],
    detailedImage: ledLightsDetailImage,
    benefits: [
      "Zero electricity cost for lighting",
      "Eco-friendly and sustainable",
      "Increased safety and visibility",
      "Reduced installation complexity",
    ],
    installationOverview:
      "Our solar LED lights are designed for incredibly easy installation, often requiring no complex wiring. We can quickly mount them on poles, walls, or ground stakes, ensuring optimal solar exposure for charging and precise light placement for maximum effectiveness.",
  },
];

const ProductDetail = () => {
  const { slug } = useParams();
  // *** ADD THIS CONSOLE LOG ***
  console.log("ProductDetail: Received slug from URL:", slug);
  const navigate = useNavigate();

  const product = productsData.find((p) => p.slug === slug);

  // *** ADD THIS CONSOLE LOG ***
  if (!product) {
    console.log("ProductDetail: Product not found for slug:", slug);
    return (
      <div className="product-detail-container no-product">
        <h2>Product Not Found</h2>
        <p>The product you are looking for does not exist.</p>
        <button onClick={() => navigate("/products")}>Back to Products</button>
      </div>
    );
  }
  // ... rest of your component
  return (
    <div className="product-detail-container" data-aos="fade-in">
      <button onClick={() => navigate("/products")} className="back-button">
        &larr; Back to Products
      </button>

      <div className="product-detail-header">
        {product.icon && (
          <div className="product-detail-icon">{product.icon}</div>
        )}
        <h1 className="product-detail-heading">{product.name}</h1>
      </div>

      <div className="product-detail-content">
        {product.detailedImage && (
          <img
            src={product.detailedImage}
            alt={product.name}
            className="product-detail-image"
            loading="lazy"
          />
        )}
        <p className="product-detail-long-description">
          {product.longDescription}
        </p>

        {product.features && product.features.length > 0 && (
          <div className="product-features">
            <h3>Key Features</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>
                  <FaCheckCircle className="feature-icon" /> {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.benefits && product.benefits.length > 0 && (
          <div className="product-benefits">
            <h3>Benefits</h3>
            <ul>
              {product.benefits.map((benefit, index) => (
                <li key={index}>
                  <FaCheckCircle className="benefit-icon" /> {benefit}
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.installationOverview && (
          <div className="installation-overview">
            <h3>
              <FaTools /> How We Make Installation Easy
            </h3>
            <p>{product.installationOverview}</p>
          </div>
        )}

        <div className="product-cta">
          <p>Ready to power up with this solution?</p>
          <button onClick={() => navigate("/contact")}>Get a Free Quote</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
