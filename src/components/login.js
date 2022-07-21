import React, { useState } from "react";
import { AiFillLock } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

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

          <input
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

          <button className="bg-red-500 mt-3 w-[90px] h-[30px] hover:bg-red-400 text-white rounded items-center">
            submit
          </button>
          <br />

          <a href="#" className="mt-5">
            donnt have an account? Sign up !
          </a>
        </form>
      </div>
    </div>
  );
}
export default Login;

// import React, { useState } from "react";
// import { AiFillLock } from "react-icons/ai";
// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   function handleFormSubmit(e) {
//     e.preventDefault();
//     if (!username) {
//       setError("provide a username");
//     } else if (!password) {
//       setError("provide a password");
//     } else {
//       setError("");
//     }
//   }

//   return (
//     <div className="row2">
//       <div className="container">
//         <form onSubmit={handleFormSubmit}>
//           <h1>Ncit Note Sewa</h1>
//           {error ? <span className="alert alert-success ">{error}</span> : null}

//           <div className="username">
//             <i
//               className="fa fa-user"
//               style={{
//                 fontSize: "25px",
//                 margin: "3px",
//                 color: "rgb(133, 50, 50)",
//               }}
//             />

//             <input
//               className="input is-primary"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               type="text"
//               placeholder="username"
//             ></input>
//           </div>
//           <div className="password">
//             <AiFillLock className="icon" />

//             <input
//               type="password"
//               placeholder=" password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <input type="checkbox" />
//           <span>Remember me?</span>
//           <div className="button">
//             <button type="submit" class="button is-success">
//               Submit
//             </button>
//           </div>
//           <a href="#" className="mt-10">
//             Sign up?
//           </a>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default Login;
