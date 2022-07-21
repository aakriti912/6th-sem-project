import React from "react";

function Header(props) {
  console.log(props);

  return (
    <div
      className="w-full
     h-[70px] relative 
     top-0 bg-red-700"
    >
      <img
        src="https://th.bing.com/th/id/OIP.SAfUD1RRVusBk0J1DmH5UwAAAA?w=127&h=136&c=7&r=0&o=5&dpr=1.25&pid=1.7"
        alt="logo"
        className="flex 
        justify-start relative 
        top-2 rounded-full h-[55px] w-[60px] mx-5"
      ></img>
    </div>
  );
}
export default Header;
