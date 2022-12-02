import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function Todo({ todo, handleChange, handleDelete }) {
  // label 클릭하면 checkbox 클릭되기
  // checkbox 클릭하면 TodoList의 status 변경
  // trash 버튼 클릭하면 Todo 삭제하기

  const { id, text, status } = todo;

  const onChange = (event) => {
    const status = event.target.checked ? "completed" : "active";
    handleChange({ ...todo, status: status });
  };

  const onDelete = () => {
    handleDelete(todo);
  };

  return (
    <li>
      <input
        type="checkbox"
        id={id}
        onChange={onChange}
        checked={status === "completed"}
      />
      <label htmlFor={id}>{text}</label>
      <button onClick={onDelete}>
        <FaTrashAlt />
      </button>
    </li>
  );
}

export default Todo;
