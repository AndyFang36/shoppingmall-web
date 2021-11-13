import {Route, BrowserRouter, Switch, useHistory} from "react-router-dom";
/** pages */
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";
/** style */
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/styles";
import {lightTheme} from "../styles/themes/lightTheme";
import {darkTheme} from "../styles/themes/darkTheme";
import '../styles/App.css';

import Header from "./Header";
import {useSelector} from "react-redux";

export default function App() {
    const theme = useSelector((state) => (state["themeToggle"].theme));

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <BrowserRouter history={useHistory()}>
                <CssBaseline/>
                <Header/>
                <main>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/home" component={HomePage}/>
                        <Route exact path="/index" component={HomePage}/>
                        <Route exact path="/welcome" component={HomePage}/>
                        <Route exact path="/login" component={LoginPage}/>
                        <Route exact path="/register" component={RegisterPage}/>
                        <Route component={ErrorPage}/>
                    </Switch>
                </main>
                <footer> xxx </footer>
            </BrowserRouter>
        </ThemeProvider>
    );
}