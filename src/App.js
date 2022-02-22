import "./App.scss";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Header title={"Todo List"} />
      <TodoList />
    </div>
  );
}

export default App;
