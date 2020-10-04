import React, { useState, useContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Drawer from "@material-ui/core/Drawer";
import InfoIcon from "@material-ui/icons/Info";
import { useHistory } from "react-router-dom";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { LocalDiningOutlined } from "@material-ui/icons";
import { Redirect } from "react-router-dom";
import { StateContext } from "../../context/StateContext";
const useStyles = makeStyles({
  drawer: {
    width: "250px",
  },
});

function Navbar() {
  const { isAuthenticated, logOut, user } = useContext(StateContext);
  let history = useHistory();

  const classes = useStyles();
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  const itemsList = [
    {
      text: "About",
      icon: <InfoIcon />,
      onClick: () => history.push("/about"),
    },
    {
      text: "Logout",
      icon: <PowerSettingsNewIcon />,
      onClick: () => logOut(),
    },
  ];

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>ELA K P EI</Button>
      <Drawer
        anchor={"right"}
        open={state}
        className={classes.drawer}
        onClose={toggleDrawer(false)}
      >
        <div onClick={toggleDrawer(false)}>
          <List>
            {itemsList.map((item, index) => {
              const { text, icon, onClick } = item;
              return (
                <ListItem button key={text} onClick={onClick}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItem>
              );
            })}
          </List>
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
