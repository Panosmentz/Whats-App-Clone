//import React, { createContext, useContext, useReducer } from "react";
//import reducer, { initialState, actionTypes } from "./reducer";
//import { auth, provider } from "../config/firebase";

//export const StateContext = createContext(initialState);
//
//export const StateProvider = ({ children }) => {
//  const [state, dispatch] = useReducer(reducer, initialState);
//
//  //export const StateProvider = ({ reducer, initialState, children }) => (
//  //  <StateContext.Provider value={useReducer(reducer, initialState)}>
//  //    {children}
//  //  </StateContext.Provider>
//  //);
//  const signIn = () => {
//    auth
//      .signInWithPopup(provider)
//      .then((result) => {
//        dispatch({
//          type: actionTypes.SET_USER,
//          user: result.user,
//          isAuthenticated: true,
//        });
//      })
//      .catch((error) => alert(error.message));
//  };
//
//  return (
//    <StateContext.Provider
//      value={{
//        isAuthenticated: state.isAuthenticated,
//        user: state.user,
//        signIn,
//      }}
//    >
//      {children}
//    </StateContext.Provider>
//  );
//};

//export const useStateValue = () => useContext(StateContext);

import React, { createContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import { auth, provider } from "../config/firebase";

const initialState = {
  currentUser: null,
  isAuthenticated: false,
};

export const StateContext = React.createContext(initialState);

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem("isAuthenticated", true);
      } else {
        localStorage.setItem("isAuthenticated", false);
      }
    });
  }, []);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          payload: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  const logOut = () => {
    auth
      .signOut()
      .then((result) => {
        dispatch({
          type: "LOG_OUT",
          payload: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <StateContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        currentUser: state.user,
        signIn,
        logOut,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
