import React, { useState, useContext, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Drawer from "@material-ui/core/Drawer";
import InfoIcon from "@material-ui/icons/Info";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";
import ChatIcon from "@material-ui/icons/Chat";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { LocalDiningOutlined } from "@material-ui/icons";
import { Redirect } from "react-router-dom";
import { StateContext } from "../../context/StateContext";
import { Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

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
  },
  button: {
    color: "green",
  },
});

function Navbar() {
  const { isAuthenticated, logOut, loadUser } = useContext(StateContext);
  let history = useHistory();

  //let isAuth = localStorage.getItem("isAuthenticated");

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
      text: "About",
      icon: <InfoIcon />,
      onClick: () => history.push("/about"),
    },
    {
      text: "Chat",
      icon: <ChatIcon />,
      onClick: () => {
        history.push("/rooms");
      },
    },
    {
      text: "Logout",
      icon: <PowerSettingsNewIcon />,
      onClick: () => {
        logOut();
        history.push("/login");
        console.log("User has signed out - or has he?");
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
      text: "About",
      icon: <InfoIcon />,
      onClick: () => history.push("/about"),
    },
    {
      text: "Login",
      icon: <LockOpenIcon />,
      onClick: () => history.push("/login"),
    },
    {
      text: "Register",
      icon: <AccountBoxIcon />,
      onClick: () => {
        history.push("/register");
      },
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

//  const list = () => (
//    <div onClick={toggleDrawer(false)}>
//      <List>
//        <ListItem button>it works??</ListItem>
//      </List>
//    </div>
//  );
//
//  return (
//    <div>
//      <Button onClick={toggleDrawer(true)}>Open shit</Button>
//      <Drawer anchor={"top"} open={state} onClose={toggleDrawer(false)}>
//        {list()}
//      </Drawer>
//    </div>
//  );
//}

export default Navbar;
