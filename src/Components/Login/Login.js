import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Login.css";
//import { useParams } from "react-router-dom";
import { auth, provider } from "../../config/firebase";
import { actionTypes } from "../../context/reducer";
//import { useStateValue } from "../../context/StateProvider";
import { StateContext } from "../../context/StateContext";

function Login() {
  // const { roomId } = useParams();
  const { currentUser, isAuthenticated, signIn } = useContext(StateContext);

  //  const signIn = () => {
  //    auth
  //      .signInWithPopup(provider)
  //      .then((result) => {
  //        dispatch({
  //          type: actionTypes.SET_USER,
  //          user: result.user,
  //          isAuthenticated: true,
  //        });
  //
  //        auth.onAuthStateChanged((user) => {
  //          if (user) {
  //            console.log(user);
  //            console.log(isAuthenticated);
  //            //    localStorage.setItem(
  //            //     "isAuthenticated",
  //            //     JSON.parse(isAuthenticated)
  //            //   );
  //          } else {
  //            localStorage.removeItem("isAuthenticated");
  //          }
  //        });
  //      })
  //      .catch((error) => alert(error.message));
  //  };
  const onSubmit = async (e) => {
    e.preventDefault();
    signIn();
  };

  if (isAuthenticated === true) {
    return <Redirect to="/rooms/" />;
  }

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/1200px-WhatsApp_logo-color-vertical.svg.png" />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>

        <Button type="submit" onClick={onSubmit}>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
