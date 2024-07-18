import React, { useState } from 'react';
import './ThemeToggle.css'; // Tema için gerekli CSS dosyasını da oluşturuyoruz

const ThemeToggle = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(currentDarkTheme => !currentDarkTheme);
  };

  return (
    <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
      <button onClick={toggleTheme}>
        {darkTheme ? 'Ağ Tema' : 'Qara Tema'}
      </button>
    </div>
  );
};

export default ThemeToggle;