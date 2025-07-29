// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:5000/api",
  headers: {
    "Content-Type": "application/json", // ✅ Ensure JSON body is sent correctly
  },
});

export default api;
