import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader'
import Message from '../Message/Message';

const Movies = ({
  handleSaveMovie, handleDeleteMovie, searchMovies,
  isPreloaderOn, errorText, filteredMovies,
  loadCards, isButtonOn, getMovies, savedMovies,
  shortMoviesSwitch, isShortMovies, shortMoviesOff }) => {

  // При загрузке страницы
  React.useEffect(() => {

    getMovies();
    return () => {
      shortMoviesOff();
    }
  }, [])


  return (
    <>
      <Header isLoggedIn={true} />
      <SearchForm searchMovies={searchMovies} shortMoviesSwitch={shortMoviesSwitch} isShortMovies={isShortMovies} />
      {isPreloaderOn && <Preloader />}
      {errorText && <Message messageText={errorText} />}
      {!isPreloaderOn && !errorText
        && (<MoviesCardList
          movies={filteredMovies}
          savedMovies={savedMovies}
          onButtonClick={loadCards}
          isButtonOn={isButtonOn}
          handleSaveMovie={handleSaveMovie}
          handleDeleteMovie={handleDeleteMovie}
          getMovies={getMovies} />)}
      <Footer />
    </>
  );

};

export default Movies;