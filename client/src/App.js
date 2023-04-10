import "./App.css";
import React, { useEffect, useState } from "react";
import AllActivities from "./components/Activities";
import Routines from "./components/Routines";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import CreateRoutines from "./components/CreateRoutine";
import CreateActivity from "./components/CreateActivity";
import GetMyRoutines from "./components/MyRoutines";
import { Routes, Route } from "react-router-dom";

function App() {
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [loggedIn, setLoggedIn] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {}, [loggedIn]);
  return (
    <div className="App">
      {<h1>Welcome to Andrew's Fitness Tracker</h1>}
      <div className="AppNav">
        <Navbar
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          loginStatus={loginStatus}
          setLoginStatus={setLoginStatus}
        />
      </div>
      <Routes>
        <Route
          path="/myroutines"
          element={<GetMyRoutines></GetMyRoutines>}
        ></Route>
        <Route
          path="/activities"
          element={
            <AllActivities
              activities={activities}
              setActivities={setActivities}
            ></AllActivities>
          }
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/login"
          element={
            <Login
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              loginStatus={loginStatus}
              setLoginStatus={setLoginStatus}
            ></Login>
          }
        ></Route>
        <Route
          path="/routines"
          element={
            <Routines Routines={routines} setRoutines={setRoutines}></Routines>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
