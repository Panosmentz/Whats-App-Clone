import React, { useState, useEffect, useContext } from "react";

import { Avatar, IconButton } from "@material-ui/core";
import DonutLarge from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVert from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import SidebarChat from "../SidebarChat/SidebarChat";
import db from "../../config/firebase";
//import { useStateValue } from "../../context/StateProvider";
import { StateContext } from "../../context/StateContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  sidebar: {
    flex: 0.35,
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    borderRight: "1px solid lightgray",
  },
  headerRight: {
    display: "flex",
    alignItems: "space-between",
    minWidth: "10vw",
    "& .MuiSvgIcon-root": {
      marginRight: "1vw",
      fontSize: "24px",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f6f6f6",
    height: "40px",
    padding: "10px",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    height: "35px",
    borderRadius: "20px",
    "& input": {
      border: "none",
      marginLeft: "10px",
    },
    "& .MuiSvgIcon-root": {
      color: "gray",
    },
  },
  chats: {
    flex: 1,
    backgroundColor: "white",
    overflow: "hidden",
  },
});

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  //const [{ user }, dispatch] = useStateValue();
  const { currentUser } = useContext(StateContext);
  const classes = useStyles();

  useEffect(() => {
    console.log("this is the user from Sidebar.js", currentUser);
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className={classes.sidebar}>
      <div className={classes.header}>
        <Avatar src={currentUser?.photoURL} />
        <div className={classes.headerRight}>
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className={classes.search}>
        <div className={classes.searchContainer}>
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className={classes.chats}>
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
