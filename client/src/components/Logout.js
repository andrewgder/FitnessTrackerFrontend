import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const Logout = (props) => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  //   const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedOut) {
      console.log("the user token should be cleared: ", props.userToken);
      // perform any other logout related actions here
    }
  }, [isLoggedOut]);

  const handleLogout = () => {
    console.log("you successfully logged out");
    props.setUserToken("");
    console.log("the user token is now: ", props.userToken);
    localStorage.clear();
    setIsLoggedOut(true);
    alert("You Successfuly Logged Out");
    // navigate("/posts");
  };
  return (
    <>
      {console.log("you successfully logged out")}
      {props.setUserToken("")}
      {console.log("the user token is now: ", props.userToken)}
      {localStorage.clear()}
      {setIsLoggedOut(true)}
      {alert("You Successfuly Logged Out")}
      {/* {navigate("/posts")} */}
    </>
  );
};

export default Logout;
