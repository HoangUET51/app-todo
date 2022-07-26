import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { todoList, handleDelete, handleCheckBox, EditTodo, clearAll } = props;

  return (
    <div className="flex items-center flex-col gap-[3px] mt-[2.5rem] rounded-xl">
      {todoList &&
        todoList.length > 0 &&
        todoList.map((item) => {
          return (
            <TodoItem
              key={`todo-${item.id}`}
              todo={item}
              handleDelete={handleDelete}
              handleCheckBox={handleCheckBox}
              EditTodo={EditTodo}
              todoList={todoList}
            />
          );
        })}
      {!!todoList.length && (
        <div className="mt-[5px] mb-[2rem] text-[#fff] text-[1.25rem] italic flex justify-between">
          <span>{todoList.length} item</span>
          <span
            className="pl-[10.3rem] cursor-pointer hover:text-[#c7c4c4]"
            onClick={clearAll}
          >
            Clear all
          </span>
        </div>
      )}
    </div>
  );
};

export default TodoList;
