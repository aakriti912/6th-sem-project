import "./App.css";

import Login from "./components/login";
import Register from "./components/Register";
import Header from "./components/Header";
import Dash from "./components/dashboard";
import Card from "./components/card";
import Profile from "./components/profile";
import SideBar from "./components/sidebarmenu";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dash />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/menu" element={<SideBar />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>

      {/* <BrowserRouter>
      <Routes>
        
      </Routes>
        </BrowserRouter> */}

      {/* <Dash /> */}
      {/* <Register /> */}
      {/* <Profile /> */}
      {/* <Dash /> */}
    </div>
  );
}

export default App;
