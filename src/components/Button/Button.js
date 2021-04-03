import React from 'react';
import './Button.css';

const Button = React.memo(({ buttonText, onClick, buttonMod, buttonImage}) => {

  return( 
    <button
    type="button"
    aria-label={buttonText}
    className={`button${buttonMod ? ` ${buttonMod}` : ''}`}
    onClick={onClick}
  >
    {buttonText} {buttonImage && <img src={buttonImage} alt={buttonText} className="button__image"></img>}
  </button>
  );
});

export default Button;