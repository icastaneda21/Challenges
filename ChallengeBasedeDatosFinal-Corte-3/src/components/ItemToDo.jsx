// src/components/ItemToDo.jsx
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleTodo } from '../store/todoSlice';
import './styles/ItemToDo.css';

const ItemToDo = ({ todo }) => {
  const dispatch = useDispatch();
  const { toggling, deleting } = useSelector((state) => state.todos);

  const handleDelete = () => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
      dispatch(deleteTodo(todo.id));
    }
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <tr className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <td>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          disabled={toggling || deleting}
        />
      </td>
      <td>{todo.title}</td>
      <td>
        <button onClick={handleDelete} disabled={deleting || toggling}>
          {deleting ? 'Eliminando...' : 'Eliminar'}
        </button>
      </td>
    </tr>
  );
};

ItemToDo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ItemToDo;
