import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementBy } from "../redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementValue, setIncrementValue] = useState(0);

  const handleIncrementBy = () => {
    dispatch(incrementBy(Number(incrementValue)));
    setIncrementValue(0); // Resetear el valor después de usarlo
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <div>
        <input
          type="number"
          value={incrementValue}
          onChange={(e) => setIncrementValue(e.target.value)}
          placeholder="Enter value"
        />
        <button onClick={handleIncrementBy}>Increment by Value</button>
      </div>
    </div>
  );
};

export default Counter;
