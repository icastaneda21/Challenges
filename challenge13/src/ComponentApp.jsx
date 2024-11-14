// /ComponentApp.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export default function ComponentApp() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');

  const handleInputChange = (e) => setCategory(e.target.value);

  const addCategory = () => {
    setCategories([...categories, category]);
    setCategory(''); // Limpiar el input
  };

  return (
    <>
      <h1>Agregar Categoría</h1>
      <input type="text" value={category} onChange={handleInputChange} />
      <button onClick={addCategory}>Agregar</button>

      <ul>
        {categories.map((cat, index) => (
          <li key={index}>{cat}</li>
        ))}
      </ul>
    </>
  );
}
