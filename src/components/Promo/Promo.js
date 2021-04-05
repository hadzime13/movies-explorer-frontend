import React from 'react';
import './Promo.css';
import landingLogo from '../../images/landing-logo.svg';

const Promo = React.memo(() => {
  return (
    <section className='promo__container'>
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <a href="#project" className="promo__link">
        Узнать больше
      </a>
      <img src={landingLogo} alt="Учебный проект" className="promo__image" />
    </section>
  );
});

export default Promo;