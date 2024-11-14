// /FirstApp.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export default function FirstApp() {
  const [count, setCount] = useState(0);

  const handleSubstract = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Sumar</button>
      <button onClick={handleSubstract}>Restar</button>
      <button onClick={handleReset}>Resetear</button>
    </>
  );
}
