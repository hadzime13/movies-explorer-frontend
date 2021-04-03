import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


const Movies = () => {
  return (
    <>
      <Header isLoggedIn={true} />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  );

};

export default Movies;