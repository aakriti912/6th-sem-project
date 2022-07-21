import React, { useEffect, useState } from "react";
// import { CgHello } from "react-icons/cg";
import { AiOutlineUpload } from "react-icons/ai";
import { TbCashBanknote } from "react-icons/tb";
import { ImCancelCircle } from "react-icons/im";
import Header from "./Header";
import SideBar from "./sidebarmenu";
import Card from "./card";

function CreateProf(props, editStudent) {
  const [container, setContainer] = useState(false);
  const [file, setFile] = useState("");
  const [card, setCard] = useState({
    subject: "",
    course: "",

    Materials: "",
    Description: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (editStudent) {
      setCard({
        subject: editStudent.subject,
        course: editStudent.course,

        Materials: editStudent.Materials,
        Description: editStudent.Description,
        price: editStudent.price,
        image: editStudent.image,
      });
    }
  });

  function handleChanges(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  function togglefile() {
    setContainer(!container);
  }
  function Post(e) {
    e.preventDefault();
    props.onAdd({ ...card, image: file });

    setCard({
      subject: "",
      course: "",
      Materials: "",
      Description: "",
      price: "",
      image: "",
    });

    togglefile();
  }
  function handleChange(e) {
    const { name, value } = e.target;

    setCard((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  return (
    <div>
      {/* <Header />0
      <SideBar /> */}

      <button
        className="bg-red-500 relative top-[100px] mt-3 w-[95px] h-[40px] hover:bg-red-400 text-white rounded items-center"
        onClick={togglefile}
      >
        create post
      </button>

      {container && (
        <div
          className="container"
          style={{
            width: "350px",
            height: "300px",

            backgroundColor: "white",
            boxShadow: "3px 3px 3px black",
            color: "black",
            top: "100px",
          }}
        >
          <div>
            <form onSubmit={Post}>
              <ImCancelCircle
                onClick={togglefile}
                className="float-right m-2
                text-red-700 cursor-pointer
  
                "
              />

              <h1> Deatails about book</h1>

              <div
                className="content-center
               items-center"
              >
                <input
                  className="w-[80%] 
                  text-center  m-2
                   h-[30px]"
                  type="text"
                  name="subject"
                  value={card.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                />
                <br />

                <input
                  className="w-[80%] text-center  m-2
                      h-[30px]"
                  type="text"
                  name="course"
                  value={card.course}
                  onChange={handleChange}
                  placeholder="Course"
                />
              </div>

              <div>
                <select
                  className="w-[80%] 
                   border-2 border-gray-300 
                   rounded text-center  m-2
                       h-[30px]"
                  name="Materials"
                  value={card.Materials}
                  onChange={handleChange}
                >
                  <option>Materials</option>
                  <option>Hardcopy Note</option>
                  <option>Online pdfs</option>
                  <option>Drawing materials</option>
                  <option>Boobs</option>
                  <option>others</option>
                </select>
              </div>
              <div className="">
                <textarea
                  name="Description"
                  value={card.Description}
                  onChange={handleChange}
                  className="w-[80%]  border-2 
                  border-gray-300 rounded text-center 
                   m-2
                       h-[80px]"
                  placeholder="description about materials"
                ></textarea>
              </div>
              <div>
                <input
                  type="number"
                  placeholder="price"
                  min="0"
                  max="1000"
                  name="price"
                  value={card.price}
                  onChange={handleChange}
                  className="w-[80%] 
                   border-2 border-gray-300 
                   rounded text-center  m-0
                  h-[30px]"
                ></input>
              </div>
              <div>
                <div
                  className="flex items-center 
                space-x-6"
                >
                  {file ? (
                    <img
                      src={file}
                      name="image"
                      value={card.image}
                      onChange={handleChange}
                      className="w-[250px] h-[200px] "
                    />
                  ) : (
                    <span
                      className=" 
                     text-center flex justify-center
                      items-center 
                      border 5px-solid-white w-[250px]
                       h-[200px] rounded relative 
                       left-[120px] m-2 "
                    >
                      <TbCashBanknote
                        className="text-[80px] value={img}
                   "
                      />
                    </span>
                  )}
                </div>

                <input
                  type="file"
                  className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100 border-none"
                  onChange={handleChanges}
                />

                <button
                  className="bg-red-500 mt-2
                 w-[90px] h-[30px]
                  hover:bg-red-400 text-white 
                  rounded items-center"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
export default CreateProf;
