import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLink from '../PageLink/PageLink';
import './Navigation.css';
import accountImage from '../../images/test.svg';
import CurrentUserContext from '../../contexts/CurrentUserContext';

const Navigation = ({ isLoggedIn = false }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const [isOpenMenu, setMenuState] = useState(false);
  const onClick = () => {
    isOpenMenu ? setMenuState(false) : setMenuState(true);
  }
  return (
    <>
      <nav className={`navigation__menu
      ${isLoggedIn ? '' : ' navigation__menu_not-logged-in'}
      ${isOpenMenu ? 'navigation__menu_burger' : ''}`} >
        {isLoggedIn ? (
          <>
            {isOpenMenu && (<Link to="/" className="navigation__link">Главная</Link>)}
            <PageLink linkText="Фильмы" link="/movies" />
            <PageLink linkText="Сохраненные фильмы" link="/saved-movies" />
            <PageLink linkText="Аккаунт" link="/profile" linkImage={accountImage} mod="pagelink_type_account" />
          </>
        ) : (
          <>
            <PageLink linkText="Регистрация" link="/signup" />
            <PageLink linkText="Войти" link="/signin" mod="pagelink_type_login" />
          </>
        )}
      </nav>
      <button
        type="button"
        aria-label="Меню"
        className={`navigation__button${isOpenMenu ? ' navigation__button_open-menu' : ''}`}
        onClick={onClick}>
        <span className="navigation__span" />
      </button>
    </>
  )
}

export default Navigation;
