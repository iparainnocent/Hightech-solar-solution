import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

const addMessage = createAsyncThunk(
  "contact/addMessage",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post("/contact/contact", formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.msg || "Failed to send message"
      );
    }
  }
);

const fetchMessages = createAsyncThunk(
  "contact/fetchMessages",
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    try {
      const response = await api.get("/contact/contact", {
        headers: {
          Authorization: `Bearer ${token?.trim()}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.msg || "Failed to fetch messages"
      );
    }
  }
);

const deleteMessage = createAsyncThunk(
  "contact/deleteMessage",
  async (id, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    try {
      await api.delete(`/contact/contact/${id}`, {
        headers: {
          Authorization: `Bearer ${token?.trim()}`,
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.msg || "Failed to delete message"
      );
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    messages: [],
    loading: false,
    error: null,
    successMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = "";
      })
      .addCase(addMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(addMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteMessage.fulfilled, (state, action) => {
        state.messages = state.messages.filter(
          (msg) => msg.id !== action.payload
        );
      })
      .addCase(deleteMessage.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default contactSlice.reducer;
export { addMessage, fetchMessages, deleteMessage };
