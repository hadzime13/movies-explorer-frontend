import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Message from '../Message/Message';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


const SavedMovies = ({ savedMovies, getMovies, shortMoviesSwitch,
  isShortMovies, shortMoviesOff, handleDeleteMovie, errorText, filterSavedMovies, userMovies }) => {
  React.useEffect(() => {
    getMovies();
    return () => {
      shortMoviesOff();
    }
  }, [])

  return (
    <>
      <Header />
      <SearchForm
        userMovies={userMovies}
        filterSavedMovies={filterSavedMovies}
        shortMoviesSwitch={shortMoviesSwitch}
        isShortMovies={isShortMovies} />
      {errorText && <Message messageText={errorText} />}
      <MoviesCardList
        savedMoviesPage={true}
        savedMovies={savedMovies}
        handleDeleteMovie={handleDeleteMovie}
        mod='movies-cardlist__container_type_saved'
      />
      <Footer />
    </>
  );

};

export default SavedMovies;