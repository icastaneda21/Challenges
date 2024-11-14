// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Small from './Small';

export default function Memorize() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Counter: <Small value={counter} /></h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </>
  );
}