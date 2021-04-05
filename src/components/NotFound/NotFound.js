import React from 'react';
import Button from '../Button/Button';
import './NotFound.css'

const NotFound = () => {

  return (
    <section className="not-found__container">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__text">Страница не найдена</p>
      <Button buttonText='Назад' buttonMod='button_type_404' />
    </section>
  )
}

export default NotFound;