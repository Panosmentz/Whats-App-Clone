import React, { createContext, useReducer, useEffect, useState } from "react";
import reducer from "./reducer";
import { Redirect } from "react-router-dom";
import { auth, provider } from "../config/firebase";

const initialState = {
  isAuthenticated: false,
  currentUser: null,
};

export const StateContext = createContext(initialState);

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

   useEffect(() => {
     auth.onAuthStateChanged((user) => {
       
       if (user) {
         localStorage.setItem("isAuthenticated", true );
         dispatch({
           type: "LOAD_USER",
           payload: user,
         })
         //      currentUser = user;
       } else {
         localStorage.setItem("isAuthenticated", false );
         //     currentUser = null;
       }
     });
   }, []);

  //useEffect(() => {
  //  auth.onAuthStateChanged((user) => {
  //    dispatch({
  //      type: "LOAD_USER",
  //      payload: user,
  //    });
  //    if (user) {
  //      localStorage.setItem("isAuthenticated", true);
  //    } else {
  //      localStorage.setItem("isAuthenticated", false);
  //    }
  //  });
  //}, []);

  //useEffect(() => {
  //  auth.onAuthStateChanged((user) => {
  //    dispatch({
  //      type: "LOAD_USER",
  //      payload: user,
  //    });
  //    console.log("This the LOAD_USER dispatched", user);
  //    if (user) {
  //      localStorage.setItem("isAuthenticated", true);
  //    } else {
  //      localStorage.setItem("isAuthenticated", false);
  //    }
  //  });
  //}, []);

//  async function loadUser() {
//    try{
//    const user = auth.currentUser;
//    dispatch({
//      type: "LOAD_USER",
//      payload: userR,
//    });
//  }catch (error) {
//    alert(error);
//  }
//}

  async function signIn() {
    try {
      await auth.signInWithPopup(provider).then((result) => {
        dispatch({
          type: "SET_USER",
          payload: result.user,
        });
      });
    } catch (error) {
      alert(error);
    }
  }

  async function logOut() {
    try {
      await auth.signOut()
      dispatch({type: "SIGN_OUT"});
    } catch (error) {
      alert(error);
    }
  }
  //    .catch((error) => alert(error.message));

  return (
    <StateContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        currentUser: state.currentUser,
        signIn,
        logOut,
//        loadUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
