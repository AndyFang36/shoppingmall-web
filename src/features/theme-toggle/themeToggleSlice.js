import {createSlice} from '@reduxjs/toolkit'

function getPreTheme() {
    const prevThemeMode = localStorage.getItem("theme");
    if (prevThemeMode !== null && prevThemeMode !== "") {
        return prevThemeMode;
    } else {
        return "light";
    }
}

export const themeToggleSlice = createSlice({
    name: "theme",
    initialState: {
        theme: getPreTheme()
    },
    reducers: {
        changeTheme: (state) => {
            state.theme === "light" ? state.theme = "dark" : state.theme = "light";
            localStorage.setItem("theme", state.theme);
        },
    },
});

export const {changeTheme} = themeToggleSlice.actions;

export default themeToggleSlice.reducer;