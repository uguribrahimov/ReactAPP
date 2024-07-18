
import React, { useState } from 'react';

const ColorChangingText = () => {
  const [color, setColor] = useState('black');

  const handleClick = () => {
    setColor(currentColor => (currentColor === 'red' ? 'blue' : 'red'));
  };

  return (
    <div>
      <p style={{ color: color }}>SAlam</p>
      <button onClick={handleClick}>Rengi Deyişdir</button>
    </div>
  );
};


export default ColorChangingText;
