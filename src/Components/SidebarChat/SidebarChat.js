import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import db from "../../config/firebase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  sidebarChat: {
    display: "flex",
    padding: "10px",
    cursor: "pointer",
    color: "#fff",
    borderBottom: "1px solid #42413e",
    "&:hover": {
      backgroundColor: "#636262",
    },
  },
  chatInfo: {
    marginLeft: "15px",
    "& h2": {
      fontSize: "20px",
      marginBottom: "8px",
    },
  },
});

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");
  const classes = useStyles();

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for new chat room");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link
      to={`/rooms/${id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className={classes.sidebarChat}>
        <Avatar
          src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg
`}
        />
        <div className={classes.chatInfo}>
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className={classes.sidebarChat}>
      <h2>Add New Room</h2>
    </div>
  );
}

export default SidebarChat;
