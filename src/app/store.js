import { configureStore } from "@reduxjs/toolkit";
import themeToggleReducer from "../features/theme-toggle/themeToggleSlice";

export default configureStore({
    reducer: {
        themeToggle: themeToggleReducer
    },
})