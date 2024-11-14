// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';

export default function FocusScreen() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <input ref={inputRef} placeholder="Your name" />
      <button onClick={handleFocus}>Focus</button>
    </>
  );
}
