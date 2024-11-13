import React, { useState } from 'react';
import QuoteComponent from './QuoteComponent';

const MultipleCustomHooks = () => {
  const [counter, setCounter] = useState(1);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <h2>Breaking Bad Quotes</h2>
      <button onClick={incrementCounter}>Next Quote</button>
      {/* Pasa el valor de `counter` al componente `QuoteComponent` */}
      <QuoteComponent counter={counter} />
    </div>
  );
};

export default MultipleCustomHooks;
