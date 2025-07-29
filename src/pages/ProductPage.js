// src/pages/ProductPage.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./ProductPage.css";

// Import your product images from assets
// Make sure these filenames exactly match your actual image files in src/assets/
import solarPanelImage from "../assets/pannels.jpg"; // Example: your image for solar panels
import inverterImage from "../assets/inv.jpg"; // Example: your image for inverter
import ledLightsImage from "../assets/lede.jpg"; // Example: your image for LED lights

const products = [
  {
    id: 1,
    name: "Solar Panel Kit",
    // Add a short description for display on the product page
    description:
      "High-efficiency monocrystalline solar panels for residential and commercial use.",
    image: solarPanelImage, // Assign the imported image variable
    slug: "solar-panel-kit",
  },
  {
    id: 2,
    name: "Inverter System",
    description:
      "Advanced inverters to convert solar DC power to usable AC power, with battery compatibility.",
    image: inverterImage, // Assign the imported image variable
    slug: "inverter-system",
  },
  {
    id: 3,
    name: "Solar LED Lights",
    description:
      "Sustainable, energy-saving LED lights for outdoor illumination, with automatic operation.",
    image: ledLightsImage, // Assign the imported image variable
    slug: "solar-led-lights",
  },
];

const ProductPage = () => {
  // No need for useNavigate here if we're wrapping the card with <Link>

  return (
    <div className="product-page-container">
      <h1 className="product-page-title">Our Solar Products</h1>
      <p className="product-page-subtitle">
        Discover our range of innovative and sustainable solar energy solutions.
      </p>

      <div className="products-grid">
        {products.map((product) => (
          // Wrap the entire product card with a Link component
          <Link
            to={`/products/${product.slug}`}
            key={product.id}
            className="product-card"
          >
            <div className="product-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                loading="lazy"
              />
            </div>
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>{" "}
            {/* Display the short description */}
            {/* The "Learn More" button is now effectively replaced by the entire card being clickable via <Link> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
