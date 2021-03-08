import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { StateContext } from "../context/StateContext";

const PrivateRoute = (props) => {
  const { isAuthenticated } = useContext(StateContext);

  const isAuth = JSON.parse(localStorage.getItem("isAuthenticated"));

  return isAuth ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/",
        state: { from: props.location },
      }}
    />
  );
};

export default PrivateRoute;
