import React, { useContext, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { StateContext } from "../context/StateContext";

//const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
//  const { isAuthenticated } = useContext(StateContext);
//  //const isAuth = localStorage.getItem("isAuthenticated");
//
//  return (
//    <Route
//      {...rest}
//      render={(routeProps) =>
//        isAuthenticated ? (
//          <RouteComponent {...routeProps} />
//        ) : (
//          <Redirect to="/" />
//        )
//      }
//    />
//  );
//};

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
