// src/components/AddToDo.jsx
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../store/todoSlice';
import './styles/AddToDo.css';

const AddToDo = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const { adding, loading } = useSelector((state) => state.todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    dispatch(addTodo(title));
    setTitle('');
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Agregar una nueva tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={adding || loading}
      />
      <button type="submit" disabled={adding || loading}>
        {adding ? 'Guardando ToDo...' : 'Añadir'}
      </button>
    </form>
  );
};

export default AddToDo;
