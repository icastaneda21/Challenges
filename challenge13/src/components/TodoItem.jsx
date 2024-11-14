import PropTypes from 'prop-types';

const TodoItem = ({ todo, deleteTodo }) => (
  <li className="list-group-item d-flex justify-content-between">
    <span>{todo.description}</span>
    <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
      Borrar
    </button>
  </li>
);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
