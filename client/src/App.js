import "./App.css";
import React, { useEffect, useState } from "react";
import Activities from "./components/Activities";
import Routines from "./components/Routines";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [loggedIn, setLoggedIn] = useState("");

  useEffect(() => {});
  return (
    <div className="App">
      <div className="AppNav">
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </div>
      <Routes>
        <Route path="/" element={<h1>Nav Bar</h1>}></Route>{" "}
      </Routes>

      <div className="register">
        <Register></Register>
      </div>
      <div className="login">
        <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Login>
      </div>
      <div className="activities">
        <Activities
          activities={activities}
          setActivities={setActivities}
        ></Activities>
      </div>
      <div className="Routines">
        <Routines Routines={routines} setRoutines={setRoutines}></Routines>
      </div>
    </div>
  );
}

export default App;
