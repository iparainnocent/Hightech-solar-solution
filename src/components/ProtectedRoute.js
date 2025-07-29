// src/components/ProtectedRoute.js
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { token, user } = useSelector((state) => state.auth);

  if (!token) {
    // If no token, redirect to login page
    return <Navigate to="/login" replace />; // 'replace' avoids adding to history
  }

  // Check if adminOnly is true AND the user is not an admin
  if (adminOnly && (!user || !user.is_admin)) {
    // If not authorized for admin, redirect to home or a specific unauthorized page
    return <Navigate to="/" replace />; // Redirect to home for non-admins trying to access adminOnly routes
  }

  // If token exists and (if adminOnly, user is admin), render children
  return children;
};

export default ProtectedRoute;
