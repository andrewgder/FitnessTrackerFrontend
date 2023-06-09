import { useEffect, useState } from "react";
import { BASE_URL, getRoutines } from "../api";

const AllRoutines = (props) => {
  const [routines, setRoutines] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const Allroutines = await getRoutines();
      setRoutines(Allroutines);
    };
    fetchData();
  }, [routines]);

  //displays routines and also itereates through all the attached activities
  return (
    <>
      <h1>All Routines</h1>
      {routines.map((routine) => (
        <div className="routines" key={routine.id}>
          <h4>Routine Name: {routine.name} </h4>
          <p>Goal: {routine.goal}</p>
          <p>Creator Name: {routine.creatorName}</p>
          <h4>Added Activities:</h4>
          <ul>
            {routine.activities.map((activity) => (
              <li key={activity.id}>
                <p>Activity Name: {activity.name}</p>
                <ul>
                  <li>
                    <p>description: {activity.description}</p>
                  </li>
                  <li>
                    <p>duration: {activity.duration}</p>
                  </li>
                  <li>
                    <p>count: {activity.count}</p>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
          <hr></hr>
        </div>
      ))}
    </>
  );
};

export default AllRoutines;
