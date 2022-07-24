import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddTodo = (props) => {
  const Navigate = useNavigate();
  const { addTodo } = props;
  const [value, setValue] = useState("");
  const handleAddTodo = (event) => {
    if (event.key === "Enter" && value) {
      addTodo({
        id: new Date().valueOf(),
        value: value,
        isCompleted: false,
      });
      setValue("");
    }
  };

  const handleBack = () => {
    Navigate("/");
  };
  return (
    <>
      <div
        className="pt-1 pl-2 text-[1.2rem] hover:text-[#7a7777] cursor-pointer text-[#fff] "
        onClick={() => handleBack()}
      >
        <i class="fa-solid fa-angles-left"></i>
        Back
      </div>
      <div className="text-center ">
        <h1 className="text-[3rem] text-[#fff]">Todos</h1>
        <input
          id="add-input"
          placeholder="Create a new todo ..."
          className="w-[18rem] h-[2.5rem] p-[8px] rounded-[5px] outline-none text-[#eb44c1]"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => handleAddTodo(e)}
        />

        <i class="fa-solid fa-left"></i>
      </div>
    </>
  );
};

export default AddTodo;
