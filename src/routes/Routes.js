import React from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import Chat from "../Components/Chat/Chat";
import Login from "../Components/Login/Login";
import HomePage from "../Components/HomePage/HomePage";
import NotFound from "../Components/NotFound/NotFound";
import Register from "../Components/Register/Register";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />

      <PrivateRoute exact path="/rooms/" component={Sidebar} />

      <PrivateRoute exact path="/rooms/:roomId" component={Chat} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
