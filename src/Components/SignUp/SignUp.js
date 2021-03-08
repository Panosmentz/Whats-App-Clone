import React, { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link, Redirect } from "react-router-dom";
import { StateContext } from "../../context/StateContext";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  fname: yup
    .string("Enter your first name")
    .max(20)
    .required("First Name is required"),
  lname: yup
    .string("Enter your last name")
    .max(20)
    .required("Last Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
  password2: yup
    .string("Enter your password again")
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
    marginTop: "30px",
    width: "100%",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#00a87e",
  },
  button: {
    color: "#00a87e",
  },
  textfield: {
    "& .MuiOutlinedInput-input": {
      color: "#00a87e",
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

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      password2: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (formik.values.password !== formik.values.password2) {
        alert("Passwords don't match");
      } else {
        signUpEmailPwd(values);
      }
    },
  });

  const { signUpEmailPwd, registration } = useContext(StateContext);
  const classes = useStyles();

  if (registration) {
    return <Redirect to="/" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className={classes.typography} component="h1" variant="h5">
          Sign up
        </Typography>

        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.textfield}
                variant="outlined"
                fullWidth
                id="fname"
                label="First Name"
                name="fname"
                autoComplete="fname"
                value={formik.values.fname}
                onChange={formik.handleChange}
                error={formik.touched.fname && Boolean(formik.errors.fname)}
                helperText={formik.touched.fname && formik.errors.fname}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.textfield}
                variant="outlined"
                fullWidth
                id="lname"
                label="Last Name"
                name="lname"
                autoComplete="lname"
                value={formik.values.lname}
                onChange={formik.handleChange}
                error={formik.touched.lname && Boolean(formik.errors.lname)}
                helperText={formik.touched.lname && formik.errors.lname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textfield}
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textfield}
                variant="outlined"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textfield}
                variant="outlined"
                fullWidth
                name="password2"
                label="Confirm Password"
                type="password"
                id="password2"
                autoComplete="current-password"
                value={formik.values.password2}
                onChange={formik.handleChange}
                error={
                  formik.touched.password2 && Boolean(formik.errors.password2)
                }
                helperText={formik.touched.password2 && formik.errors.password2}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
        <Grid container justify="flex-center">
          <Grid item>
            <Button
              className={classes.button}
              component={Link}
              to="/signin"
              color="primary"
            >
              Already have an account? Sign in
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
