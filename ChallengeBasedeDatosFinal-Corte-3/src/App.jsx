// src/App.jsx
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <AddToDo />
      <ToDoList />
    </div>
  );
}

export default App;
