import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import { addTodo } from '../stores/slices/todoSlice';

const TodoApp = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleNewTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  return (
    <div>
      <h1>TodoApp: {todos.length}</h1>
      <TodoList todos={todos} />
      <TodoAdd onNewTodo={handleNewTodo} />
    </div>
  );
};

export default TodoApp;
