import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Button from '../Button/Button';
import './MoviesCardList.css';
import NoImage from '../../images/iconmonstr-picture-thin.svg'
import { moviesList, moviesImages, imageURL } from '../../config/index';

const MoviesCardList = ({ movies, isSaved, mod, onButtonClick, isButtonOn }) => {

  return (
    <>
      <section className={`movies-cardlist__container${mod ? ` ${mod}` : ''}`}>
        {isSaved ?
          <ul className="movies-cardlist__list">
            <MoviesCard
              movieImage={moviesImages[0]}
              movieName={moviesList[0]}
              movieLength='1ч17м'
              isAtSavedMovies={true} />
            <MoviesCard movieImage={moviesImages[1]}
              movieName={moviesList[1]}
              movieLength='1ч17м'
              isAtSavedMovies={true} />
            <MoviesCard
              movieImage={moviesImages[2]}
              movieName={moviesList[2]}
              movieLength='1ч17м'
              isAtSavedMovies={true} />
          </ul>
          : <>
            <ul className="movies-cardlist__list">
              {movies.map((movie) =>
              (<MoviesCard
                key={movie.id}
                movieImage={movie.image ? `${imageURL}${movie.image.url}` : NoImage}
                movieName={movie.nameRU}
                movieLength={`${Math.floor(movie.duration / 60)}ч${movie.duration % 60}м`} />))}
            </ul>
            {isButtonOn && (<Button buttonText='Еще' buttonMod='button_type_movies' onClick={onButtonClick} />)}
          </>
        }
      </section>
    </>
  )
}

export default MoviesCardList;