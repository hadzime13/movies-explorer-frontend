import React, { useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader'
import Message from '../Message/Message';
import useWindowSize from '../../utils/useWindowSize';
import { handleResponseError, getMoviesList } from '../../utils/MoviesApi';
import { notFoundMessage, serverErrorMessage } from '../../config/index';


const Movies = () => {
  // *** Переменные состояния
  // Состояние прелоадера
  const [preloaderOn, setPreloaderOn] = useState(false);
  // Стейт для хранения отображаемых фильмов
  const [filterMovies, setFilterMovies] = useState([]);
  // Стейт для хранения найденных фильмов
  const [foundMovies, setFoundMovies] = useState([]);
  // Стейт для текста ошибки поиска
  const [errorText, setErrorText] = useState('');
  // Cтейт для хранения числа фильмов на странице и добавляемых по кнопке еще
  const [numberOfMovies, setNumberOfMovies] = useState(0);
  // Стейт состояния кнопки
  const [isButtonOn, setButtonState] = useState(true);

  // Используем хук для ширины экрана
  const width = useWindowSize();

  // Функция поиска фильмов
  const searchMovies = (searchText) => {
    setErrorText('');
    setPreloaderOn(true);
    // Поиск фильмов в массиве по запросу
    const filterMovies = (movies) => {
      const foundMovies = movies.filter((movie) => {
        const nameRu = movie.nameRU || '';
        const nameEn = movie.nameEN || '';
        return (nameRu.toLowerCase().includes(searchText) || nameEn.toLowerCase().includes(searchText));
      });
      if (foundMovies.length === 0) {
        setErrorText(notFoundMessage);
      }
      setPreloaderOn(false);
      checkButton(foundMovies, numberOfMovies.show);
      setFoundMovies(foundMovies);
      setFilterMovies(foundMovies.slice(0, numberOfMovies.show));
      localStorage.setItem('moviesList', JSON.stringify(foundMovies))
    }
    // Проверка нужно ли идти в API за списком фильмов
    const fullMoviesList = JSON.parse(localStorage.getItem('fullMoviesList'));
    if (fullMoviesList) {
      console.log('не ходил в API')
      filterMovies(fullMoviesList);
    }
    else {
      getMoviesList()
        .then((res) => {
          console.log('сходил в API');
          localStorage.setItem('fullMoviesList', JSON.stringify(res));
          filterMovies(res);
        })
        .catch((err) => {
          setErrorText(serverErrorMessage)
          setPreloaderOn(false);
          handleResponseError(err);
        })
    }

  }

  // Функция первой загрузки карточек
  const renderCardsOnFirstLoad = (number) => {
    if (localStorage.getItem('moviesList')) {
      const movies = (JSON.parse(localStorage.getItem('moviesList')));
      console.log(movies.length);
      console.log(movies.slice(0, number).length);
      checkButton(movies, number);
      setFoundMovies(movies);
      console.log(`render ${number} cards`);
      setFilterMovies(movies.slice(0, number));
    }
  }

  // Функция подгрузки карточек при нажатии Еще
  const loadCards = () => {
    const addCards = (number) => {
      const showMovies = numberOfMovies + number;
      setNumberOfMovies(showMovies)
      console.log(showMovies);
      checkButton(foundMovies, showMovies);
      setFilterMovies(foundMovies.slice(0, showMovies));
    }

    if (width === 'display' || width === 'largeDisplay') {
      const addMovies = 3;
      console.log(addMovies);
      addCards(addMovies);
    }
    else {
      const addMovies = 2;
      console.log(addMovies);
      addCards(addMovies);
    }
  }

  // Функция состояния кнопки еще
  const checkButton = (result, sliceNumber) => {
    if (result.length <= result.slice(0, sliceNumber).length) {
      setButtonState(false);
    }
    else if (!isButtonOn) {
      setButtonState(true);
    }
  }
  // При загрузке страницы
  React.useEffect(() => {
    if (width === 'display' || width === 'largeDisplay') {
      console.log(12);
      setNumberOfMovies(12)
      renderCardsOnFirstLoad(12);
    }
    else if (width === 'tablet') {
      setNumberOfMovies(8)
      renderCardsOnFirstLoad(8);
    }
    else if (width === 'mobile') {
      setNumberOfMovies(5)
      renderCardsOnFirstLoad(5);
    }
  }, [])


  return (
    <>
      <Header isLoggedIn={true} />
      <SearchForm searchMovies={searchMovies} />
      {preloaderOn && <Preloader />}
      {errorText && <Message messageText={errorText} />}
      {!preloaderOn && !errorText && (<MoviesCardList movies={filterMovies} onButtonClick={loadCards} isButtonOn={isButtonOn} />)}
      <Footer />
    </>
  );

};

export default Movies;