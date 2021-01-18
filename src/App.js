import React, { useEffect, useState, useContext, Fragment } from "react";
import "./App.css";
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

function App() {
  const { currentUser, loadUser, isAuthenticated } = useContext(StateContext);

  return (
    <StateProvider>
      <div className="app">
        <div className="app__body">
          <Router>
            <Navbar />

            <Route exact path="/" component={SignIn} />
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
