import React, { useState } from "react";
import { BASE_URL } from "../api";

//function to create activity
const CreateActivity = (props) => {
  const [activityName, setActivityName] = useState("");
  const [description, setDescription] = useState("");
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch(`${BASE_URL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: activityName,
        description: description,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Create activity", result);
        if (result.error) {
          alert(result.error);
        }
        props.setActivities(result);
        setActivityName("");
        setDescription("");
      })
      .catch(console.error);
  };

  return (
    <>
      {token && (
        <div>
          <h2> Create New Activity</h2>
          <form id="createActivity" onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={activityName}
                onChange={(e) => setActivityName(e.target.value)}
                required
              />
            </label>

            <label>
              Description:
              <input
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </label>

            <button className="createButton" name="createActivity">
              Submit Activity
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default CreateActivity;
