import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

function TodoList({ filter }) {
  // TodoList 보여주기
  // TodoList status에 따라 checkbox 체크
  // checkbox 변경되면 TodoList의 status도 변경
  // AddTodo에서 Add 버튼 클릭하면 Todo 추가하기
  // TodoList의 trash 버튼 클릭하면 Todo 삭제하기

  const [todos, setTodos] = useState([]);

  const handleChange = (changed) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === changed.id ? changed : todo;
      })
    );
  };

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleDelete = (deleted) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== deleted.id;
      })
    );
  };

  const filtered = getFilteredItems(todos, filter);

  return (
    <>
      <ul>
        {filtered.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleChange={handleChange}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo handleAdd={handleAdd} />
    </>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => {
    return todo.status === filter;
  });
}

export default TodoList;
