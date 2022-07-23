import React from "react";
import Header from "./Header";
import SideBar from "./sidebarmenu";

function Profile() {
  return (
    <div>
      <Header />
      <SideBar />
      <button className=" float-right m-10 bg-red-500 mt-3 w-[100px] h-[30px] hover:bg-red-400 text-white rounded items-center">
        edit
      </button>
      <div
        className=" grid justify-items-center  text-center
       text-center w-[500px] h-[100vh] 
       bg-gray-700 relative left-[200px] top-[50px]"
      >
        <div className="flex mt-[10px]">
          <img
            src="https://sm.askmen.com/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_gstt.jpg"
            className="rounded-full  
            border-4 border-white
             h-[200px] w-[200px]  "
          ></img>
          <h2 className="text-red-700 text-xl">Daniel-Profile</h2>
        </div>
        <div className="text-black">
          <p> Full Name :Daniela Koirala</p>
          <hr />
          <p> Phone : +9779836648</p>
          <hr />
          <p>Adress:Basundhara</p>
          <hr />
          <p>Email:ncit@edu.np</p>
          <hr />
          <p> Gender:male</p>
          <hr />
          <p> faculty:software</p>
          <hr />
          <p> college:NEC</p>
          <hr />
        </div>
      </div>
    </div>
  );
}
export default Profile;
