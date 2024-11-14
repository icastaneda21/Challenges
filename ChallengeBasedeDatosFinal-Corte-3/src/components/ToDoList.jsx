// src/components/ToDoList.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../store/todoSlice';
import ItemToDo from './ItemToDo';
import './styles/ToDoList.css';

const ToDoList = () => {
  const dispatch = useDispatch();
  const { items: todos, loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
    // Se elimina la suscripción en tiempo real
  }, [dispatch]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="todo-list-container">
      <table className="todo-table">
        <thead>
          <tr>
            <th>Completado</th>
            <th>Tarea</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <ItemToDo key={todo.id} todo={todo} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
