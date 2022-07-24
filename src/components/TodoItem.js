import React, { useState } from "react";
import _ from "lodash";
const TodoItem = (props) => {
  const {
    todo,
    handleDelete,
    handleEditTodo,
    isEmptyObj,
    editTodo,
    setEditTodo,
    handleCheckBox,
  } = props;
  const [text, setText] = useState(todo.value);
  console.log(">>>>>>>>>Check text", text);
  const handleClickDelete = (item) => {
    handleDelete(item);
  };

  return (
    <>
      <div className="w-[18rem] h-[2rem] bg-white rounded-[5px] relative ">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          className="ml-[10px] border-indigo-500/100"
          onChange={() => handleCheckBox(todo.id)}
        />
        {isEmptyObj === true ? (
          <span
            className={` pl-[8px] inline-block pt-[3px] ${
              todo.isCompleted
                ? "text-[#b4b2b2] italic line-through "
                : " text-[#51a5bc]"
            }`}
          >
            {todo.value}
          </span>
        ) : (
          <>
            {editTodo.id === todo.id ? (
              <span className="text-[#eb44c1] pl-[8px] inline-block pt-[3px] ">
                <input value={text} onChange={(e) => setText(e.target.value)} />
              </span>
            ) : (
              <span className="text-[#eb44c1] pl-[8px] inline-block pt-[3px] ">
                {todo.value}
              </span>
            )}
          </>
        )}

        <i
          className="fa-solid fa-trash-can ml cursor-pointer float-right pr-[5px] pt-[8px] hover:text-[#f66666]"
          onClick={() => handleClickDelete(todo)}
        ></i>
        <i
          class="fa-solid fa-pen-to-square cursor-pointer float-right pt-[8px] hover:text-[#f66666] mr-[2px] "
          onClick={() => handleEditTodo(todo)}
        ></i>
      </div>
    </>
  );
};

export default TodoItem;
