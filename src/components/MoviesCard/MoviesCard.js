import React from 'react';
import SavedImg from '../../images/save3.svg';
import './MoviesCard.css';

const MoviesCard = ({ movieImage, movieName, movieLength,
  isSaved, isAtSavedMovies, handleSaveMovie,
  movie, handleDeleteMovie, movieTrailer }) => {

  const handleLikeClick = (evt) => {
    evt.stopPropagation();
    evt.preventDefault();
    handleSaveMovie(movie);
  }

  const handleDislikeClick = (evt) => {
    evt.stopPropagation();
    evt.preventDefault();
    const id = !isAtSavedMovies ? isSaved._id : movie._id;
    console.log(movie);
    handleDeleteMovie(id);
  }

  const openTrailer = () => {
    window.open(movieTrailer, '_blank')
  }


  return (
    <li className="movies-card__element" onClick={openTrailer}>
      <img src={movieImage} alt={movieName} className="movies-card__image" />
      { isSaved ? (<img src={SavedImg} alt="Сохранен" className="movies-card__saved-image" onClick={handleDislikeClick} />)
        : <button
          type="button"
          className={`movies-card__button${isAtSavedMovies ? " movies-card__button_delete" : ""}`}
          onClick={!isAtSavedMovies ? handleLikeClick : handleDislikeClick}>
          {isAtSavedMovies ? 'X' : 'Сохранить'}
        </button>}
      <h3 className="movies-card__name">{movieName}</h3>
      <span className="movies-card__length">{movieLength}</span>
    </li>
  )
}
export default MoviesCard;