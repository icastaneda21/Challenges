// eslint-disable-next-line no-unused-vars
import React, { useCallback, useState } from 'react';
import ShowIncrement from './ShowIncrement';

export default function CallbackHook() {
  const [counter, setCounter] = useState(0);

  const increment = useCallback((num) => setCounter((c) => c + num), []);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <ShowIncrement increment={increment} />
    </>
  );
}