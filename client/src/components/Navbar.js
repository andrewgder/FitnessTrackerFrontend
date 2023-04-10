import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";

const Navbar = (props) => {
  const [displayVal, setDisplayVal] = useState(localStorage.getItem("token"));

  useEffect(() => {
    setDisplayVal(localStorage.getItem("token"));
  }, [props.loginStatus, props.loggedIn]);
  const navigate = useNavigate();
  console.log("display val:", displayVal);

  const links = [
    {
      key: "login",
      route: "/login",
      text: "Login",
      shouldDisplay: !displayVal,
    },

    {
      key: "register",
      route: "/register",
      text: "Register",
      shouldDisplay: !displayVal,
    },
    {
      key: "myRoutine",
      route: "/myroutines",
      text: "My Routines",
      shouldDisplay: displayVal,
    },
    {
      key: "routines",
      route: "/routines",
      text: "Routines",
      shouldDisplay: true,
    },
    {
      key: "activities",
      route: "/activities",
      text: "Activities",
      shouldDisplay: true,
    },
    {
      key: "logout",
      text: "Log Out",
      shouldDisplay: displayVal,
      route: "/login",
      onClick: () => {
        alert("You Successfuly Logged Out");
        console.log("you successfully logged out");
        localStorage.clear();

        props.setLoginStatus(false);
      },
    },
  ];
  return (
    <div className="NavBarBody">
      <Link to={"/"} className="NavBarTitle">
        Home
      </Link>
      {<br></br>}

      <div className="NavBarMenuItems">
        {links.map((link) => {
          const { key, route, text, shouldDisplay, onClick = () => {} } = link;
          if (shouldDisplay) {
            return (
              <div className="menuItems" key={key}>
                <Link className="NavLink" to={route} onClick={onClick}>
                  {text}
                </Link>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Navbar;
