import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import logo from '../../images/logo.svg';


const Header = React.memo(({ mod, loggedIn = true, isMenuOn = true }) => {
  return (
    <header className={`header__container${mod ? ` ${mod}` : ''}`}>
      <Link to="/" className="header__link">
        <img src={logo} alt="Лого" className="header__logo" />
      </Link>
      {isMenuOn && (<Navigation isLoggedIn={loggedIn} />)}
    </header>
  );
});

export default Header;