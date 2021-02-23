import React, { useContext, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Redirect, Link } from "react-router-dom";
import { StateContext } from "../../context/StateContext";
import Grid from "@material-ui/core/Grid";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#00a87e",
  },
  typography: {
    color: "#00a87e",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  button: {
    color: "#00a87e",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#00a87e",
  },
  google: {
    color: "#00a87e",
  },
  textfield: {
    "& .MuiOutlinedInput-input": {
      color: "#fff",
    },
    "& .MuiInputLabel-root": {
      color: "#005c45",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#00a87e",
    },

    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#00a87e",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#00a87e",
    },
  },
}));

export default function SignIn() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signIn(formik.values.email, formik.values.password);
    },
  });
  const { currentUser, isAuthenticated, signIn, signInGoogle } = useContext(
    StateContext
  );
  const classes = useStyles();

  //const [formData, setFormData] = useState({ email: "", password: "" });

  // const { email, password } = formData;

  //const onChange = (e) =>
  //  setFormData({ ...formData, [e.target.name]: e.target.value });

  //const onSubmit = async (e) => {
  //  e.preventDefault();
  //  signIn(email, password);
  //};

  const onSubmitGoogle = async (e) => {
    e.preventDefault();
    signInGoogle();
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className={classes.typography} component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            className={classes.textfield}
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            className={classes.textfield}
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
        <Grid container>
          <Grid item xs>
            <Button
              className={classes.button}
              component={Link}
              to="/forgot-password"
            >
              Forgot Password?
            </Button>
          </Grid>
          <Grid item>
            <Button className={classes.button} component={Link} to="/register">
              Don't have an account? Sign Up
            </Button>
          </Grid>
        </Grid>
      </div>
      <Typography
        className={classes.google}
        component="h1"
        variant="h5"
        align="center"
      >
        or
      </Typography>
      <Grid container>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={onSubmitGoogle}
          startIcon={
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              width="40px"
              height="40px"
            ></img>
          }
        >
          Sign In with Google
        </Button>
      </Grid>
    </Container>
  );
}
