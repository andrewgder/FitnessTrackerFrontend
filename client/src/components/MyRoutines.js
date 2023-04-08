import { useEffect, useState } from "react";
import { BASE_URL, getMyRoutines, getUsername } from "../api";

const GetMyRoutines = (props) => {
  const [myRoutines, setMyRoutines] = useState([]);

  //fetch username
  //fetch routines based on returned username
  useEffect(() => {
    const fetchData = async () => {
      const userName = await getUsername();

      const myRoutines = await getMyRoutines(userName.username);
      setMyRoutines(myRoutines);
    };
    fetchData();
  }, [myRoutines]);
  //displays user's routines
  return (
    <>
      <h1>My Routines</h1>
      {myRoutines.map((routine) => (
        <div className="routines" key={routine.id}>
          <h2>Name: {routine.name} </h2>
          <p>Goal: {routine.goal}</p>
          <p>Creator: {routine.creatorName}</p>
        </div>
      ))}
    </>
  );
};

export default GetMyRoutines;
