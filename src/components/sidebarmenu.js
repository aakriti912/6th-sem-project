import React from "react";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { VscFeedback } from "react-icons/vsc";
import { BiArrowBack, BiFontSize } from "react-icons/bi";
import { Link } from "react-router-dom";

import CreateProf from "./createprofile";

function SideBar() {
  return (
    <div
      className="w-[20%] bg-white shadow-lg
         shadow-red-500/50 relative top-0 
          float-left h-[200vh] text-center   flex content-center]"
    >
      <aside className="relative  right-[40px]">
        <ul className="relative left-[50px] top-[5px]">
          <li>
            <a>
              <MdDashboard
                className="text-red-700 
               text-lg inline m-10"
              />
              <span style={{ fontSize: "20px" }}>Dashboard</span>
            </a>
          </li>
          <li>
            {/* <Link to="/login"> */}
            <div>
              <CgProfile
                className="text-red-700 
                text-lg inline m-10"
              />
              <span style={{ fontSize: "20px" }}>Create Post</span>
            </div>
            {/* </Link> */}
          </li>
          <li>
            <Link to="/profile">
              <VscFeedback
                className="text-red-700 
                   text-lg inline m-10"
              />
              <span style={{ fontSize: "20px" }}>Profile</span>
            </Link>
          </li>
          <li>
            <a>
              <BiArrowBack
                className="text-red-700 
               text-lg inline m-10"
              />
              <span style={{ fontSize: "20px" }}>Sign Out</span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}
export default SideBar;
