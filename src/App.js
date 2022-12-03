import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

function App() {
  // darkmode
  // filter 전달하기
  // Todo 로컬스토리지에 저장하기

  const filters = ["all", "completed", "active"];
  const [filter, setFilter] = useState(filters[0]);

  return (
    <>
      <Header filters={filters} filter={filter} />
      <TodoList filter={filter} />
    </>
  );
}

export default App;
