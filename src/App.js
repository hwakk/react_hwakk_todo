import "./App.css";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

function App() {
  // darkmode
  // filter 전달하기
  // Todo 로컬스토리지에 저장하기

  return (
    <>
      <Header />
      <TodoList />
    </>
  );
}

export default App;
