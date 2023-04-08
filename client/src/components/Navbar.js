import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const [displayVal, setDisplayVal] = useState(localStorage.getItem("token"));
  useEffect(() => {
    // console.log("token navbar: ", localStorage.getItem("token"));
    setDisplayVal(localStorage.getItem("token"));
  }, [props.loggedIn]);
  //   const navigate = useNavigate();
  console.log("display val:", displayVal);

  const links = [
    {
      key: "login",
      route: "/login",
      text: "Login",
      shouldDisplay: !displayVal,
    },
    {
      key: "logout",
      // route: "/login",
      text: "Log Out",
      shouldDisplay: displayVal,
      onClick: () => {
        alert("You Successfuly Logged Out");
        console.log("you successfully logged out");
        localStorage.clear();
        props.setLoggedIn(true);

        // navigate("/posts");
      },
    },
    {
      key: "register",
      route: "/register",
      text: "Register",
      shouldDisplay: !displayVal,
    },
  ];
  return (
    <div className="NavBarBody">
      <Link to={"/"} className="NavBarTitle">
        Home
      </Link>{" "}
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
