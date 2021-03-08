import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";
import ChatIcon from "@material-ui/icons/Chat";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { StateContext } from "../../context/StateContext";
import { Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ContactMailIcon from "@material-ui/icons/ContactMail";

const useStyles = makeStyles({
  root: {},
  title: {
    flexGrow: 1,
  },
  paper: {
    background: "#00a87e",
    color: "#fff",
    width: "30%",
    height: "100%",
    display: "flex",
  },
  button: {
    color: "green",
  },
});

function Navbar() {
  const { isAuthenticated, logOut } = useContext(StateContext);
  let history = useHistory();
  const classes = useStyles();
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  const itemsListAuthenticated = [
    {
      text: "Home",
      icon: <HomeIcon />,
      onClick: () => history.push("/"),
    },

    {
      text: "Chat",
      icon: <ChatIcon />,
      onClick: () => {
        history.push("/rooms");
      },
    },
    {
      text: "Contact",
      icon: <ContactMailIcon />,
      onClick: () => history.push("/contact"),
    },
    {
      text: "Logout",
      icon: <PowerSettingsNewIcon />,
      onClick: () => {
        logOut();
        history.push("/signin");
      },
    },
  ];

  const itemsListUnAuthenticated = [
    {
      text: "Home",
      icon: <HomeIcon />,
      onClick: () => history.push("/"),
    },

    {
      text: "Sign In",
      icon: <LockOpenIcon />,
      onClick: () => history.push("/signin"),
    },
    {
      text: "Sign Up",
      icon: <AccountBoxIcon />,
      onClick: () => {
        history.push("/signup");
      },
    },
    {
      text: "Contact",
      icon: <ContactMailIcon />,
      onClick: () => history.push("/contact"),
    },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" style={{ backgroundColor: "#00a87e" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} align="center">
            WhatsApp
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor={"left"}
        open={state}
        classes={{ paper: classes.paper }}
        onClose={toggleDrawer(false)}
      >
        <div onClick={toggleDrawer(false)}>
          {isAuthenticated ? (
            <List>
              {itemsListAuthenticated.map((item, index) => {
                const { text, icon, onClick } = item;
                return (
                  <ListItem button key={text} onClick={onClick}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <List>
              {itemsListUnAuthenticated.map((item, index) => {
                const { text, icon, onClick } = item;
                return (
                  <ListItem button key={text} onClick={onClick}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                  </ListItem>
                );
              })}
            </List>
          )}
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
