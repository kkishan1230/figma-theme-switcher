import { configureStore } from "@reduxjs/toolkit";
import themeChanger from "../feature/counter/themeChanger";

export const store = configureStore({
  reducer: {
    themeChanger: themeChanger,
  },
});
