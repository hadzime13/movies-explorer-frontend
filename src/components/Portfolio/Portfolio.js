import React from 'react';
import WebLink from '../WebLink/Weblink';
import './Portfolio.css';

const Portfolio = React.memo(() => {
  return (
    <section className='portfolio__container'>
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link">
          <p className="portfolio__link-text">Статичный сайт</p>
          <WebLink
          link='https://github.com/hadzime13/how-to-learn'
          linkText='↗'
          linkMod='weblink__type_portfolio'
          /></li>
        <li className="portfolio__link">
          <p className="portfolio__link-text">Адаптивный сайт</p>
          <WebLink
          link='https://github.com/hadzime13/russian-travel'
          linkText='↗'
          linkMod='weblink__type_portfolio' /></li>
        <li className="portfolio__link">
          <p className="portfolio__link-text">Одностраничное приложение</p>
          <WebLink
          link='https://github.com/hadzime13/react-mesto-api-full'
          linkText='↗'
          linkMod='weblink__type_portfolio' /></li>
      </ul>
      
    </section>
  )
});

export default Portfolio;