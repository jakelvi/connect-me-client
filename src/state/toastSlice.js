// toastSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  message: "",
  severity: "info",
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    openToast: (state, action) => {
      state.isOpen = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity || "info";
    },
    closeToast: (state) => {
      state.isOpen = false;
      state.message = "";
      state.severity = "info";
    },
  },
});

export const { openToast, closeToast } = toastSlice.actions;
export default toastSlice.reducer;
