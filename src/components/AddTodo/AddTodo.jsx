import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddTodo({ handleAdd }) {
  // input 입력값 받기
  // 입력값 validation
  // 고유 id 값 생성하기
  // id 값, 입력값 TodoList에 추가하기
  // 추가되면 input 값 초기화

  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    // 입력값 여백 없애기
    let savedText = text.trim();

    // 2글자 이하 오입력
    if (savedText.length <= 2) {
      setText("");
      return;
    }

    // 10글자 이상 alert
    if (savedText.length > 10) {
      setText("");
      return;
    }

    handleAdd({ id: uuidv4(), text: savedText, status: "active" });
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        onChange={onChange}
        value={text}
      />
      <button>Add</button>
    </form>
  );
}

export default AddTodo;
