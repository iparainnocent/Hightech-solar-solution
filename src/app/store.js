import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import contactReducer from "../features/contact/contactSlice";
import portfolioReducer from "../features/portfolio/portfolioSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    contact: contactReducer,
    portfolio: portfolioReducer, // ✅ must be here
  },
});

export default store;
