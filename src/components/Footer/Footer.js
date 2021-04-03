import React from 'react';
import './Footer.css';
import Weblink from '../WebLink/Weblink';

const Footer = React.memo(() => {
  return (
    <footer className='footer__container'>
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <p className="footer__text">
        © 2021</p>
      <ul className="footer__links-list">
        <li className="footer__links-item">
          <Weblink
            link='https://praktikum.yandex.ru/'
            linkText='Яндекс.Практикум'
            linkMod='weblink__type_footer' />
        </li>
        <li className="footer__links-item">
          <Weblink
            link='https://praktikum.yandex.ru/'
            linkText='Яндекс.Практикум'
            linkMod='weblink__type_footer' />
        </li>
        <li className="footer__links-item">
          <Weblink
            link='https://praktikum.yandex.ru'
            linkText='Яндекс.Практикум'
            linkMod='weblink__type_footer' />
        </li>
      </ul>
    </footer>
  )
});

export default Footer;