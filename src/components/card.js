import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";

function Card(props) {
  function Remove(e) {
    const rem = e.target.parentElement.parentElement.parentElement;
    rem.remove();
  }

  // function editButton(e) {
  //   getrollnoEdit(e.target.name);
  // }
  const [count, setCount] = useState(0);
  function handleClick(e) {
    const star = e.target;
    star.style.color = "yellow";
  }
  return (
    <div
      className="inline-flex justify-around float-left relative
     top-[250px]   w-[300px] m-5"
    >
      <div
        className="rounded-lg 
      shadow-lg bg-white max-w-sm  
      relative top-100 "
      >
        <a href="#">
          <img className="rounded-t-lg" src={props.image} alt="image" />
        </a>
        <div className="p-6">
          <p className="text-gray-900 text-xl font-small mb-1">
            <b>Subject:</b> {props.subject}
          </p>

          <p className="text-gray-700 text-base mb-2">
            <b>course:</b>
            {props.course}
          </p>
          <p className="text-gray-700 text-base mb-2">
            <b>Materials:</b>
            {props.Materials}
          </p>
          <p className="text-gray-700 text-base mb-2">
            <b>Description:</b>
            {props.Description}
          </p>
          <p className="text-gray-700 text-base mb-2">
            <b>Price:</b>
            {props.price}
          </p>
          <div className="flex m-3">
            <button
              type="button"
              className="inline-block 
              relative right-5
              flex justify-start px-5 py-2.5 bg-red-600 
              text-white font-medium text-xs leading-tight uppercase rounded shadow-md
               hover:bg-red-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
              // onClick={editButton}
            >
              edit
            </button>
            <button
              type="button"
              onClick={Remove}
              className="inline-block flex justify-start px-5 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
            >
              remove
            </button>
          </div>

          <p>You have provided {count} stars</p>
          <button onClick={() => setCount(count + 1)}>
            <div className="flex m-2" onClick={handleClick}>
              <AiOutlineStar />
              <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />
              <AiOutlineStar />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
