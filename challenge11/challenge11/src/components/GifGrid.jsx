// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useCounter } from '../hooks/useCounter';

export default function GifGrid() {
  const { counter, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}