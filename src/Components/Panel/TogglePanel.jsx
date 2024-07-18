import React, { useState } from 'react';
const TogglePanel = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleVisibility = () => {
      setIsVisible(currentIsVisible => !currentIsVisible);
    };
  
    return (
      <div>
        <button onClick={toggleVisibility}>
          {isVisible ? 'Bağla' : 'Aç'}
        </button>
        {isVisible && (
          <div className="panel">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quaerat, ex dolore consequuntur, commodi nam modi maxime nobis nesciunt quis quos perferendis illo quam quae, est in ipsam ipsa eum!.</p>
          </div>
        )}
      </div>
    );
  };
  
  export default TogglePanel;