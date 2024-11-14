import React from 'react';

// eslint-disable-next-line react/prop-types
export default React.memo(function ShowIncrement({ increment }) {
  console.log('ShowIncrement render');
  return <button onClick={() => increment(1)}>Increment</button>;
});