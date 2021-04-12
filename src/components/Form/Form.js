import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';


const Form = ({ title, buttonText, onSubmit, children, formText, link, redirectText, mod, disabled }) => {
  return (
    <form
      action="#"
      method="POST"
      onSubmit={onSubmit}
      className="form__container"
    >
      <h2 className="form__title">{title}</h2>
      <fieldset className="form__fieldset">
        {children}
        <button type="submit" className={`form__button${mod ? ` ${mod}` : ''}`} disabled={disabled}>
          {buttonText}
        </button>
        <p className="form__text">
          {formText}
          <Link to={link} className="form__link-redirect">
            {redirectText}
          </Link>
        </p>

      </fieldset>
    </form>
  );
};

export default Form;