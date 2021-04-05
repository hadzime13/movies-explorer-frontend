import React from 'react';
import './AboutProject.css';
const AboutProject = React.memo(() => {
  return (
    <section className='about-project__container' id="project">
      <h2 className="about-project__title">О проекте</h2>
      <h3 className="about-project__subtitle about-project__text_grid_subtitle1">Дипломный проект включал 5 этапов</h3>
      <h3 className="about-project__subtitle about-project__text_grid_subtitle2">На выполнение диплома ушло 5 недель</h3>
      <p className="about-project__text about-project__text_type_description about-project__text_grid_text1">
        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      <p className="about-project__text about-project__text_type_description about-project__text_grid_text2">
        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      <p className="about-project__text about-project__text_type_deadline-tech about-project__text_grid_text3">1 неделя</p>
      <p className="about-project__text about-project__text_type_deadline-tech about-project__text_grid_text4">4 недели</p>
      <p className="about-project__text about-project__text_type_deadline-tech about-project__text_grid_text5">Back-end</p>
      <p className="about-project__text about-project__text_type_deadline-tech about-project__text_grid_text6">Front-end</p>
    </section>
  )
});

export default AboutProject;