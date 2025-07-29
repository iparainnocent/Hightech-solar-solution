// src/pages/AdminDashboard.js
import React from "react";
import "./AdminDashboard.css";
import ownerProfilePic from "../assets/owner-profile.jpg";

const AdminDashboard = () => {
  const owner = {
    name: "Darrow Nzau", // <--- Changed the name here!
    title: "Founder & CEO, Hightech Solar Solution",
    description:
      "Darrow Nzau is the visionary leader behind Hightech Solar Solution. With over 15 years of experience in renewable energy, Darrow is passionate about delivering sustainable power solutions and driving innovation in the solar industry. His dedication to customer satisfaction and environmental stewardship is at the core of the company's mission.",
    profilePic: ownerProfilePic,
    // You could add more details here, like contact info, social links, etc.
  };

  return (
    <div className="admin-dashboard-container" data-aos="fade-in">
      <h1 className="dashboard-title">Admin Dashboard</h1>

      <div
        className="owner-profile-card"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <img
          src={owner.profilePic}
          alt={`${owner.name}'s profile`}
          className="profile-pic"
        />
        <h2 className="profile-name">{owner.name}</h2>
        <p className="profile-title">{owner.title}</p>
        <p className="profile-description">{owner.description}</p>

        <div className="dashboard-quick-links">
          <button
            onClick={() => alert("View all messages!")}
            className="quick-link-btn"
          >
            View Messages
          </button>
          <button
            onClick={() => alert("Manage products!")}
            className="quick-link-btn"
          >
            Manage Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
