const todoReducer = (state = [], action) => {
    switch (action.type) {
      case 'TODO_ADD':
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default TodoReducer;
  