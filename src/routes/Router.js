// src/routes/Router.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashboard from "../pages/AdminDashboard";
import AdminMessages from "../pages/AdminMessages";
import BookingPage from "../pages/BookingPage";
import ProductPage from "../pages/ProductPage";
import ProductDetail from "../pages/ProductDetail";
import ServicesPage from "../pages/ServicesPage";

import ProtectedRoute from "../components/ProtectedRoute"; // <--- Ensure this import is correct

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/services" element={<ServicesPage />} />

        {/* Protected Routes for Admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/messages"
          element={
            <ProtectedRoute>
              <AdminMessages />
            </ProtectedRoute>
          }
        />

        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
