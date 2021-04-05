import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Button from '../Button/Button';
import './MoviesCardList.css';
import { moviesList, moviesImages } from '../../config/index';

const MoviesCardList = ({ isSaved, mod }) => {

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
              <MoviesCard movieImage={moviesImages[0]} movieName={moviesList[0]} movieLength='1ч17м' />
              <MoviesCard movieImage={moviesImages[1]} movieName={moviesList[1]} movieLength='1ч17м' isSaved={true} />
              <MoviesCard movieImage={moviesImages[2]} movieName={moviesList[2]} movieLength='1ч17м' />
              <MoviesCard movieImage={moviesImages[3]} movieName={moviesList[3]} movieLength='1ч17м' />
              <MoviesCard movieImage={moviesImages[4]} movieName={moviesList[4]} movieLength='1ч17м' />
              <MoviesCard movieImage={moviesImages[5]} movieName={moviesList[5]} movieLength='1ч17м' />
              <MoviesCard movieImage={moviesImages[6]} movieName={moviesList[6]} movieLength='1ч17м' />
              <MoviesCard movieImage={moviesImages[7]} movieName={moviesList[7]} movieLength='1ч17м' />
              <MoviesCard movieImage={moviesImages[8]} movieName={moviesList[8]} movieLength='1ч17м' />
              <MoviesCard movieImage={moviesImages[9]} movieName={moviesList[9]} movieLength='1ч17м' />
              <MoviesCard movieImage={moviesImages[10]} movieName={moviesList[10]} movieLength='1ч17м' />
              <MoviesCard movieImage={moviesImages[11]} movieName={moviesList[11]} movieLength='1ч17м' />
            </ul>
            <Button buttonText='Еще' buttonMod='button_type_movies' />
          </>
        }
      </section>
    </>
  )
}

export default MoviesCardList;