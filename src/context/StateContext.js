import React, { createContext, useReducer, useEffect, useState } from "react";
import reducer from "./reducer";
import { Redirect } from "react-router-dom";
import { auth, provider } from "../config/firebase";

const initialState = {
  isAuthenticated: false,
  currentUser: null,
  registration: false,
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


  async function signInGoogle() {
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

  async function signIn(email,password) {
    try {
      await auth.signInWithEmailAndPassword(email,password).then((result) => {
        dispatch({
          type: "SET_USER",
          payload: result.user,
        });
      });
    } catch (error) {
      alert(error);
    }
  }
  async function signUpEmailPwd({fname, lname, email, password}){
    try {
      await auth.createUserWithEmailAndPassword(email,password).then((userCredential)=>{
        if(userCredential.user){
          userCredential.user.updateProfile({
            displayName: fname + " " + lname
          }).then(()=>{
            dispatch({
              type: "SIGN_UP_EMAIL_PWD",
              payload: userCredential.user,
            });
          })
        };
        })
      }catch(error){
        alert(error);
      };
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
        registration: state.registration,
        signIn,
        signInGoogle,
        logOut,
        signUpEmailPwd,
//        loadUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
