// eslint-disable-next-line no-unused-vars
import React, { useMemo, useState } from 'react';

const heavyComputation = (iter) => {
  for (let i = 0; i < iter; i++) console.log('Computing...');
  return `${iter} computations done`;
};

export default function MemoHook() {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(true);

  const memoizedValue = useMemo(() => heavyComputation(counter), [counter]);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <p>{memoizedValue}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setShow(!show)}>Toggle Show: {JSON.stringify(show)}</button>
    </>
  );
}