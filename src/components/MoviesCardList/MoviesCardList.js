import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Button from '../Button/Button';
import './MoviesCardList.css';
import NoImage from '../../images/iconmonstr-picture-thin.svg'
import { moviesList, moviesImages, imageURL } from '../../config/index';

const MoviesCardList = ({ movies, savedMovies, savedMoviesPage, mod, onButtonClick, isButtonOn, handleSaveMovie, handleDeleteMovie, getMovies }) => {

  return (
    <>
      <section className={`movies-cardlist__container${mod ? ` ${mod}` : ''}`}>
        {savedMoviesPage ?
          <ul className="movies-cardlist__list">
            {savedMovies.map((movie) =>
            (<MoviesCard
              movie={movie}
              key={movie.movieId}
              movieImage={movie.image ? movie.image : NoImage}
              movieName={movie.nameRU}
              movieLength={`${Math.floor(movie.duration / 60)}ч${movie.duration % 60}м`}
              movieTrailer={movie.trailer || 'https://www.youtube.com/'}
              isAtSavedMovies={true}
              handleDeleteMovie={handleDeleteMovie}
              getMovies={getMovies}
            />)
            )}
          </ul>
          : <>
            <ul className="movies-cardlist__list">
              {movies.map((movie) =>
              (<MoviesCard
                movie={movie}
                key={movie.id}
                movieImage={movie.image ? `${imageURL}${movie.image.url}` : NoImage}
                movieName={movie.nameRU}
                movieLength={`${Math.floor(movie.duration / 60)}ч${movie.duration % 60}м`}
                movieTrailer={movie.trailerLink || 'https://www.youtube.com/'}
                handleSaveMovie={handleSaveMovie}
                handleDeleteMovie={handleDeleteMovie}
                isSaved={savedMovies.find((element) => element.movieId === movie.id)}
                getMovies={getMovies} />)
              )}
            </ul>
            {isButtonOn && (<Button buttonText='Еще' buttonMod='button_type_movies' onClick={onButtonClick} />)}
          </>
        }
      </section>
    </>
  )
}

export default MoviesCardList;