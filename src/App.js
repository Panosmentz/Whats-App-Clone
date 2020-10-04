import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import About from "./Components/About/About";
import Register from "./Components/Register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { StateProvider, StateContext } from "./context/StateContext";

import { auth } from "./config/firebase";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  // const { roomId } = useParams();

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     console.log("this is user from App useEffect: ", user);
  //     if (user) localStorage.setItem("isAuthenticated", true);
  //     else localStorage.setItem("isAuthenticated", false);
  //   });
  // }, []);
  const { currentUser } = useContext(StateContext);

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     console.log("this is the firebase user from App useEffect: ", user);
  //     if (user) {
  //       localStorage.setItem("isAuthenticated", true);
  //       const currentUser = user;
  //       console.log(
  //         "this is the context user from App useEffect: ",
  //         currentUser
  //       );
  //     } else {
  //       localStorage.setItem("isAuthenticated", false);
  //     }
  //   });
  // }, []);

  // return (
  //   <StateProvider>
  //     <div className="app">
  //       <Navbar />
  //       {!user ? (
  //         <Login />
  //       ) : (
  //         <div className="app__body">
  //           <Router>
  //             <Switch>
  //               <Route path="/rooms/:roomId">
  //                 <Sidebar />
  //                 <Chat />
  //               </Route>
  //               <Route path="/"></Route>
  //             </Switch>
  //           </Router>
  //         </div>
  //       )}
  //     </div>
  //   </StateProvider>
  // );

  // return (
  //   <StateProvider>
  //     <div className="app">
  //       <div className="app__body">
  //         <Router>
  //           <Switch>
  //             <Route exact path="/" component={Login} />
  //             <Route exact path="/register" component={Register} />
  //             <Route path="/rooms/" component={Sidebar} />
  //             <Route path="/rooms/:roomId" component={Chat} />
  //             <Route component={NotFound} />
  //           </Switch>
  //         </Router>
  //       </div>
  //     </div>
  //   </StateProvider>
  // );
  // return (
  //   <StateProvider>
  //     <div className="app">
  //       <div className="app__body">
  //         <Router>
  //           <Route exact path="/" component={Login} />
  //           <Route exact path="/register" component={Register} />
  //           <Sidebar />
  //           <Switch>
  //             <Route path="/rooms/:roomId">
  //               <Chat />
  //             </Route>
  //
  //             <Route component={NotFound} />
  //           </Switch>
  //         </Router>
  //       </div>
  //     </div>
  //   </StateProvider>
  // );
  return (
    <StateProvider>
      <div className="app">
        <div className="app__body">
          <Router>
            <Navbar />
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/about" component={About} />
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </StateProvider>
  );

  //  return (
  //    <div className="app">
  //      <div className="app__body">
  //        <Router>
  //          <Navbar />
  //          <Route exact path="/" component={Login} />
  //          <Route exact path="/register" component={Register} />
  //          <Route exact path="/about" component={About} />
  //          <Sidebar />
  //          <Switch>
  //            <PrivateRoute path="/rooms/:roomId" component={Chat} />
  //          </Switch>
  //        </Router>
  //      </div>
  //    </div>
  //  );
}

export default App;
