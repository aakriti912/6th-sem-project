import React, { useState } from "react";
import Header from "./Header";
import SideBar from "./sidebarmenu";
import CreateProf from "./createprofile";
import Card from "./card";

function Dash() {
  const [adds, setAdd] = useState([]);

  function AddPost(newCard) {
    setAdd((preValue) => {
      return [...preValue, newCard];
    });
  }

  return (
    <div>
      <Header />
      <SideBar />
      <CreateProf onAdd={AddPost} />
      {adds.map((cardItem, index) => {
        return (
          <Card
            id={index}
            key={index}
            subject={cardItem.subject}
            course={cardItem.course}
            Materials={cardItem.Materials}
            Description={cardItem.Description}
            Price={cardItem.price}
            image={cardItem.image}
          />
        );
      })}
    </div>
  );
}
export default Dash;
