import React from "react";
import SignIn from "../SignIn/SignIn";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Grid, Typography } from "@material-ui/core";
import Chat from "../../assets/chat.svg";
import Typewriter from "typewriter-effect";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  typography: {
    display: "flex",
    justifyContent: "center",
    fontSize: "90px",
    color: "#00a87e",
    fontFamily: "Amatic SC, cursive",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
  },
  loginContainer: {},
  footer: {
    backgroundColor: "#00a87e",
    display: "flex",
    justifyContent: "center",
    border: 0,
  },
});

function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.typography}>
          <Typewriter
            options={{
              strings: ["Hi there", "This is WhatsApp", "A clone..."],
              autoStart: true,
              loop: true,
            }}
          />
        </Grid>
        <Grid item lg={6} xs={12} className={classes.imageContainer}>
          <img src={Chat} width="500px" height="500px"></img>
        </Grid>
        <Grid item lg={6} xs={12} className={classes.loginContainer}>
          <SignIn />
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
