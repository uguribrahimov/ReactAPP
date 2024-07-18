import React, { useState } from 'react';

const PasswordToggle = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(currentShowPassword => !currentShowPassword);
  };

  return (
    <div>
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange}
        placeholder="Parolunuzu daxil edin"
      />
      <button onClick={togglePasswordVisibility}>
        {showPassword ? 'Gizle' : 'Goster'}
      </button>
    </div>
  );
};

export default PasswordToggle;