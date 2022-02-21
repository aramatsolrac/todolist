import "./App.css";
import Todo from "./TodoList";
import Header from "./components/Header";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <Header title={"Todo List"} />
      <TodoList />
    </div>
  );
}

export default App;
