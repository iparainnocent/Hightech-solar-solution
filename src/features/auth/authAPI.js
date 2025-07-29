// src/features/auth/authAPI.js
import axios from "../../services/axios";

export const loginUser = async (credentials) => {
  const response = await axios.post("/api/login", credentials);
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await axios.post("/api/register", userData);
  return response.data;
};
