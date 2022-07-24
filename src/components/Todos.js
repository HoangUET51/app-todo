import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import _ from "lodash";
const Todos = (props) => {
  const [todoList, setTodolist] = useState([]);
  const [editTodo, setEditTodo] = useState({});

  const addTodo = (todo) => {
    setTodolist([...todoList, todo]);
  };

  const handleDelete = (todo) => {
    let currentTodoList = _.clone(todoList);
    currentTodoList = currentTodoList.filter((item) => item.id !== todo.id);
    setTodolist(currentTodoList);
  };

  const handleEditTodo = (todo) => {
    setEditTodo(todo);
  };

  let isEmptyObj = Object.keys(editTodo).length === 0;

  const handleCheckBox = (id) => {
    let currentTodoList = _.clone(todoList);
    currentTodoList = currentTodoList.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });

    setTodolist(currentTodoList);
  };
  console.log("check todolist", todoList);

  return (
    <>
      <AddTodo addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        handleDelete={handleDelete}
        handleEditTodo={handleEditTodo}
        handleCheckBox={handleCheckBox}
        isEmptyObj={isEmptyObj}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
    </>
  );
};

export default Todos;
