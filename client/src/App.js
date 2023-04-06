import "./App.css";
import React, { useEffect, useState } from "react";
import Activities from "./components/Activities";
import Routines from "./components/Routines";
import { Routes, Route } from "react-router-dom";

function App() {
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([]);

  useEffect(() => {});
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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
