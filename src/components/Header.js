import React from "react";
import logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const { userInfo, setUserInfo } = props;
  const Navigate = useNavigate();
  const handleLogin = () => {
    Navigate("/login");
  };
  const handleLogout = () => {
    setUserInfo({});
  };
  return (
    <>
      <div className=" pt-[5px] pl-[10px]">
        <img
          src={logo}
          width={45}
          height={45}
          alt=""
          className="inline-block"
        />
        <span className="text-[1.5rem] font-semibold text-white ">
          App Todo
        </span>
        {!userInfo.email || !userInfo.password ? (
          <i
            className="fa-solid fa-right-to-bracket float-right text-[1.75rem] pt-[10px] cursor-pointer text-white pr-[1rem] hover:text-[#c4bfbf] "
            onClick={handleLogin}
          ></i>
        ) : (
          <i
            className="fa-solid fa-right-from-bracket float-right text-[1.75rem] pt-[10px] cursor-pointer text-white pr-[1rem] hover:text-[#c4bfbf] "
            onClick={handleLogout}
          ></i>
        )}
      </div>
    </>
  );
};

export default Header;
