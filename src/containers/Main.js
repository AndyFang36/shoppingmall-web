import {Box, Container} from "@mui/material";
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ErrorPage from "../pages/ErrorPage";

export default function Main(){
    return(
      <Box component="main" sx={{backgroundColor:"background.default"}}>
          <Container>
              <Switch>
                  <Route exact path="/" component={HomePage}/>
                  <Route exact path="/home" component={HomePage}/>
                  <Route exact path="/index" component={HomePage}/>
                  <Route exact path="/welcome" component={HomePage}/>
                  <Route exact path="/login" component={LoginPage}/>
                  <Route exact path="/register" component={RegisterPage}/>
                  <Route component={ErrorPage}/>
              </Switch>
          </Container>
      </Box>
    );
}