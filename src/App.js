import "./App.scss";
import Header from "./components/Header/Header";
import TodoList from "./components/Todo/TodoList";

function App() {
  return (
    <div className="App">
      <Header title={"Todo List"} />
      <TodoList />
    </div>
  );
}

export default App;
