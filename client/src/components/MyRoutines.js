import { useEffect, useState } from "react";
import {
  BASE_URL,
  getMyRoutines,
  getUsername,
  deleteRoutine,
  updateRoutine,
} from "../api";
import CreateRoutines from "./CreateRoutine";

const GetMyRoutines = (props) => {
  const [myRoutines, setMyRoutines] = useState([]);
  const token = localStorage.getItem("token");
  const [deletedRoutine, setDeletedRoutine] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [editedName, setEditedName] = useState("");
  const [editedGoal, setEditedGoal] = useState("");
  const [editedRoutineId, setEditedRoutineId] = useState(null);
  //fetch username
  //fetch routines based on returned username
  useEffect(() => {
    const fetchData = async () => {
      const userName = await getUsername();

      const myRoutines = await getMyRoutines(userName.username);
      setMyRoutines(myRoutines);
    };
    fetchData();
  }, [editedRoutineId, deletedRoutine, routines]);
  //delete routine
  const handleSubmit = async (e) => {
    await deleteRoutine(e);
    setDeletedRoutine(e);
  };
  //when edit button clicked, text boxes for the updates display
  const handleEdit = async (id) => {
    setEditedRoutineId(id);
  };

  //submits routine edits
  const submitEdit = async (id) => {
    if (!editedName == null || !editedGoal) {
      alert("You cannot leave the name or goal fields blank");
    } else {
      try {
        const updates = await updateRoutine(id, editedName, editedGoal);
        const result = await updates.json();
        console.log(result);
        setEditedName("");
        setEditedGoal("");
      } catch (error) {
        console.log(error);
      }

      setEditedRoutineId(null);
    }
  };

  //displays user's routines
  return (
    <>
      {token && (
        <>
          <CreateRoutines
            setRoutines={setRoutines}
            routines={routines}
          ></CreateRoutines>{" "}
        </>
      )}
      <h1>My Routines</h1>
      {myRoutines.map((routine) => (
        <div className="routines" key={routine.id}>
          <p>Name: {routine.name} </p>
          <p>Goal: {routine.goal}</p>
          <p>Creator: {routine.creatorName}</p>
          <button onClick={() => handleSubmit(routine.id)}>
            Delete Routine
          </button>
          <button onClick={() => handleEdit(routine.id)}>Edit Routine</button>
          {editedRoutineId === routine.id && (
            <div>
              <label>Updated Name:</label>
              <input
                name="name"
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
              <label>Updated Goal:</label>
              <input
                type="text"
                value={editedGoal}
                onChange={(e) => setEditedGoal(e.target.value)}
              />
              <button onClick={() => submitEdit(routine.id)}>Save</button>
              <button onClick={() => setEditedRoutineId(null)}>Cancel</button>
            </div>
          )}
          <hr></hr>
        </div>
      ))}
    </>
  );
};

export default GetMyRoutines;
