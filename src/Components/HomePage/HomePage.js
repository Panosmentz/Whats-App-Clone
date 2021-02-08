import React from "react";
import SignIn from "../Login/Login";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
});

function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SignIn />
    </div>
  );
}

export default HomePage;
