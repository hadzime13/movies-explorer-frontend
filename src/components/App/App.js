import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProfilePage from '../ProfilePage/ProfilePage';
import RegisterPage from '../RegisterPage/RegisterPage';
import LoginPage from '../LoginPage/LoginPage';
import NotFound from '../NotFound/NotFound';


function App() {

  // *** Переменные состояния

  // Регистрация

  const [isRegistered, setRegisterState] = useState({
    state: false,
    message: '',
  });

  return (
    <div className="app">
      <Switch >
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/signup">
          <RegisterPage />
        </Route>
        <Route path="/signin">
          <LoginPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
