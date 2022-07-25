import React, {useState } from "react";
import _ from "lodash";
const TodoItem = (props) => {
  const {
    todo,
    handleDelete,
    handleCheckBox,
    EditTodo,
  } = props;
  const [text, setText] = useState(todo.value);

  const [isEditing,setIsEditing] = useState(false)

  const handleClickDelete = (item) => {
    handleDelete(item);
  };

  const handleEdit = ()=>{
    setIsEditing(!isEditing);
  }

  const handleSave = (e) => {
    e.preventDefault();
    EditTodo(todo.id, text)
    handleEdit()
  }
  

  return (
    <>
      <div className="w-[18rem] h-[2rem] bg-white rounded-[5px] relative ">
        {
          isEditing ? 
          <>
              <form className="text-[#eb44c1] " onSubmit={handleSave}>
                <input value={text} onChange={(e) => setText(e.target.value)} className="inline-block h-[2rem] w-11/12 text-[#8d8a8a] outline-[#31aaf0] bg-[#e4e0e0] pl-[6px] italic " />
                <i class="fa-solid fa-circle-check pl-[5px] text-[#333] hover:text-[#51df64] rounded-[3px] cursor-pointer text-center text-[1rem]" onClick={handleSave}></i>

              </form>
          </>
          : 
          <>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            className="ml-[10px] text-[1rem]"
            onChange={() => handleCheckBox(todo.id)}
          />
          <span
            className={`pl-[8px] font-normal text-[20px] inline-block first-letter:${
              todo.isCompleted
                ? "text-[#e2dfdf] italic line-through "
                : " text-[#324fcf]"
            }`}
          >
            {todo.value}
          </span>
          <i
            className="fa-solid fa-trash-can ml cursor-pointer float-right pr-[5px] pt-[8px] hover:text-[#f66666]"
            onClick={() => handleClickDelete(todo)}
          ></i>
          <i
            className="fa-solid fa-pen-to-square cursor-pointer float-right pt-[8px] hover:text-[#c6c932] mr-[2px] "
            onClick={() => handleEdit()}
          ></i>
          </>
        }
      </div>
    </>
  );
};

export default TodoItem;
