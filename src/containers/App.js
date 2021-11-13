/** libs */
import {useSelector} from "react-redux";
import {BrowserRouter, useHistory} from "react-router-dom";
/** containers */
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
/** style */
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/styles";
import {lightTheme} from "../styles/themes/lightTheme";
import {darkTheme} from "../styles/themes/darkTheme";
import '../styles/App.css';

export default function App() {
    const theme = useSelector((state) => (state["themeToggle"].theme));

    return (
        <ThemeProvider theme={(theme === "light") ? lightTheme : darkTheme}>
            <BrowserRouter history={useHistory()}>
                <CssBaseline/>
                <Header/>
                <Main/>
                <Footer/>
            </BrowserRouter>
        </ThemeProvider>
    );
}