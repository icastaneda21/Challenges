import React, { useState, useEffect } from 'react';

const QuoteComponent = ({ counter }) => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(`Fetching quote with counter: ${counter}`);
    setIsLoading(true);

    fetch(`https://breakingbadapi.com/api/quotes/${counter}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Data fetched:', data);
        setQuote(data[0]?.quote || 'No quote found');
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching the quote:', error);
        setIsLoading(false);
      });
  }, [counter]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <blockquote>{quote}</blockquote>
      )}
    </div>
  );
};

export default QuoteComponent;
