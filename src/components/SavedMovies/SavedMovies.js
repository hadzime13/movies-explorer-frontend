import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


const SavedMovies = () => {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList isSaved={true} mod='movies-cardlist__container_type_saved'/>
      <Footer />
    </>
  );

};

export default SavedMovies;