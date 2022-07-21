import React from "react";
import Header from "./Header";
import SideBar from "./sidebarmenu";

function Profile() {
  return (
    <div>
      <Header />
      <SideBar />
      <button className="bg-red-500 mt-3 w-[100px] h-[30px] hover:bg-red-400 text-white rounded items-center">
        Create Profile
      </button>
    </div>
  );
}
export default Profile;
