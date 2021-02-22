import React, { useState, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Redirect, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { StateContext } from "../../context/StateContext";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(1),
  },
  button: {
    color: "#00a87e",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#00a87e",
  },
  google: {
    marginTop: theme.spacing(3),
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

function ForgotPassword() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      resetPassword(formik.values.email);
    },
  });

  const { resetPassword } = useContext(StateContext);
  const classes = useStyles();
  //const [formData, setFormData] = useState({ email: "" });

  //const { email } = formData;

  //const onChange = (e) =>
  //  setFormData({ ...formData, [e.target.name]: e.target.value });

  //const onSubmit = async (e) => {
  //  e.preventDefault();
  //  resetPassword(email);
  //};

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className={classes.typography} component="h1" variant="h5">
          Password Reset
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            className={classes.textfield}
            variant="outlined"
            margin="normal"
            required
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            RESET
          </Button>
        </form>
        <Grid container>
          <Grid item xs>
            <Button className={classes.button} component={Link} to="/login">
              Back to log in
            </Button>
          </Grid>
          <Grid item>
            <Button className={classes.button} component={Link} to="/register">
              Don't have an account? Sign Up
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default ForgotPassword;
