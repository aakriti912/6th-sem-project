import React, { useState } from "react";
import Header from "./Header";
import SideBar from "./sidebarmenu";
import CreateProf from "./createprofile";
import Card from "./card";

const Dets = [
  {
    subject: "java",
    course: "software",

    Materials: "hardcopyNotes",
    Description: "for detail of material we can chat ",
    price: "Rs 190",
    image:
      "https://th.bing.com/th/id/OIP.fHwezjRSlNL9N9YsnDpdmQHaJz?pid=ImgDet&rs=1",
  },
  {
    subject: "drawing",
    course: "BE",

    Materials: "drawing materials",
    Description: "for detail of material we can chat ",
    price: "Rs 190",
    image:
      "https://th.bing.com/th/id/OIP.4fqPjtJ5Djc4LpLEkOaknQHaHa?pid=ImgDet&rs=1",
  },
  {
    subject: "C programming",
    course: "BE",

    Materials: "Hardcopy note",
    Description: "for detail of material we can chat ",
    price: "Rs 190",
    image:
      "https://th.bing.com/th/id/R.2fb4241c9056ef625c6fb7f6d88df774?rik=3K3BkwD%2fUIPCFg&pid=ImgRaw&r=0",
  },
];

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

      <div>
        {Dets.map((fetch, i) => {
          <Card
            key={fetch.i}
            subject={fetch.subject}
            course={fetch.course}
            Materials={fetch.Materials}
            Description={fetch.Description}
            price={fetch.price}
            image={fetch.image}
          />;
        })}
      </div>

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
