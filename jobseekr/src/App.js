import React,{ createContext, useState } from 'react';
import { BrowserRouter ,Switch, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Logout from "./components/Logout";
import { Grid, makeStyles } from "@material-ui/core";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import MessagePopup from "./lib/MessagePopup";
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
          <Navbar />
        </Grid>
        <Grid item className={classes.body}>
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route exact path="/login">
              <LoginForm />
            </Route>
            <Route exact path="/signup">
              <RegistrationForm />
            </Route>
             <Route exact path="/logout">
              <Logout />
            </Route>
            {/*<Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/applications">
              <Applications />
            </Route> */}
           
            {/* <Route exact path="/profile">
              {userType() === "recruiter" ? (
                <RecruiterProfile />
              ) : (
                <Profile />
              )}
            </Route>
            <Route exact path="/addjob">
              <CreateJobs />
            </Route>
            <Route exact path="/myjobs">
              <MyJobs />
            </Route>
            <Route exact path="/job/applications/:jobId">
              <JobApplications />
            </Route>
            <Route exact path="/employees">
              <AcceptedApplicants />
            </Route>
            <Route>
              <ErrorPage />
            </Route> */}
          </Switch>
        </Grid>
      </Grid>
      <MessagePopup
        open={popup.open}
        setOpen={(status) =>
          setPopup({
            ...popup,
            open: status,
          })
        }
        severity={popup.severity}
        message={popup.message}
      />
    </SetPopupContext.Provider>
      </BrowserRouter>
  );
};

export default App;
