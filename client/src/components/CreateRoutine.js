import React, { useState } from "react";
import { BASE_URL } from "../api";

//function to create routines
const CreateRoutines = (props) => {
  const [routineName, setRoutineName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const { routines, setRoutines } = props;
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch(`${BASE_URL}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: routineName,
        goal: goal,
        isPublic: isPublic,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Create routine", result);
        setRoutineName("");
        setGoal("");
        setRoutines(result);
      })
      .catch(console.error);
  };

  return (
    <>
      {token && (
        <div>
          <h2> Create New Routine</h2>
          <form id="createRoutine" onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={routineName}
                onChange={(e) => setRoutineName(e.target.value)}
                required
              />
            </label>
            <br></br>
            <label>
              Goal:
              <input
                type="text"
                name="goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                required
              />
            </label>
            <br></br>
            <label>
              Public Routine:
              <select
                onChange={(e) => {
                  setIsPublic(e.target.value);
                }}
              >
                <option value="true"> Yes</option>
                <option value="false"> No</option>
              </select>
            </label>
            <br></br>
            <button className="createButton" name="createRoutine">
              Submit Routine
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default CreateRoutines;
