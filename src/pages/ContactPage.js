// src/pages/ContactPage.js
import "./ContactPage.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../features/contact/contactSlice";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

// Import your background image (use the same as Home or a new one)
import contactPageBackground from "../assets/hero-background.jpg"; // <--- Assuming you use this path

const ContactPage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage(formData));
    alert("Message submitted successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    // Outer wrapper for the parallax background effect
    <div
      className="contact-page-wrapper"
      style={{ backgroundImage: `url(${contactPageBackground})` }}
    >
      <div className="contact-page-overlay"></div>{" "}
      {/* Overlay for readability */}
      {/* Main content area, positioned above the overlay */}
      <div className="contact-content-area">
        <div className="contact-page-inner" data-aos="fade-up">
          {" "}
          {/* Your existing contact page content container */}
          <h2>Contact Us</h2>
          <p className="contact-subtext">Let us know how we can help you</p>
          <div className="contact-main-grid">
            {" "}
            {/* New grid container for form and info */}
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              data-aos="zoom-in"
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
            <div className="contact-info" data-aos="fade-up">
              <h3>Contact Information</h3>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+254711622650">+254 711622650</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@hightechsolarsoln.com">
                  info@hightechsolarsoln.com
                </a>
              </p>
              <p>
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/254711622650"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </p>

              <p>
                <strong>Location:</strong> Nairobi, Kenya
              </p>
              <h4>Business Hours</h4>
              <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>

              {/* Google Maps Embed */}
              <div className="google-maps-embed">
                <p>
                  <strong>Find us:</strong>
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8152331011867!2d36.79979317502444!3d-1.285802235624769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10b7b13e3a4f%3A0x6a0f3d611c0f0e0e!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1722247402636!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="social-icons">
            <a
              href="https://facebook.com/HightechSolar"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/HightechSolar"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://wa.me/254711622650"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://linkedin.com/company/hightechsolar"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
