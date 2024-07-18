import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cartCount, setCartCount] = useState(0);

  const addItem = () => {
    setCartCount(currentCount => currentCount + 1);
  };

  const removeItem = () => {
    setCartCount(currentCount => (currentCount > 0 ? currentCount - 1 : 0));
  };

  return (
    <div>
      <h2>Səbətdə {cartCount} məhsul var</h2>
      <button onClick={addItem}>Məhsul Əlavə Et</button>
      <button onClick={removeItem}>Məhsul Çıxar</button>
      
    </div>
  );
};

export default ShoppingCart;