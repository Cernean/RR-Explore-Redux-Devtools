import Counter from './Counter'
import Todo from './Todo'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter />
      <h1>TODO</h1>
      <h2>To Do List</h2>
      <Todo />
    </div>
  );
}

export default App;
