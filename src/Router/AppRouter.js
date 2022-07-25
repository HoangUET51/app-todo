import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Todos from "../components/Todos";
const AppRouter = () => {

  const [userInfo, setUserInfo] = useState({});
  console.log(">>>>>>>>>Check userInfo",userInfo);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home userInfo={userInfo} setUserInfo={setUserInfo} />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/login" element={<Login setUserInfo={setUserInfo} />} />
      </Routes>
    </>
  );
};

export default AppRouter;
