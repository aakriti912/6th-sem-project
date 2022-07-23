import React, { useState } from "react";
import { AiFillLock } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { useHistory, Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!username) {
      setError("provide a username");
      setTimeout(function () {
        setError().remove();
      }, 2000);
    } else if (!password) {
      setError("provide a password");
      setTimeout(function () {
        setError().remove();
      }, 2000);
    } else {
      setError("");
    }
  }

  return (
    <div className="row2">
      <div
        className="flex justify-center
        items-center

       "
      >
        <form
          onSubmit={handleFormSubmit}
          className="w-[600px] h-[400px] relative top-[200px]"
        >
          <h1>Ncit Note Sewa</h1>
          {error ? (
            <span className="w-64 h-[40px] text-green-500   ">{error}</span>
          ) : null}
          <input
            placeholder="name.rollno@ncit.edu.np"
            className="input"
            style={{ width: "50" }}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <inputc
            type="password"
            style={{ width: "50%" }}
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <input type="checkbox" className="mt-10" />
            <span>Remember me?</span>
          </div>
          <Link to="/dashboard">
            <div>
              <button className="bg-red-500 mt-3 w-[90px] h-[30px] hover:bg-red-400 text-white rounded items-center">
                submit
              </button>
            </div>
          </Link>
          <br />
          <div>
            donnt have an account?
            <Link to="/Register">Sign up !</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
