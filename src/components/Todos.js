import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import _ from "lodash";
const Todos = () => {
  const [todoList, setTodolist] = useState([]);
  const addTodo = (todo) => {
    setTodolist([...todoList, todo]);
  };

  const handleDelete = (todo) => {
    let currentTodoList = _.clone(todoList);
    currentTodoList = currentTodoList.filter((item) => item.id !== todo.id);
    setTodolist(currentTodoList);
  };

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

  const EditTodo = (id, updateTodo) => {
    const updateTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, value: updateTodo };
      }
      return todo;
    });
    setTodolist(updateTodoList);
  };

  const clearAll = () => {
    const removeTodo = todoList.filter((todo) => !todo);
    setTodolist(removeTodo);
  };

  return (
    <>
      <AddTodo addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        handleDelete={handleDelete}
        handleCheckBox={handleCheckBox}
        EditTodo={EditTodo}
        clearAll={clearAll}
      />
    </>
  );
};

export default Todos;
