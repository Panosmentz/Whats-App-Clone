import React, { useEffect, useState, useContext, Fragment } from "react";
import Navbar from "./Components/Navbar/Navbar";

import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";
import SignIn from "./Components/Login/Login";
import HomePage from "./Components/HomePage/HomePage";
import NotFound from "./Components/NotFound/NotFound";
import About from "./Components/About/About";

import Routes from "./routes/Routes";
import SignUp from "./Components/Register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { StateProvider, StateContext } from "./context/StateContext";

import { auth } from "./config/firebase";
import PrivateRoute from "./routes/PrivateRoute";
import { makeStyles } from "@material-ui/core/styles";

//#464775

const useStyles = makeStyles({
  app: {
    display: "grid",
    placeItems: "center",
    backgroundColor: "#2d2c2c",
    height: "100vh",
  },
  appBody: {
    display: "flex",
    height: "100%",
    width: "100%",
    marginTop: "50px",
    backgroundColor: "#2d2c2c",
  },
});

function App() {
  const { currentUser, loadUser, isAuthenticated } = useContext(StateContext);
  const classes = useStyles();

  return (
    <StateProvider>
      <div className={classes.app}>
        <div className={classes.appBody}>
          <Router>
            <Navbar />

            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/about" component={About} />

            <PrivateRoute path="/rooms/" component={Sidebar} />
            <PrivateRoute path="/rooms/:roomId" component={Chat} />
          </Router>
        </div>
      </div>
    </StateProvider>
  );
}

export default App;
