import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    {
      id: 1,
      title: "Solar Panel Installation",
      description: "Installed 5KW solar system for a client in Nairobi.",
    },
    {
      id: 2,
      title: "Battery Backup System",
      description: "Set up hybrid solar + battery storage for rural homes.",
    },
  ],
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
});

export default portfolioSlice.reducer;
