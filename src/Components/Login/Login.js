import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Login.css";
import { StateContext } from "../../context/StateContext";
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles({
  root: {
    backgroundColor: "#f8f8f8",
    height: "50vh",
    width: "50vw",
    placeItems: "center",
    display: "grid",
    padding: "100px",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0px 0px 12px -1px rgba(0, 0, 0, 0.75)"
  },

  img: {
    objectFit: "contain",
    height: "100px",
    marginBottom: "40px"
  },
  button: {
    color: "green"
  },
});


function Login() {
  // const { roomId } = useParams();
  const { currentUser, isAuthenticated, signIn } = useContext(StateContext);
  const classes = useStyles();


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
    console.log(
      "This is the current user from log in component : ",
      currentUser,
      isAuthenticated
    );
    return <Redirect to="/rooms/" />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <img className={classes.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/1200px-WhatsApp_logo-color-vertical.svg.png" />

        <h1>Sign in to WhatsApp</h1>


        <Button type="submit" onClick={onSubmit}>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
