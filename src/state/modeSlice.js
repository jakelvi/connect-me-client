// modeSlice.js

import { createSlice } from "@reduxjs/toolkit";
const initialState = "light";
export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode: (state) => {
      return state === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = modeSlice.actions;
export default modeSlice.reducer;
