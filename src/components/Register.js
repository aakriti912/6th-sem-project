import React, { useState } from "react";
import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";
import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setPass] = useState("");
  const [error, setError] = useState("");

  function handleClick(e) {
    if (!fname) {
      setError("fill the fname");
    }
    if (!lname) {
      setError("fill last name");
    }
    if (!email) {
      setError("provide email");
    }
    if (!number) {
      setError("provide number");
    }
    if (password !== repassword) {
      setError("password didnt match");
    } else {
      setError("sucess");
    }
    e.preventDefault();
  }
  return (
    <div className="row">
      <div className="container">
        <form onSubmit={handleClick}>
          <h1>REGISTER NCIT NOTE SEWA</h1>
          {error ? <p>{error}</p> : null}
          <div className="fname">
            first name*
            <br />
            <input
              type="text"
              id="fname"
              value={fname}
              onChange={(e) => {
                setFname(e.target.value);
              }}
              placeholder="firstname"
              className="h-[40px]"
              // style={{ height: "40px" }}
            />
          </div>
          <div className="lname">
            last name*
            <br />
            <input
              type="text"
              id="lname"
              value={lname}
              onChange={(e) => {
                setLname(e.target.value);
              }}
              placeholder="lastname"
              className="h-[40px]"
            />
          </div>
          <div className="email">
            email*
            <br />
            <input
              type="email"
              placeholder="name.rollno@ncit.edu.np"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-[80%] h-[40px]"
            />
          </div>
          <div className="number">
            <input
              type="number"
              value={number}
              placeholder="98xxxxxxxxx"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              className="w-[80%] h-[40px]"
            />
          </div>
          <div class="password">
            password*
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="password"
              className="w-[80%] h-[40px]"
            />
          </div>
          <div class="repassword">
            repassword*
            <br />
            <input
              type="password"
              value={repassword}
              onChange={(e) => {
                setPass(e.target.value);
              }}
              placeholder="Re-password"
              className="w-[80%] h-[40px]"
            />
          </div>
          <Link to="/login">
            <div>
              <button className="bg-red-500 mt-3 w-[90px] h-[30px] hover:bg-red-400 text-white rounded items-center">
                submit
              </button>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Register;
