// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useFetch } from './hooks/useFetch';
import { useCounter } from '../hooks/useCounter';

export default function MultipleCustomHooks() {
  const { counter, increment } = useCounter(1);
  const { data, isLoading } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);

  const { author, quote } = !!data && data[0]; // Condicional para manejar el acceso a la data.

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      {isLoading ? <p>Loading...</p> : <blockquote>{quote} - {author}</blockquote>}

      <button onClick={increment}>Next Quote</button>
    </>
  );
}
