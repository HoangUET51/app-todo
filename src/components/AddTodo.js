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
        className="pt-5 pl-5 text-[1.2rem] hover:text-[#bdbaba] cursor-pointer text-[#fff] "
        onClick={() => handleBack()}
      >
        <i class="fa-solid fa-backward text-[2rem]"></i>
      </div>
      <div className="text-center ">
        <h1 className="text-[3rem] text-[#fff] italic">Todos</h1>
        <input
          id="add-input"
          placeholder="Create a new todo ..."
          className="w-[18rem] h-[2.5rem] p-[8px] rounded-[5px] outline-none text-[#3e9deb] italic"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => handleAddTodo(e)}
        />

        <i className="fa-solid fa-left"></i>
      </div>
    </>
  );
};

export default AddTodo;
