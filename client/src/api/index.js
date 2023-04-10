export const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

//get all activities
export async function getActivities() {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

//gets the routines
export async function getRoutines() {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "GET",
      // headers: {
      //   "Content-Type": "application/json",
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

//fetchs username for my routines page
export async function getUsername() {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
    console.log(data.username);
    return data;
  } catch (error) {
    throw error;
  }
}

//gets my routines
export async function getMyRoutines(username) {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}/routines`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

//creates a new account
export async function createAccount(username, password) {
  const credentials = JSON.stringify({
    username: username,
    password: password,
  });

  fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentials,
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("you successfully registered an account", result);
      alert(result.message);
    })
    .catch(console.error);
}

//login
export async function login(username, password) {
  console.log(username, password);
  const credentials = JSON.stringify({
    username: username,
    password: password,
  });

  await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentials,
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.token) {
        const newToken = localStorage.setItem("token", result.token);
        const tokenValue = localStorage.getItem("token");
        console.log("token is:", tokenValue);
        console.log(result.message);
      } else {
        console.log(result.error.message);
        alert("Please supply a correct username and password");
      }
      console.log("the login result", result);
    })
    .catch(console.error);
}

//delete routines
export async function deleteRoutine(id) {
  console.log("deleted routine id", id);
  await fetch(`${BASE_URL}/routines/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      alert("You deleted the routine");
      console.log(result);
    })
    .catch(console.error);
}

//update routines
export async function updateRoutine(id, name, goal) {
  fetch(`${BASE_URL}/routines/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      name: name,
      goal: goal,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("updated routine", result);
      alert("Updates saved!");
    })
    .catch(console.error);
}
