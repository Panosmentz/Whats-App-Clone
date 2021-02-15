import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Created by © "}
      <Link color="inherit" href="https://determined-saha-b25d49.netlify.app/">
        Panagiotis Mentzelopoulos
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
