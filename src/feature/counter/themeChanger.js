import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "blueTheme",
};
export const themeChanger = createSlice({
  name: "theme changer",
  initialState,
  reducers: {
    blueTheme: (state) => {
      state.value = "blueTheme";
    },
    darkTheme: (state) => {
      state.value = "darkTheme";
    },
    darkPink: (state) => {
      state.value = "darkPink";
    },
  },
});

export const { blueTheme, darkTheme, darkPink } = themeChanger.actions;

export default themeChanger.reducer;
