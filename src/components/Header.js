import React from "react";
import logo from "../assets/img/logo.png";
import {useNavigate} from "react-router-dom"
const Header = () => {
  const Navigate = useNavigate()
  const handleLogin = () =>{
    Navigate("/login")
  }
  return (
    <>
      <div className=" pt-[5px] pl-[10px]">
        <img src={logo} width={45} height={45} className="inline-block" />
        <span className="text-[1.5rem] font-semibold text-white ">
          App Todo
        </span>
        <i className="fa-solid fa-right-to-bracket float-right text-[1.75rem] pt-[10px] cursor-pointer text-white pr-[1rem] hover:text-[#c4bfbf] " onClick={()=>handleLogin()}></i>
      </div>
    </>
  );
};

export default Header;
