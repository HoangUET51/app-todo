import React from "react";
import Header from "./Header";
import todolist from "../assets/img/todolist.jpg";
import { useNavigate } from "react-router-dom";
const Home = (props) => {
  const {userInfo,setUserInfo} = props;
  const Navigate = useNavigate();
  const handleClickTodos = () => {
    Navigate("/todos");
  };
  const handleLoginTodos = () => {
    Navigate("/login");
  }
  return (
    <>
      <div>
        <Header userInfo={userInfo} setUserInfo={setUserInfo} />
        <div className="text-center mt-[5rem]">
          {
            userInfo.email && userInfo.password ? 
            <span
                className="text-center cursor-pointer bg-[#ffffff] text-[20px] inline-block rounded-2xl text-[#50a8eb] w-[6rem] hover:bg-slate-300"
                onClick={() => handleClickTodos()}
              >
              START
            </span>
            :
            <span
              className="text-center cursor-pointer bg-[#ffffff] text-[20px] inline-block rounded-2xl text-[#50a8eb] w-[6rem] hover:bg-slate-300"
              onClick={() => handleLoginTodos()}
            >
              Login
            </span>
          
          }
          
          <img src={todolist} className="w-1/2 m-auto mt-[5rem]" />
        </div>
      </div>
    </>
  );
};

export default Home;
