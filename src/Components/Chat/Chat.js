import React, { useEffect, useState, useContext, useRef } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVert from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { useParams } from "react-router-dom";
import db from "../../config/firebase";
import { StateContext } from "../../context/StateContext";
import firebase from "firebase";
import { makeStyles } from "@material-ui/core/styles";
import background from "../../assets/background.png";
import ReactDOM from "react-dom";

const useStyles = makeStyles({
  chat: {
    flex: 0.8,
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflowY: "auto",
  },
  header: {
    padding: "20px",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #42413e",
    color: "#fff",
  },
  headerInfo: {
    flex: 1,
    paddingLeft: "20px",
  },
  headerRight: {
    display: "flex",
    justifyContent: "space-between",
    minWidth: "100px",
  },
  body: {
    flex: 1,
    backgroundImage: `url(${background})`,
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
  },
  message: {
    position: "relative",
    fontSize: "16px",
    padding: "10px",
    backgroundColor: "#ededed",
    width: "fit-content",
    marginBottom: "30px",
  },
  name: {
    position: "absolute",
    top: "-15px",
    fontWeight: 800,
    fontSize: "x-small",
    color: "#2fa77e",
  },
  receiver: {
    marginLeft: "auto",
    backgroundColor: "#dcf8c6",
  },
  timestamp: {
    marginLeft: "10px",
    fontSize: "x-small",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "70px",
    borderTop: "1px solid #42413e",
    borderLeft: "1px solid #42413e",
    "& form": {
      flex: 1,
      display: "flex",
      "& input": {
        flex: 1,
        borderRadius: "30px",
        padding: "10px",
        border: "none",
        outline: "none",
      },
    },
    "& button": {
      display: "none",
    },
    "& .MuiSvgIcon-root": {
      color: "gray",
    },
  },
});

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  //const [{ user }, dispatch] = useStateValue();
  const { currentUser } = useContext(StateContext);
  const classes = useStyles();
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    console.log(roomId);
    console.log("this is the user from Chat component", currentUser);
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: currentUser.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className={classes.chat}>
      <div className={classes.header}>
        <Avatar
          src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg
`}
        />
        <div className={classes.headerInfo}>
          <h3>{roomName}</h3>
          <p>
            Last seen at {""}
            {new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toUTCString()}
          </p>
        </div>
        <div className={classes.headerRight}>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className={classes.body}>
        {messages.map((message) => (
          <p
            className={`${classes.message} ${
              message.name === currentUser.displayName && classes.receiver
            }`}
          >
            <span className={classes.name}>{message.name} </span>
            {message.message}
            <span className={classes.timestamp}>
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className={classes.footer}>
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Type a message"
          />
          <button type="submit" onClick={sendMessage}></button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
