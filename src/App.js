import React, { useEffect, useState, useContext, Fragment } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";
import SignIn from "./Components/Login/Login";
import HomePage from "./Components/HomePage/HomePage";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import SignUp from "./Components/Register/Register";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateProvider, StateContext } from "./context/StateContext";
import PrivateRoute from "./routes/PrivateRoute";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  app: {
    display: "grid",
    placeItems: "center",
    backgroundColor: "#2d2c2c",
    height: "100vh",
  },
  appBody: {
    display: "flex",
    //height: "100%",
    width: "100%",

    backgroundColor: "#2d2c2c",
  },
});

function App() {
  const { currentUser, loadUser, isAuthenticated } = useContext(StateContext);
  const classes = useStyles();

  return (
    <StateProvider>
      <ToastContainer />
      <div className={classes.app}>
        <div className={classes.appBody}>
          <Router>
            <Navbar />

            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/forgot-password" component={ForgotPassword} />

            <PrivateRoute path="/rooms/" component={Sidebar} />
            <PrivateRoute path="/rooms/:roomId" component={Chat} />
          </Router>
        </div>
      </div>
    </StateProvider>
  );
}

export default App;
