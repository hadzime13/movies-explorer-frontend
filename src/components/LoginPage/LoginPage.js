import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';

const LoginPage = ({ handleLogin, loginError }) => {

  return (
    <>
      <Header mod="header__container_type_register" isMenuOn={false} />
      <Login handleLogin={handleLogin} loginError={loginError} />
    </>
  )
}

export default LoginPage;