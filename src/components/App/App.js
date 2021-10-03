import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProfilePage from '../ProfilePage/ProfilePage';
import RegisterPage from '../RegisterPage/RegisterPage';
import LoginPage from '../LoginPage/LoginPage';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/mainApi';
import useWindowSize from '../../utils/useWindowSize';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { getMoviesList } from '../../utils/MoviesApi';
import { imageURL } from '../../config/index';
import { notFoundMessage, serverErrorMessage } from '../../config/index';


function App() {

  // *** Переменные состояния

  // Ошибки
  const [errorMessages, setErrorMessages] = useState({
    loginError: '',
    registerError: '',
    editProfileError: '',
    saveMovieError: '',
    searchError: '',
  });

  // Данные пользователя 
  const [userData, setUserData] = useState({
    id: '',
    name: '',
    email: '',
  });
  // Статус логина
  const [loggedIn, setLoggedIn] = useState(false);
  // Статус проверен ли токен
  const [permissionsChecked, setPermissionsChecked] = useState(false);
  // Открыта ли форма редактирования профиля
  const [isEditProfile, setEditProfile] = useState(false);

  // Состояние прелоадера
  const [preloaderOn, setPreloaderOn] = useState(false);
  // Стейт для хранения отображаемых фильмов
  const [filteredMovies, setFilterMovies] = useState([]);
  // Стейт для хранения короткометражек 
  const [foundShortMovies, setFoundShortMovies] = useState([]);
  // Стейт переключателя короткометражек
  const [isShortMovies, setIsShortMovies] = useState(false);

  // Стейт для хранения найденных фильмов
  const [foundMovies, setFoundMovies] = useState([]);
  // Стейт для сохраненных пользователем фильмов
  const [savedMovies, setSavedMovies] = useState([]);

  // Стейт для сохраненных короткометражек
  const [savedShortMovies, setSavedShortMovies] = useState([]);

  // Стейт для отображаемых сохраненных фильмов 
  const [savedFilteredMovies, setSavedFilteredMovies] = useState([]);

  // Cтейт для хранения числа фильмов на странице и добавляемых по кнопке еще
  const [numberOfMovies, setNumberOfMovies] = useState(0);
  // Стейт состояния кнопки
  const [isButtonOn, setButtonState] = useState(true);

  const history = useHistory();
  // Используем хук для ширины экрана
  const width = useWindowSize();

  // Функция регистрации
  const handleRegister = (name, email, password) => {
    mainApi
      .register(name, email, password)
      .then((res) => {
        if (res.message === 'celebrate request validation failed') {
          setErrorMessages({
            ...errorMessages,
            registerError: `${res.validation.body.message}.`,
          })
          return Promise.reject(
            `Ошибка: ${res.validation.body.message}.`
          );
        }
        else if
          (res.error || res.message) {
          setErrorMessages({
            ...errorMessages,
            registerError: `${res.error ? res.error : res.message}.`,
          })
          return Promise.reject(
            `Ошибка: ${res.error ? res.error : res.message}.`
          );
        }
        else {
          setErrorMessages({
            ...errorMessages,
            registerError: ``,
          })
          setUserData({
            id: res._id,
            name: res.name,
            email: res.email,
          });
          handleLogin(email, password);
        }
      })
      .catch((res) => {
        console.log(res);
        setErrorMessages({
          ...errorMessages,
          registerError: `Что-то пошло не так :(' ${res}`,
        })
      });
  };

  // Функция авторизации
  const handleLogin = (email, password) => {
    mainApi
      .authorize(email, password)
      .then((res) => {
        if (res.message === 'celebrate request validation failed') {
          setErrorMessages({
            ...errorMessages,
            loginError: `${res.validation.body.message}.`,
          })
          return Promise.reject(
            `Ошибка: ${res.validation.body.message}.`
          );
        }
        else if (res.message) {
          setErrorMessages({
            ...errorMessages,
            loginError: `${res.error ? res.error : res.message}.`,
          })
          return Promise.reject(`Ошибка: ${res.message}`);
        } else {
          localStorage.setItem('jwt', res.token);
          mainApi.setToken(res.token);
          setLoggedIn(true);
          mainApi.getUser()
            .then((res) => {
              setUserData({
                id: res._id,
                name: res.name,
                email: res.email,
              });
            })
          history.push('/movies');
        }
      })
      .catch((res) => {
        console.log(res);
        setErrorMessages({
          ...errorMessages,
          loginError: `Что-то пошло не так :(' ${res}`,
        })
      });
  };

  // Функция выхода из системы
  const handleLogout = () => {
    localStorage.removeItem('jwt');
    mainApi.setToken('');
    setUserData({
      id: '',
      name: '',
      email: '',
    });
    setLoggedIn(false);
    history.push('/');
  };

  // // Функция проверки наличия и валидности токена
  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi
        .getContent(jwt)
        .then((res) => {
          if (res.message) {
            setLoggedIn(false);
            setUserData({
              id: '',
              name: '',
              email: '',
            });
            return Promise.reject(`Ошибка: ${res.message}`);
          }
          if (res.email) {
            console.log('logged');
            mainApi.setToken(jwt);
            setLoggedIn(true);
            setUserData({
              id: res._id,
              name: res.name,
              email: res.email,
            })
          }
        })
        .catch((res) => {
          return Promise.reject(`Ошибка: ${res.message}`);
        })
        .finally(() => {
          console.log('jwt checked!');
          setPermissionsChecked(true);
        });
    }
    else {
      setPermissionsChecked(true);
    }
  };

  // Функция открытия формы редактирования профиля
  const editProfile = () => {
    setEditProfile(isEditProfile ? false : true);
  }

  // Функция редактирования профиля
  const handleEditProfile = (name, email) => {
    mainApi
      .updateUser(name, email)
      .then((res) => {
        if (res.message === 'celebrate request validation failed') {
          setErrorMessages({
            ...errorMessages,
            editProfileError: `${res.validation.body.message}.`,
          })
          return Promise.reject(
            `Ошибка: ${res.validation.body.message}.`
          );
        }
        else if (res.error || res.message) {
          setErrorMessages({
            ...errorMessages,
            editProfileError: `${res.error ? res.error : res.message}.`,
          })
          return Promise.reject(
            `Ошибка: ${res.error ? res.error : res.message}.`
          );
        }
        else {
          setErrorMessages({
            ...errorMessages,
            editProfileError: '',
          })
          setUserData({
            ...userData,
            name: res.name,
            email: res.email,
          });
          editProfile();
        }
      })
      .catch((res) => {
        setErrorMessages({
          ...errorMessages,
          editProfileError: `Что-то пошло не так :(' ${res}`,
        })
      })
  }

  // Функция сохранения фильма
  const handleSaveMovie = (movie) => {
    const savedMovie = {
      country: movie.country || 'none',
      director: movie.director || 'none',
      duration: movie.duration,
      year: movie.year,
      description: movie.description || 'none',
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      image: `${imageURL}${movie.image.url}` || 'https://www.youtube.com/',
      trailer: movie.trailerLink || 'https://www.youtube.com',
      thumbnail: `${imageURL}${movie.image.formats.thumbnail.url}` || 'https://www.youtube.com/',
      movieId: movie.id,
    }
    console.log(savedMovie);
    mainApi
      .addMovie(savedMovie)
      .then((res) => {
        if (res.message === 'celebrate request validation failed') {
          setErrorMessages({
            ...errorMessages,
            saveMovieError: `${res.validation.body.message}.`,
          })
          return Promise.reject(
            `Ошибка: ${res.validation.body.message}.`
          );
        }
        else if (res.error || res.message) {
          setErrorMessages({
            ...errorMessages,
            saveMovieError: `${res.error ? res.error : res.message}.`,
          })
          return Promise.reject(
            `Ошибка: ${res.error ? res.error : res.message}.`
          );
        }
        else {
          setErrorMessages({
            ...errorMessages,
            saveMovieError: '',
          })
          console.log(`saved ${res.nameRU}`);
          getMovies();
        }
      })
      .catch((res) => {
        setErrorMessages({
          ...errorMessages,
          saveMovieError: `Что-то пошло не так :(' ${res}`,
        })
      })
  }

  // Функция удаления фильма

  const handleDeleteMovie = (movieId) => {
    mainApi
      .deleteMovie(movieId)
      .then((res) => {
        console.log(res);
        getMovies();
      })
      .catch((err) => console.log(err))
  }

  // Поиск фильмов в массиве по ключевому слову

  const filterMovies = (movies, searchText) => {
    setErrorMessages({
      ...errorMessages,
      searchError: '',
    });
    const foundMovies = movies.filter((movie) => {
      const nameRu = movie.nameRU || '';
      const nameEn = movie.nameEN || '';
      return (nameRu.toLowerCase().includes(searchText) || nameEn.toLowerCase().includes(searchText));
    });
    const foundShortMovies = foundMovies.filter((movie) => {
      return movie.duration <= 40;
    });
    if (foundMovies.length === 0) {
      setErrorMessages({
        ...errorMessages,
        searchError: notFoundMessage,
      });
    }
    setPreloaderOn(false);
    checkButton(foundMovies, numberOfMovies);
    setFoundMovies(foundMovies);
    setFoundShortMovies(foundShortMovies);
    setFilterMovies(foundMovies.slice(0, numberOfMovies));
    localStorage.setItem('moviesList', JSON.stringify(foundMovies))
  }

  // Поиск фильмов в сохраненных фильмах

  const filterSavedMovies = (movies, searchText) => {
    setErrorMessages({
      ...errorMessages,
      searchError: '',
    });
    const foundMovies = movies.filter((movie) => {
      const nameRu = movie.nameRU || '';
      const nameEn = movie.nameEN || '';
      return (nameRu.toLowerCase().includes(searchText) || nameEn.toLowerCase().includes(searchText));
    });
    const foundShortMovies = foundMovies.filter((movie) => {
      return movie.duration <= 40;
    });
    if (foundMovies.length === 0) {
      setErrorMessages({
        ...errorMessages,
        searchError: notFoundMessage,
      });
    }
    setSavedMovies(foundMovies);
    setSavedFilteredMovies(foundMovies);
    setSavedShortMovies(foundShortMovies);
  }
  // Функция поиска фильмов
  const searchMovies = (searchText) => {

    // Проверка нужно ли идти в API за списком фильмов
    const fullMoviesList = JSON.parse(localStorage.getItem('fullMoviesList'));

    if (fullMoviesList) {
      console.log('не ходил в API')
      filterMovies(fullMoviesList, searchText);
    }
    else {
      setPreloaderOn(true);
      getMoviesList()
        .then((res) => {
          console.log('сходил в API');
          localStorage.setItem('fullMoviesList', JSON.stringify(res));
          filterMovies(res, searchText);
        })
        .catch((err) => {
          setErrorMessages({
            ...errorMessages,
            searchError: serverErrorMessage,
          });
          setPreloaderOn(false);
        })
    }

  }

  // Функция первой загрузки карточек
  const renderCardsOnFirstLoad = (number) => {
    if (localStorage.getItem('moviesList')) {
      const movies = (JSON.parse(localStorage.getItem('moviesList')));
      // console.log(movies.length);
      // console.log(movies.slice(0, number).length);
      checkButton(movies, number);
      const foundShortMovies = movies.filter((movie) => {
        return movie.duration <= 40;
      });
      setFoundShortMovies(foundShortMovies);
      setFoundMovies(movies);
      // console.log(`render ${number} cards`);
      setFilterMovies(movies.slice(0, number));
    }
  }

  // Функция подгрузки карточек при нажатии Еще
  const loadCards = () => {
    const addCards = (number) => {
      const showMovies = numberOfMovies + number;
      setNumberOfMovies(showMovies)
      // console.log(showMovies);
      checkButton(foundMovies, showMovies);
      setFilterMovies(foundMovies.slice(0, showMovies));
    }

    if (width === 'display' || width === 'largeDisplay') {
      const addMovies = 3;
      // console.log(addMovies);
      addCards(addMovies);
    }
    else {
      const addMovies = 2;
      // console.log(addMovies);
      addCards(addMovies);
    }
  }

  // Функция загрузки сохраненных фильмов

  const getMovies = () => {
    console.log('get movies');
    mainApi
      .getAllMovies()
      .then((res) => {
        const savedShortMovies = res.filter((movie) => {
          return movie.duration <= 40;
        });
        setSavedMovies(res);
        setSavedFilteredMovies(res);
        setSavedShortMovies(savedShortMovies);
      })
      .catch((err) => console.log(err))
  }

  //  Функция состояния кнопки еще
  const checkButton = (result, sliceNumber) => {
    if (result.length <= result.slice(0, sliceNumber).length) {
      setButtonState(false);
    }
    else if (!isButtonOn) {
      setButtonState(true);
    }
  }

  // Функция кнопки короткометражек в фильмах

  const shortMoviesSwitch = () => {
    if (!isShortMovies) {
      setIsShortMovies(true);
      checkButton(foundShortMovies, numberOfMovies);
      setFilterMovies(foundShortMovies.slice(0, numberOfMovies));
    }
    else {
      setIsShortMovies(false);
      checkButton(foundMovies, numberOfMovies);
      setFilterMovies(foundMovies.slice(0, numberOfMovies));
    }
  }
  // Функция кнопки короткометражек в сохраненных фильмах

  const shortSavedMoviesSwitch = () => {
    if (!isShortMovies) {
      setIsShortMovies(true);
      setSavedFilteredMovies(savedShortMovies);
    }
    else {
      setIsShortMovies(false);
      setSavedFilteredMovies(savedMovies);
    }
  }

  // Очистка стейта короткометражек при переходе на другую страницу

  const shortMoviesOff = () => {
    setIsShortMovies(false);
    setFilterMovies(foundMovies.slice(0, numberOfMovies));
  }

  // Функция перехода на предыдущую страницу

  const goBack = () => {
    history.goBack();
  }

  // Проверка токена при загрузке страницы
  React.useEffect(() => {
    tokenCheck();
    setErrorMessages({
      loginError: '',
      registerError: '',
      editProfileError: '',
      searchError: '',
    })
  }, []);

  // Проверка сколько карточек отрисовывать в фильмах

  React.useEffect(() => {
    if (width === 'display' || width === 'largeDisplay') {
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
  }, []);

  if (!permissionsChecked) {
    return null;
  }

  return (
    <CurrentUserContext.Provider value={userData}>
      <div className="app">
        <Switch >
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>
          <ProtectedRoute
            exact path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={handleDeleteMovie}
            searchMovies={searchMovies}
            isPreloaderOn={preloaderOn}
            errorText={errorMessages.searchError}
            filteredMovies={filteredMovies}
            loadCards={loadCards}
            isButtonOn={isButtonOn}
            getMovies={getMovies}
            savedMovies={savedMovies}
            shortMoviesSwitch={shortMoviesSwitch}
            isShortMovies={isShortMovies}
            shortMoviesOff={shortMoviesOff} />
          <ProtectedRoute
            exact path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            savedMovies={savedFilteredMovies}
            userMovies={savedMovies}
            getMovies={getMovies}
            filterSavedMovies={filterSavedMovies}
            shortMoviesSwitch={shortSavedMoviesSwitch}
            isShortMovies={isShortMovies}
            shortMoviesOff={shortMoviesOff}
            handleDeleteMovie={handleDeleteMovie}
            errorText={errorMessages.searchError} />
          <ProtectedRoute
            exact path="/profile"
            loggedIn={loggedIn}
            component={ProfilePage}
            handleEditProfile={handleEditProfile}
            editProfileError={errorMessages.editProfileError || ''}
            editProfile={editProfile}
            isEditProfile={isEditProfile}
            handleLogout={handleLogout} />
          <Route exact path="/signup">
            <RegisterPage
              handleRegister={handleRegister}
              registerError={errorMessages.registerError || ''}
            />
          </Route>
          <Route exact path="/signin">
            <LoginPage handleLogin={handleLogin} loginError={errorMessages.loginError || ''} />
          </Route>
          <Route path="*">
            <NotFound goBack={goBack} />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
