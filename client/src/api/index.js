export const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api";

//get all activities from
export async function getActivities() {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
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
