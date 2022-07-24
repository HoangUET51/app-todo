import React from "react";
import Header from "./Header";
import todolist from "../assets/img/todolist.jpg";
import { useNavigate } from "react-router-dom";
const Home = (props) => {
  const Navigate = useNavigate();
  const handleClickTodos = () => {
    Navigate("/todos");
  };
  return (
    <>
      <div>
        <Header />
        <div className="text-center mt-[5rem]">
          <span
            className="text-center cursor-pointer bg-[#ffffff] text-[20px] inline-block rounded-2xl text-[#50a8eb] w-[6rem] hover:bg-slate-300"
            onClick={() => handleClickTodos()}
          >
            START
          </span>
          <img src={todolist} className="w-1/2 m-auto mt-[5rem]" />
        </div>
      </div>
    </>
  );
};

export default Home;
