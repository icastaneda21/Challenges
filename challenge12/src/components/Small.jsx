import React from 'react';

// eslint-disable-next-line react/prop-types
export default React.memo(function Small({ value }) {
  console.log('Small render');
  return <small>{value}</small>;
});