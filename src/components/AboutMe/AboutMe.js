import React from 'react';
import WebLink from '../WebLink/Weblink';
import './AboutMe.css';
import Photo from '../../images/vitalyan.jpg'

const AboutMe = React.memo(() => {
  return (
    <section className='about-me__container'>
      <h2 className="about-me__title">Студент</h2>
      <h3 className="about-me__subtitle">Виталий</h3>
      <img src={Photo} alt="Мое фото" className="about-me__image" />
      <h3 className="about-me__info">Фронтенд-разработчик, 37 лет</h3>
      <p className="about-me__text">
        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года
        работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
        начал заниматься фриланс-заказами и ушёл с постоянной работы.
      </p>
      <ul className="about-me__links">
        <li className="about-me__link"><WebLink
          linkText='GitHub'
          link='https://github.com/hadzime13' /></li>
        <li className="about-me__link"><WebLink
          linkText='GitHub'
          link='https://github.com/hadzime13' /></li>
      </ul>

    </section>
  )
});

export default AboutMe;