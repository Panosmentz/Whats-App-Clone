import React, { useEffect, useState, useContext, Fragment } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Navbar2 from "./Components/Navbar/Navbar2";
import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";
import Login from "./Components/Login/Login";
import HomePage from "./Components/HomePage/HomePage";
import NotFound from "./Components/NotFound/NotFound";
import About from "./Components/About/About";
import Register from "./Components/Register/Register";
import Routes from "./routes/Routes"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { StateProvider, StateContext } from "./context/StateContext";

import { auth } from "./config/firebase";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const { currentUser, loadUser, isAuthenticated } = useContext(StateContext);


 // return(
 //   <StateProvider>
 //     <Router>
 //       <Fragment>
 //         <Navbar>
 //           <Route component={Routes} />
 //         </Navbar>
 //       </Fragment>
 //     </Router>
 //   </StateProvider>
 // )

//useEffect(() => {
//  auth.onAuthStateChanged((user) => {
//    loadUser(user);
//    console.log("This is the context user from App.js : ", currentUser);
//    console.log(
//      "This is the context isAuthenticated from App.js : ",
//      isAuthenticated
//    );
//  });
//}, []);


  return (
   
    <StateProvider>
      <div className="app">
        <div className="app__body">
          <Router>
            <Navbar />
           
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/about" component={About} />
           
            <PrivateRoute path="/rooms/" component={Sidebar} />
            <PrivateRoute path="/rooms/:roomId" component={Chat} />
            
          </Router>
        </div>
      </div>
    </StateProvider>
  );


 

  // return (
  //   <div className="app">
  //     <Navbar />
  //     {!currentUser ? (
  //       <Login />
  //     ) : (
  //       <div className="app__body">
  //         <Router>
  //           <Route exact path="/register" component={Register} />
  //           <Route exact path="/about" component={About} />
  //           <Sidebar />
  //           <Switch>
  //             <Route path="/rooms/:roomId">
  //               <Chat />
  //             </Route>
  //             <Route path="/">
  //               <Chat />
  //             </Route>
  //           </Switch>
  //         </Router>
  //       </div>
  //     )}
  //   </div>
  // );
}

export default App;
