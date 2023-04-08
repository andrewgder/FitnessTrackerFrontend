import { useEffect, useState } from "react";
import { BASE_URL, getActivities } from "../api";

const AllActivities = (props) => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const AllActivities = await getActivities();
      setActivities(AllActivities);
    };
    fetchData();
  }, [activities]);
  //displays all activities
  return (
    <>
      <h1>All Activities</h1>
      {activities.map((activities) => (
        <div className="activties" key={activities.id}>
          <h2>Name: {activities.name} </h2>
          <p>Description: {activities.description}</p>
        </div>
      ))}
    </>
  );
};

export default AllActivities;
