import { useReducer } from 'react';
import TodoReducer from './TodoReducer';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const initialState = [
  { id: new Date().getTime(), description: 'Hacer los challenges', done: false },
];

const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodoReducer, initialState);

  const addTodo = (description) => {
    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };
    dispatch({ type: 'add', payload: newTodo });
  };

  const deleteTodo = (id) => {
    dispatch({ type: 'delete', payload: id });
  };

  return (
    <div>
      <h1>TodoApp: {todos.length} <small>Pendientes: {todos.filter(todo => !todo.done).length}</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
        <div className="col-5">
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
