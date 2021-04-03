import React from 'react';
import './MoviesCard.css';
import SavedImg from '../../images/save3.svg';

const MoviesCard = ({ movieImage, movieName, movieLength, isSaved }) => {
  return (
    <li className="movies-card__element">
      <img src={movieImage} alt={movieName} className="movies-card__image" />
      { isSaved ? <img src={SavedImg} alt="Сохранен" className="movies-card__saved-image" />
        : <button type="button" className="movies-card__button">Сохранить</button>}
      <h3 className="movies-card__name">{movieName}</h3>
      <span className="movies-card__length">{movieLength}</span>
    </li>
  )
}
export default MoviesCard;