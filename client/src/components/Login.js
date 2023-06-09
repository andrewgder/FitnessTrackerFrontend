import React, { useState, useEffect } from "react";
import { login } from "../api";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [loginStatus, setLoginStatus] = useState(false);
  const navigate = useNavigate();
  const { loginStatus, setLoginStatus } = props;

  useEffect(() => {
    if (!loginStatus) {
      // perform any other logout related actions here
    } else {
      setLoginStatus(false);
    }
  }, [loginStatus]);

  return (
    <>
      {!loginStatus && (
        <>
          <h2> Login Form</h2>
          <form
            id="login"
            onSubmit={async (event) => {
              event.preventDefault();
              try {
                const result = await login(username, password);
                if (localStorage.getItem("token")) {
                  alert("You Successfuly Logged in");

                  // props.setUserToken("update");
                  setLoginStatus(true);
                  localStorage.setItem("username", username);
                  props.setLoggedIn(username);
                  navigate("/myroutines");
                }
              } catch (err) {
                console.error(err);
              } finally {
                setPassword("");
                setUsername("");
              }
            }}
          >
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br></br>
            <br></br>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <br></br>
            <br></br>
            <button name="login">Login</button>
          </form>
        </>
      )}
    </>
  );
};

export default Login;
