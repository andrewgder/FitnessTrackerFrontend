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
          <h4>Name:</h4> {activities.name}
          <p>
            <h4>Description:</h4> {activities.description}
          </p>
          <hr></hr>
        </div>
      ))}
    </>
  );
};

export default AllActivities;
