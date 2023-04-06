import { useEffect, useState } from "react";
import { BASE_URL, getRoutines } from "../api";

const AllRoutines = (props) => {
  const [routines, setRoutines] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const Allroutines = await getRoutines();
      setRoutines(Allroutines);
      console.log(Allroutines);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>All Routines</h1>
      {routines.map((routines) => (
        <div className="routines" key={routines.id}>
          <h2>Routine Name: {routines.name} </h2>
          <p>Goal: {routines.goal}</p>
          <p>Creator Name: {routines.creatorName}</p>
          <h2>Activities:</h2>
          <ul>
            <li>
              {routines.activities.map((activities) => (
                <p>Activity Name: {activities.name}</p>
              ))}
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default AllRoutines;
