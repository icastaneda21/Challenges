import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const QuoteComponent = ({ counter }) => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(`Fetching quote with counter: ${counter}`);
    setIsLoading(true);

    fetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
      .then((response) => response.json())
      .then((data) => {
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

// Agrega las validaciones de propTypes
QuoteComponent.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default QuoteComponent;
