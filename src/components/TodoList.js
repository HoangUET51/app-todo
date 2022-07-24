import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const {
    todoList,
    handleDelete,
    handleEditTodo,
    handleCheckBox,
    isEmptyObj,
    editTodo,
    setEditTodo,
  } = props;
  return (
    <>
      <div className="flex items-center flex-col gap-[3px] mt-[2.5rem] rounded-xl">
        {todoList &&
          todoList.length > 0 &&
          todoList.map((item, index) => {
            return (
              <>
                <TodoItem
                  key={`todo-${item.id}`}
                  todo={item}
                  handleDelete={handleDelete}
                  isEmptyObj={isEmptyObj}
                  handleEditTodo={handleEditTodo}
                  handleCheckBox={handleCheckBox}
                  editTodo={editTodo}
                  setEditTodo={setEditTodo}
                />
              </>
            );
          })}
      </div>
    </>
  );
};

export default TodoList;
