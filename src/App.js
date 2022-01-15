import './App.css';
import Todo from './Todo/Todo';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header title={'Todo List'} />
      <Todo />
    </div>
  );
}

export default App;
