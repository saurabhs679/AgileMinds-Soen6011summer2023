import React,{ createContext, useState } from 'react';
import { BrowserRouter ,Switch, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import { Grid, makeStyles } from "@material-ui/core";
const useStyles = makeStyles(
  (theme) => ({
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "98vh",
    paddingTop: "64px",
    boxSizing: "border-box",
    width: "100%",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "red"
        }
      }
    }
  }
}));

export const SetPopupContext = createContext();
const TITLE ="JobSeekr"
const App = () => {
  const classes = useStyles();
  const [popup, setPopup] = useState({
    open: false,
    severity: "",
    message: "",
  });

  return (
    <BrowserRouter>
      <SetPopupContext.Provider value={setPopup}>
      
      <Grid container direction="column">
        <Grid item xs>
        {/* Navigation component */}
        </Grid>
        <Grid item className={classes.body}>
          <Switch>
            <Route exact path="/">
         {/* Dashboard component*/}
            </Route>
            <Route exact path="/login">
              <LoginForm />
            </Route>
            <Route exact path="/signup">
              <RegistrationForm />
            </Route>
             <Route exact path="/logout">
              {/* Logout component */}
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </SetPopupContext.Provider>
      </BrowserRouter>
  );
};

export default App;
